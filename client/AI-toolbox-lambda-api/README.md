# AI Toolbox Lambda API

## Overview

The AI Toolbox Lambda API is a serverless application built using AWS SAM (Serverless Application Model) that provides a set of AI-powered tools. This application includes endpoints for extracting keywords from job descriptions and enhancing resume bullet points to better match job descriptions. 

## Features

1. **Keyword Extractor**
   - Extracts job-related keywords from a provided job description.
   
2. **Bullet Point Enhancer**
   - Enhances resume bullet points based on a provided job description.

## Prerequisites

- AWS CLI configured with appropriate IAM permissions.
- AWS SAM CLI installed.
- Node.js and npm installed.

## Setup

### 1. Clone the Repository

```sh
git clone https://github.com/OHOS-Media/fordham-ai-career-toolbox.git
cd fordham-ai-career-toolbox
```

### 2. Install Dependencies

```sh
cd AI-toolbox-lambda-api
npm install
```

### 3. Environment Variables

Set up environment variables for sensitive data. For example, use AWS Secrets Manager or environment variables to manage the OpenAI API key.

### 4. AWS SAM Deployment

#### Build

```sh
sam build
```

#### Deploy

```sh
sam deploy --guided
```

Follow the prompts to configure the deployment parameters. Ensure you replace the OpenAI API key with an environment variable or a secure reference.

## Usage

### Endpoints

#### 1. Keyword Extractor

- **Endpoint**: `/extract-keywords`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "jobDescription": "Your job description here..."
  }
  ```
- **Response**:
  ```json
  {
    "keywords": [
      "keyword1",
      "keyword2",
      "keyword3",
      ...
    ]
  }
  ```

#### 2. Bullet Point Enhancer

- **Endpoint**: `/enhance-bullet-points`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "resume": "Your resume here...",
    "jobDescription": "Your job description here..."
  }
  ```
- **Response**:
  ```json
  [
    {
      "Experience 1": [
        "enhanced bullet point 1",
        "enhanced bullet point 2",
        ...
      ]
    },
    ...
  ]
  ```

### Example API Calls

#### Keyword Extractor Example

**Request**:
```json
{
  "jobDescription": "Qualifications Interest and excitement about problem solving and complex systems An aptitude for systems thinking and information architecture Experience in planning and running discovery – identify what input is needed and how best to get that input Interaction design skills (both on desktop and mobile) Experience in running collaborative workshops to communicate users needs and collaborate with both business and engineering to reach the best solution An aptitude for simplifying complexity and transforming data into valuable information Eagerness to learn, a track record for being self-driven, and experience managing multiple projects at the same time Benefits You join an inclusive, collaborative and global community where you have the opportunity to fuel the creative journey A modern office environment designed to foster productivity, creativity, and teamwork An attractive and comprehensive benefits package including medical, dental, vision, life & disability coverage, and 401K + employer matching Voluntary benefits like company-paid identity theft protection and resources for pets, mental health and meditation resources, industry-leading fertility coverage, fully paid leave for childbirth or bonding, fully paid leave for caregivers, programs for loved ones with developmental disabilities and neurodiversity, subsidized back-up child and elder care, and reimbursement for adoption, surrogacy, tuition and student loans We invest in your professional growth & development Time off for a winter recess Responsibilities You would be part of the product design team (both US and EU based) and would be working on strategic products and initiatives You would collaborate closely with product managers, various internal stakeholders, and engineering Support one of our key Product areas by owning the design and UX of all features and apps in this area Work within a complex system of content and permissions, dealing with a huge amount of data Contribute to the roadmap – collaborate with the rest of the product team to discover, define and prioritize product work Constantly work at creating value for our users by suggesting elegant and simple design solutions that solve their problems and seize new opportunities Coordinate with the rest of the product design team/PMs in other teams to create a consistent experience language, and seamless connections between apps Collaborate with other product designers on their projects to give feedback, collaborate, lead or mentor"
}
```

**Response**:
```json
{
  "keywords": [
    "problem solving",
    "complex systems",
    "systems thinking",
    "information architecture",
    "discovery planning",
    "input identification",
    "interaction design",
    "desktop and mobile design",
    "collaborative workshops",
    "user needs",
    "business collaboration",
    "engineering collaboration",
    "simplifying complexity",
    "transforming data",
    "self-driven",
    "managing multiple projects",
    "product design team",
    "UX design",
    "content and permissions",
    "design solutions"
  ]
}
```

