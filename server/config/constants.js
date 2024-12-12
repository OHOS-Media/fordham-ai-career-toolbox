// constants.js
exports.TOOL_LIMITS = {
  KEYWORD_EXTRACTOR: 700,
  RESUME_ENHANCER: 700,
  // Add other tools as needed
};

exports.INAPPROPRIATE_CONTENT = [
  "profanity",
  "explicit",
  "offensive",
  "inappropriate",
  "nsfw",
  // Add more inappropriate terms as needed
];

exports.SYSTEM_PROMPT_KEYWORDS_EXTRACTION = `
  I'm creating a resume that includes relevant keywords from the job description below and need to get scored as highly as possible from the ATS (Applicant Tracking Software) that many job sites use to rank candidates.
  I need to know the top ATS keywords for the job description.
  Please list the Top 15 keywords in priority as an array for me from the job description.
  Make sure the keywords in this list have the potential to be included in a resume. As much as possible, remove generic terms from this list.
  Format the response as an array of strings.
  Here is the job description:\n\n
`;

exports.SYSTEM_PROMPT_RESUME_ENHANCER = `
  Next take this array of keywords and include them as you rewrite the following bullet points in my resume see below. 
  For these bullet points, I do not want to be perceived as a “doer,” but rather as an “achiever” or a leader. 
  A few too many of my resume sentences are task-based and not results-based so my resume sometimes tends to tell people what I did instead of what I achieved. 
  Please show me my original bullet point and below it show me 3 alternatives for each bullet point. 
  Indicate in UNDERLINE anywhere you included an ATS keyword (so I can see the keywords that you used). 
  Please use only information that can be honestly attributed from my resume. 
  If you cannot easily re-write a bullet point because of lack of experience, BOLD ITALICS any suggestions for including a stronger result and use placeholders for quantitative results that I may not have but that you recommend that I include, such as ""... resulting in X% increase in conversion rates.""
  Here are my resume including bullet points and remember your recommendations should align with a student who is entry-level:\n\n
`;

exports.SYSTEM_PROMPT_COVER_LETTER = `
  Write a cover letter for the job in the job description by matching qualifications from my resume to the job description provided. 
  Keep the cover letter very short, four paragraphs at most (and no bullet points). 
  Please call out specific experience that I have for the role. 
  Respond to this prompt using only information that can be attributed from my resume. 
  Keep the language relatively casual.\n\n
`;
