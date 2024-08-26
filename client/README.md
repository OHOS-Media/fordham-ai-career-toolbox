# AI Career Toolbox Client

This is the client-side component of the AI Career Toolbox application. It's built with Next.js and provides the user interface for interacting with the AI-powered career tools.

## Directory Structure

```
client/
├── components/     # React components
├── pages/          # Next.js pages and API routes
├── public/         # Static files
├── styles/         # CSS styles
├── AI-toolbox-lambda-api/  # AWS Lambda functions
├── .env.local      # Local environment variables (create this file)
├── next.config.mjs # Next.js configuration
├── package.json    # Project dependencies and scripts
└── tailwind.config.js  # Tailwind CSS configuration
```

## Setup and Installation

1. Install dependencies:

   ```
   npm install
   ```

2. Set up environment variables:

   - Create `.env.local`
   - Fill in the necessary environment variables

   ```
   NEXT_PUBLIC_SERVER_URL=http://localhost:8000
   OPENAI_API_KEY=
   ```

3. Run the development server:

   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm start`: Runs the built app in production mode
- `npm run lint`: Lints the codebase

## Features

- User authentication with Google OAuth
- Job description keyword extraction
- ...

# Style Guide

This project uses Tailwind CSS for styling, ensuring a standardized look and feel throughout the application.

## Custom Tailwind Font Classes

### Overview

This documentation outlines the usage of custom Tailwind CSS font classes for consistent typography across the project. These classes extend Tailwind's utility-first approach by adding specific font styles that can be applied to elements.

### Why Use Custom Font Classes?

Instead of directly using Tailwind's default utility classes like `font-bold`, custom classes like `.body-txt-lg-bold` offer several advantages:

1. **Consistency**: Custom classes ensure that specific typography rules (e.g., letter-spacing, line-height) are consistently applied to elements across the entire project. This reduces the chances of styling inconsistencies.

2. **Readability**: Custom classes improve the readability of your HTML by providing more descriptive class names. For example, `.body-txt-lg-bold` clearly indicates that the text is both large and bold, making it easier to understand the purpose of the class at a glance.

3. **Maintainability**: Centralized typography management makes it easier to update styles globally. If you need to adjust the line height, letter spacing, or any other property, you can do it in one place without needing to search and replace individual utility classes throughout your codebase.

4. **Scalability**: As your project grows, using standardized classes helps maintain a clean and scalable codebase. It allows for easier onboarding of new developers who can quickly understand the predefined styles.

### Custom Classes

#### Headings

- **`.h1`**: Large, bold heading
- **`.h2`**: Medium, bold heading
- **`.h3`**: Smaller, bold heading
- **`.h4`**: Bold, slightly smaller heading
- **`.h5`**: Medium, semi-bold heading
- **`.h6`**: Small, semi-bold heading

#### Body Text

- **`.body-txt-lg`**: Large body text
- **`.body-txt-lg-bold`**: Large, bold body text
- **`.body-txt-md`**: Medium body text
- **`.body-txt-md-bold`**: Medium, bold body text
- **`.body-txt`**: Default body text
- **`.body-txt-bold`**: Default bold body text
- **`.body-txt-sm`**: Small body text<>

<!-- ## Contributing

Please read the main [CONTRIBUTING.md](../CONTRIBUTING.md) file in the root directory for details on our code of conduct and the process for submitting pull requests. -->
