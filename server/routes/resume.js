const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

const { validateText } = require("../middleware/validateText.js");
const requireTerms = require("../middleware/requireTerms.js");
const { ensureAuthenticated } = require("../middleware/auth.js");

const openai = new OpenAI(process.env.OPENAI_API_KEY);
const { SYSTEM_PROMPT_RESUME_ENHANCER } = require("../config/constants");

const { mockBulletPoints } = require("../mockdata");

router.post(
  "/resume",
  ensureAuthenticated,
  requireTerms,
  validateText("RESUME_ENHANCER"),
  async (req, res) => {
    try {
      // console.log("Received request:", req.body);

      const { resume, jobDescription } = req.body;

      if (!resume || !jobDescription) {
        return res.status(400).json({ error: "Both resume and job description are required" });
      }

      // console.log("resume:", resume);
      // console.log("jobDescription:", jobDescription);

      // Un-comment the line below to use the AI API instead of the mock data
      const completion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "You are an expert career consultant." },
          {
            role: "user",
            content:
              SYSTEM_PROMPT_RESUME_ENHANCER +
              `\n\nResume:\n${resume}\n\nJob Description:\n${jobDescription}. 
              Format the response as a Javascript array of object with the experience as the key and bullet points as the value such as: 
              [{"company name only 1":["enhanced bullet point 1",...]}]`,
          },
        ],
        model: "gpt-4o",
      });

      // Clean the response content
      const content = completion.choices[0].message.content;
      // console.log("content:", content);

      const jsonStart = content.indexOf("[");
      const jsonEnd = content.lastIndexOf("]") + 1;
      const jsonString = content.substring(jsonStart, jsonEnd);

      const enhancedBulletPoints = JSON.parse(jsonString);

      // Remove the line below to use the AI API
      // const enhancedBulletPoints = mockBulletPoints;
      // console.log("enhancedBulletPoints:", enhancedBulletPoints);

      res.json(enhancedBulletPoints);
    } catch (error) {
      console.error("Error enhancing resume:", error);
      res.status(500).json({
        error: "Failed to enhance resume",
        details: error.message,
      });
    }
  }
);

module.exports = router;
