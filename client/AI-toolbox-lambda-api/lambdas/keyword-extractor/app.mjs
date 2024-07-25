/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

// Rename this file to app.mjs

import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export const lambdaHandler = async (event, context) => {
  let response;
  try {
    console.log("event:", event);

    // Extract jobDescription from query parameters
    const jobDescription = event.queryStringParameters.jobDescription;
    console.log("jobDescription:", jobDescription);

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
      body: JSON.stringify({ keywords }),
    };
  } catch (error) {
    console.error("error:", error);
    response = {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to extract keywords" && error.message,
      }),
    };
  }

  return response;
};
