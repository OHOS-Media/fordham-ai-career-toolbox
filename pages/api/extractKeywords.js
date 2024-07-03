// pages/api/extractKeywords.js
import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { jobDescription } = req.body;

    try {
      const completion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "You are an expert career consultant." },
          {
            role: "user",
            content: `Extract job related keywords and key phrases from the following job description, limit to the top 20 most important:\n\n${jobDescription}. Format the response as an array of strings.`,
          },
        ],
        model: "gpt-4o",
      });

      //   const keywords = completion.choices[0].message.content;
      const keywords = JSON.parse(completion.choices[0].message.content);
      console.log(keywords);

      res.status(200).json({ keywords });
    } catch (error) {
      res.status(500).json({ error: "Failed to extract keywords" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
