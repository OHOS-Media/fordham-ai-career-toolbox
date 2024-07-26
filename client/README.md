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

<!-- ## Styling

This project uses Tailwind CSS for styling. Customize the `tailwind.config.js` file to modify the default styles.

## Contributing

Please read the main [CONTRIBUTING.md](../CONTRIBUTING.md) file in the root directory for details on our code of conduct and the process for submitting pull requests. -->