#### Bullet Point Enhancer Example

**Request**:
```json
{
  "resume": "Katherine Scott Baltimore, MD | 410-555-0157 | katherinescott@email.com Summary &nbsp; Certified IT Specialist dedicated to providing exceptional customer support for all IT issues. Comfortable working with software and hardware systems in a fast-paced environment. Education &nbsp; Longwood Southern University 2020 Bachelor of Science in computer science Experience &nbsp; Franklin and Lopez Industries, Baltimore, Maryland, IT Support Specialist May 2021 – Current Provides IT support for customers and employees Installs and monitors hardware and software systems Regularly monitors computer systems for potential security threats Optimizes systems to improve technology efficiency by up to seven percent Runs a dedicated customer support line for questions or concerns M Andrews Technologies, Baltimore, Maryland, IT Specialist May 2020 – May 2021 Tested computer system vulnerabilities Installed any necessary security measures or updates Monitored network performance and noted areas for improvement Certifications &nbsp; Certified Ethical Hacker, EC-Council, 2020 Computing Technology Industry Association Network+ Certification, 2020 Skills &nbsp; Information security Customer service Problem-solving Computer system monitoring",
  "jobDescription": "Qualifications\nInterest and excitement about problem solving and complex systems\nAn aptitude for systems thinking and information architecture\nExperience in planning and running discovery – identify what input is needed and how best to get that input\nInteraction design skills (both on desktop and mobile)\nExperience in running collaborative workshops to communicate users needs and collaborate with both business and engineering to reach the best solution\nAn aptitude for simplifying complexity and transforming data into valuable information\nEagerness to learn, a track record for being self-driven, and experience managing multiple projects at the same time\nBenefits\nYou join an inclusive, collaborative and global community where you have the opportunity to fuel the creative journey\nA modern office environment designed to foster productivity, creativity, and teamwork\nAn attractive and comprehensive benefits package including medical, dental, vision, life %26 disability coverage, and 401K + employer matching\nVoluntary benefits like company-paid identity theft protection and resources for pets, mental health and meditation resources, industry-leading fertility coverage, fully paid leave for childbirth or bonding, fully paid leave for caregivers, programs for loved ones with developmental disabilities and neurodiversity, subsidized back-up child and elder care, and reimbursement for adoption, surrogacy, tuition and student loans\nWe invest in your professional growth %26 development\nTime off for a winter recess\nResponsibilities\nYou would be part of the product design team (both US and EU based) and would be working on strategic products and initiatives\nYou would collaborate closely with product managers, various internal stakeholders, and engineering\nSupport one of our key Product areas by owning the design and UX of all features and apps in this area\nWork within a complex system of content and permissions, dealing with a huge amount of data\nContribute to the roadmap – collaborate with the rest of the product team to discover, define and prioritize product work\nConstantly work at creating value for our users by suggesting elegant and simple design solutions that solve their problems and seize new opportunities\nCoordinate with the rest of the product design team/PMs in other teams to create a consistent experience language, and seamless connections between apps\nCollaborate with other product designers on their projects to give feedback, collaborate, lead or mentor"
}
```

**Response**:
```json
[
  {
    "Franklin and Lopez Industries, Baltimore, Maryland, IT Support Specialist": [
      "Provides IT support for customers and employees, ensuring effective communication",
      "Installs and monitors hardware and software systems, focusing on secure communication and network platforms",
      "Regularly monitors computer systems for potential security threats in the cyber domain",
      "Optimizes systems to improve technology efficiency by up to seven percent, incorporating knowledge management techniques",
      "Runs a dedicated customer support line for questions or concerns, maintaining a culture of innovation"
    ]
  },
  {
    "M Andrews Technologies, Baltimore, Maryland, IT Specialist": [
      "Tested computer system vulnerabilities, contributing to military intelligence and secure communication",
      "Installed any necessary security measures or updates to support the Naval network environment",
      "Monitored network performance and noted areas for improvement, driving interoperability"
    ]
  }
]
```

## Development

### Running Locally

You can use the following npm scripts to build and deploy the application locally:

- **Build and Deploy**:
  ```sh
  npm run lambda
  ```

### Contributing

Please make sure to update tests as appropriate.

## License

Distributed under the MIT
