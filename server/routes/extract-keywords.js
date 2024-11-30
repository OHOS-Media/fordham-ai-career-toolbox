const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
const checkUsageLimit = require("../middleware/UserUsage.js");
const { decrementUsage } = require("../controllers/UserUsage.controller.js");
const { validateText } = require("../middleware/validateText.js");
const requireTerms = require("../middleware/requireTerms.js");
const { ensureAuthenticated } = require("../middleware/auth.js");

const openai = new OpenAI(process.env.OPENAI_API_KEY);
const { SYSTEM_PROMPT_KEYWORDS_EXTRACTION } = require("../config/constants");

const { mockKeywords } = require("../mockdata");

router.post(
  "/extract-keywords",
  ensureAuthenticated,
  requireTerms,
  validateText("KEYWORD_EXTRACTOR"),
  checkUsageLimit,
  async (req, res) => {
    try {
      const { jobDescription } = req.body;
      // console.log("Received job description:", jobDescription);

      // console.log("Sending request to OpenAI");
      const completion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "You are an expert career consultant." },
          {
            role: "user",
            content: SYSTEM_PROMPT_KEYWORDS_EXTRACTION + jobDescription,
          },
        ],
        model: "gpt-4o",
      });

      await decrementUsage(req.userUsage);

      let content = completion.choices[0].message.content;
      //console.log("Raw OpenAI response:", content);

      // Remove any markdown formatting
      content = content.replace(/```json\n|\n```/g, "");

      // Attempt to parse the JSON
      let keywords;
      try {
        keywords = JSON.parse(content);
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
        // If parsing fails, try to extract an array from the string
        const match = content.match(/\[(.*)\]/s);
        if (match) {
          keywords = match[1].split(",").map((item) => item.trim().replace(/^"|"$/g, ""));
        } else {
          throw new Error("Unable to parse keywords from OpenAI response");
        }
      }

      // Uncomment the following line to use mock data
      // const keywords = mockKeywords;

      // console.log("Extracted keywords:", keywords);
      res.json({ keywords });
    } catch (error) {
      console.error("Error extracting keywords:", error);
      res.status(500).json({ error: "Failed to extract keywords", details: error.message });
    }
  }
);

module.exports = router;
