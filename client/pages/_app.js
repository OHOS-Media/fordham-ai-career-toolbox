import { useState, useEffect } from "react";
import { AuthProvider } from "@/context/AuthContext";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Layout from "@/components/Layout.jsx";
import { client } from "@/src/sanity/lib/client.js";
import { Toaster } from "react-hot-toast";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

const inter_init = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

if (typeof window !== "undefined") {
  // checks that we are client-side
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug(); // debug mode in development
    },
  });
}

export default function App({ Component, pageProps }) {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const data = await client.fetch(`*[_type == "footer"][0]`);
        setFooterData(data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchFooterData();
  }, []);

  return (
    <PostHogProvider client={posthog}>
      <AuthProvider>
        <main className={inter_init.className}>
          <Layout footerData={footerData}>
            <Component {...pageProps} />
          </Layout>
        </main>

        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "",
            duration: 3000,
            style: {
              background: "#FFFFFF",
              opacity: 0.8,
              color: "#282220",
              borderRadius: "16px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
            },
          }}
        />
      </AuthProvider>
    </PostHogProvider>
  );
}
