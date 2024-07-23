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

    // Parse the body instead of queryStringParameters
    const { resume, jobDescription } = JSON.parse(event.body);
    console.log("resume:", resume);
    console.log("jobDescription:", jobDescription);

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are an expert career consultant." },
        {
          role: "user",
          content: `Based on this array of keywords, I must integrate them into my resume. I am going to enter my resume and will need you to suggest where I can put these keywords. \n\nResume:\n${resume}\n\nJob Description:\n${jobDescription}. Format the response as a Javascript array of object with the experience as the key and bullet points as the value such as: [{"Experience 1":["enhanced bullet point 1",...]}]`,
        },
      ],
      model: "gpt-4o",
    });

    // Clean the response content
    const content = completion.choices[0].message.content;
    console.log("content:", content);

    const jsonStart = content.indexOf("[");
    const jsonEnd = content.lastIndexOf("]") + 1;
    const jsonString = content.substring(jsonStart, jsonEnd);

    const enhancedBulletPoints = JSON.parse(jsonString);
    console.log("enhancedBulletPoints:", enhancedBulletPoints);

    response = {
      statusCode: 200,
      body: JSON.stringify(enhancedBulletPoints),
    };
  } catch (error) {
    console.error("error:", error);
    response = {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to enhance bullet points" && error.message,
      }),
    };
  }

  return response;
};
