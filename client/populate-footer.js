import { createClient } from "@sanity/client";
import fs from "fs";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: "2023-05-03", // Use the latest API version
});

const footerData = {
  _id: "footer", // Specify a fixed ID for the footer document
  _type: "footer",
  description:
    "RAMResume empowers Fordham students with AI-driven tools to optimize their job search process.",
  links: [
    {
      title: "Links",
      items: [
        { title: "Toolbox", path: "/toolbox" },
        { title: "About Us", path: "/about-us" },
        { title: "Home", path: "/" },
        { title: "Profile", path: "/profile" },
        { title: "Blogs", path: "/blogs" },
      ],
    },
    {
      title: "Support",
      items: [
        { title: "Keeping Data Private", path: "/data-privacy" },
        { title: "FAQs", path: "/faq" },
        { title: "Privacy Policy", path: "https://www.fordham.edu/privacy-policy" },
        { title: "Terms and Conditions", path: "https://www.fordham.edu/terms-and-conditions" },
        { title: "PPD", path: "https://www.fordham.edu/ppd" },
        { title: "Nondiscrimination Policy", path: "/nondiscrimination" },
        { title: "Accessibility", path: "/accessibility" },
      ],
    },
  ],
  contact: {
    email: "ramresume@fordham.edu",
    phone: "+1 (718) 817-4000",
    address: "441 E Fordham Rd, The Bronx, NY 10458",
  },
  socialLinks: [
    { title: "Twitter", path: "https://twitter.com/FordhamNYC", icon: "twitter-icon" },
    {
      title: "Facebook",
      path: "https://www.facebook.com/FordhamUniversity",
      icon: "facebook-icon",
    },
    {
      title: "Instagram",
      path: "https://www.instagram.com/fordhamuniversity",
      icon: "instagram-icon",
    },
    {
      title: "LinkedIn",
      path: "https://www.linkedin.com/school/fordham-university",
      icon: "linkedin-icon",
    },
  ],
};

// Function to create or update the footer document
async function updateFooter() {
  try {
    const result = await client.createOrReplace(footerData);
    console.log(`Footer was created/updated, document ID is ${result._id}`);
  } catch (err) {
    console.error("Oh no, the update failed: ", err.message);
  }
}

updateFooter();
