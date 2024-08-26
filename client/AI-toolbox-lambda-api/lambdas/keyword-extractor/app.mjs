import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export const lambdaHandler = async (event, context) => {
  let response;
  try {
    console.log("event:", event);

    let jobDescription;
    if (event.body) {
      // Parse the body if it's a string
      const body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;
      jobDescription = body.jobDescription;
    } else if (event.queryStringParameters) {
      // Fallback to query parameters if body is not present
      jobDescription = event.queryStringParameters.jobDescription;
    }

    console.log("jobDescription:", jobDescription);

    if (!jobDescription) {
      throw new Error("Job description is missing from the request");
    }

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are an expert career consultant." },
        {
          role: "user",
          content: `Extract job-related keywords and key phrases from the following job description, limit to the top 20 most important:\n\n${jobDescription}. Format the response as an array of strings.`,
        },
      ],
      model: "gpt-4o",
    });

    const keywords = JSON.parse(completion.choices[0].message.content);
    console.log("keywords:", keywords);

    response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Be more specific in production
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ keywords }),
    };
  } catch (error) {
    console.error("error:", error);
    response = {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Be more specific in production
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        error: "Failed to extract keywords: " + error.message,
      }),
    };
  }

  return response;
};
