# RamResume

RamResume is a comprehensive application designed to assist job seekers in optimizing their job search process using AI-powered tools. Built with Next.js and Express.js, it leverages artificial intelligence to help users create more effective resumes and improve their job search success.

## Project Structure

This project follows a monorepo structure with three main parts:

```
ramresume/
├── client/          # Next.js frontend application
├── server/          # Express.js backend server
└── package.json     # Root package.json for running both services
```

## Features

- 🔍 Smart Keyword Extraction: Extract relevant keywords from job descriptions
- 📝 Resume Optimization: Get AI-powered suggestions to improve your resume
- 🤖 AI Interview Preparation: Practice with AI-generated interview questions
- 📊 Application Tracking: Keep track of your job applications
- 🎯 Skills Matching: Compare your skills with job requirements

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or later)
- npm (v8 or later)
- MongoDB (v4.4 or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/OHOS-Media/ramresume.git
   cd ramresume
   ```

2. Install dependencies for all packages:
   ```bash
   npm run install-all
   ```
   This command will install dependencies for the root project, client, and server.

3. Set up environment variables:

   For the client (create `client/.env.local`):
   ```
   NEXT_PUBLIC_SERVER_URL=http://localhost:8000
   ```

   For the server (create `server/.env`):
   ```
   CLIENT_URL=http://localhost:3000
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   SESSION_SECRET=your_session_secret
   ```

## Development

Start both the client and server in development mode with a single command:
```bash
npm run dev
```

This will concurrently run:
- Client on http://localhost:3000
- Server on http://localhost:8000

To run services individually:
- Client only: `npm run client`
- Server only: `npm run server`

## Available Scripts

In the root directory:
- `npm run dev`: Start both client and server in development mode
- `npm run install-all`: Install dependencies for all packages
- `npm run client`: Start only the client
- `npm run server`: Start only the server

## Accessing the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/api

## Tech Stack

### Frontend
- Next.js
- React
- Tailwind CSS
- OpenAI API

### Backend
- Express.js
- MongoDB
- Passport.js (Google OAuth)
- AWS Lambda