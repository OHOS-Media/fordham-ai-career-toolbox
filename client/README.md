# RamResume Client

This is the client-side component of RamResume, built with Next.js and TailwindCSS. It provides an intuitive user interface for interacting with our AI-powered career tools.

## Directory Structure

```
client/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── ToolboxPage/     # Toolbox-specific components
│   └── ...
├── hooks/               # Custom React hooks
├── pages/               # Next.js pages and API routes
├── public/             # Static files
├── styles/             # Global styles and Tailwind config
├── utils/              # Utility functions
├── .env.local          # Local environment variables
├── next.config.mjs     # Next.js configuration
└── package.json        # Project dependencies and scripts
```

## Setup and Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:
   Create `.env.local` with the following:

   ```
   NEXT_PUBLIC_SERVER_URL=http://localhost:8000
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Access the application at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Run production build
- `npm run lint`: Run ESLint
- `npm run lambda`: Deploy Lambda functions

## Style Guide

### Design System

This project uses a custom design system built on top of Tailwind CSS, providing consistent typography, colors, and components across the application.

### Colors

```javascript
colors: {
  "fordham-black": "#282220",
  "fordham-brown": "#332D2B",
  "fordham-white": "#FFFFFF",
  "fordham-gray": "#D9D9D9",
  "fordham-light-gray": "#E1E1E1",
  "fordham-dark-gray": "#58585B",
}
```

## Icons Usage

This project uses Tabler Icons for consistent iconography. Import icons from '@tabler/icons-react':

```javascript
import { IconHome, IconUser, IconSettings } from "@tabler/icons-react";

function MyComponent() {
  return (
    <div>
      <IconHome size={24} /> {/* Standard size */}
      <IconUser size={24} stroke={1.5} /> {/* Customize stroke width */}
      <IconSettings size={24} stroke={1.5} color="currentColor" />
    </div>
  );
}
```

### Icon Guidelines

- Use standard size of 24px for most cases
- Use stroke width of 1.5 for optimal visibility
- Use currentColor to inherit text color
- Keep icons consistent within similar contexts

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
