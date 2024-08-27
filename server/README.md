# AI Career Toolbox Server

This is the server-side component of the AI Career Toolbox application. It's built with Express.js and provides the backend API for the Next.js client.

## Directory Structure

```
server/
├── config/         # Configuration files
├── middleware/     # Custom middleware functions
├── models/         # Database models
├── routes/         # API routes
├── utils/          # Utility functions
├── .env            # Environment variables (create this file)
├── package.json    # Project dependencies and scripts
└── server.js       # Main server file
```

## Setup and Installation

1. Install dependencies:

   ```
   npm install
   ```

2. Set up environment variables:

   - Create `.env` with this sample
   - Fill in the necessary environment variables

   ```
   CLIENT_URL=http://localhost:3000
   SERVER_URL=http://localhost:8000
   PORT=8000
   MONGODB_URI=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   SESSION_SECRET=
   OPENAI_API_KEY=
   ```

3. Start the server:
   - For development: `npm start`
   <!-- - For production: `npm start` -->

## API Endpoints

- `GET /auth/google`: Google OAuth authentication
- `GET /auth/logout`: User logout
- `GET /api/user`: Get current user information
- `POST /api/extract-keywords`: Send a request to the OpenAI API for keyword extraction
- (Add other API endpoints here)

## Database

This server uses MongoDB. Make sure you have MongoDB installed and running, and provide the correct connection string in your `.env` file.

<!-- ## Testing

Run tests with:

```
npm test
``` -->

<!-- ## Contributing

Please read the main [CONTRIBUTING.md](../CONTRIBUTING.md) file in the root directory for details on our code of conduct and the process for submitting pull requests. -->
