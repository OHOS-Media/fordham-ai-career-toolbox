const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const { mockKeywords } = require('../mockdata')

router.post("/extract-keywords", async (req, res) => {
  try {
    const { jobDescription } = req.body;

    if (!jobDescription) {
      return res.status(400).json({ error: "Job description is required" });
    }

    // Un-comment the line below to use the AI API instead of the mock data
    // console.log("Sending request to OpenAI");
    // const completion = await openai.chat.completions.create({
    //   messages: [
    //     { role: "system", content: "You are an expert career consultant." },
    //     {
    //       role: "user",
    //       content: `Extract job-related keywords and key phrases from the following job description, limit to the top 20 most important:\n\n${jobDescription}. Format the response as an array of strings.`,
    //     },
    //   ],
    //   model: "gpt-4o",
    // });

    // const keywords = JSON.parse(completion.choices[0].message.content);

    // Remove the line below to use the AI API
    const keywords = mockKeywords;
    console.log("Extracted keywords:", keywords);

    res.json({ keywords });
  } catch (error) {
    console.error("Error extracting keywords:", error);
    res.status(500).json({ error: "Failed to extract keywords", details: error.message });
  }
});

module.exports = router;
