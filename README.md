# AI Career Toolbox

AI Career Toolbox is a comprehensive application designed to assist job seekers in optimizing their job search process using AI-powered tools.

## Project Structure

This project is divided into two main parts:

- `client/`: A Next.js application that serves as the front-end interface.
- `server/`: An Express.js server that handles backend logic and API requests.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/OHOS-Media/fordham-ai-career-toolbox.git
   cd fordham-ai-career-toolbox
   ```

2. Install dependencies for both client and server:

   ```
   cd client && npm install
   cd ../server && npm install
   ```

3. Set up environment variables:

   - Add `.env.local` to `client/` and `.env` to `server/` directories
   - Fill in the necessary environment variables

4. Start the development servers:
   - For the client: `cd client && npm run dev`
   - For the server: `cd server && npm start`

## Features

- Keyword extraction from job descriptions
- Resume optimization
- AI-powered interview preparation
- Job application tracking

<!-- ## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details. -->
