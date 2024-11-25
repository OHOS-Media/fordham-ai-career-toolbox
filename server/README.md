# RamResume Server

Express.js server providing authentication, AI integration, and API endpoints for RamResume.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` file:

```env
# Server
PORT=8000
NODE_ENV=development

# Client URL (for CORS)
CLIENT_URL=http://localhost:3000

# MongoDB
MONGODB_URI=your_mongodb_uri

# Auth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret

# OpenAI
OPENAI_API_KEY=your_openai_key

# Security
SITE_PASSWORD=123
PAYLOAD_SECRET=your-payload-secret
```

3. Start development server:

```bash
npm start
```

## Project Structure

```
server/
├── config/          # Configuration files
├── controllers/     # Business logic
├── middleware/      # Custom middleware
├── models/          # Database models
├── routes/          # API routes
└── utils/          # Utility functions
```

## Available Scripts

- `npm run dev`: Start development server with nodemon
- `npm start`: Start production server
- `npm run check`: Run ESLint
- `npm test`: Run tests (not yet configured)

## Dependencies

### Production

- `express`: Web framework
- `mongoose`: MongoDB ODM
- `passport` & `passport-google-oauth20`: Authentication
- `openai`: OpenAI API client
- `connect-mongo`: Session storage
- `express-session`: Session management
- `cors`: CORS support
- `cookie-parser`: Cookie parsing
- `dotenv`: Environment variables
- `axios`: HTTP client

### Development

- `nodemon`: Development server
- `eslint`: Linting
- `prettier`: Code formatting

## API Endpoints

### Auth Routes

- `GET /auth/google`: Google OAuth login
- `GET /auth/google/callback`: OAuth callback
- `GET /auth/logout`: Logout
- `POST /auth/accept-terms`: Accept terms of service

### User Routes

- `GET /api/user`: Get user profile
- `GET /api/usage`: Get usage statistics

### Tool Routes

- `POST /api/extract-keywords`: Extract keywords from job description
- `POST /api/resume`: Enhance resume with AI

## Development

### Code Style

- ESLint configuration with Prettier integration
- Run `npm run check` before committing

### Environment Variables

- Never commit `.env` file
- Update `README.md` when adding new variables
