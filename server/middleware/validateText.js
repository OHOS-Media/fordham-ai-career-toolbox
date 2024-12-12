// server/middleware/validateText.js
const { TOOL_LIMITS, INAPPROPRIATE_CONTENT } = require("../config/constants");

const countWords = (text) => {
  return text.trim().split(/\s+/).filter(Boolean).length;
};

const containsInappropriateContent = (text) => {
  const lowerText = text.toLowerCase();
  return INAPPROPRIATE_CONTENT.some((word) => lowerText.includes(word.toLowerCase()));
};

const validateText = (toolName) => {
  // Return the middleware function
  return async (req, res, next) => {
    try {
      let text;
      if (toolName === "EXTRACT_KEYWORDS") {
        text = req.body.jobDescription;
      } else if (toolName === "RESUME_ENHANCER") {
        text = req.body.resume;
      }

      const wordLimit = TOOL_LIMITS[toolName];

      if (!text) {
        return res.status(400).json({
          error: "No text provided",
        });
      }
      // Check word count
      const wordCount = countWords(text);
      if (wordCount > wordLimit) {
        return res.status(400).json({
          error: `Text exceeds limit of ${wordLimit} words. Current length: ${wordCount} words.`,
          wordCount,
          wordLimit,
        });
      }

      // Check for inappropriate content
      if (containsInappropriateContent(text)) {
        return res.status(400).json({
          error: "Text contains inappropriate content",
          details: "Please review and remove any inappropriate language",
        });
      }

      next();
    } catch (error) {
      console.error("Error validating text:", error);
      return res.status(500).json({
        error: "Failed to validate text",
        details: error.message,
      });
    }
  };
};

module.exports = { validateText };
