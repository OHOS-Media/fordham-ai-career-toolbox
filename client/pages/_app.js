import { useState, useEffect } from "react";
import { AuthProvider } from "@/context/AuthContext";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Layout from "@/components/Layout.jsx";
import { client } from "@/src/sanity/lib/client.js";
import { Toaster } from "react-hot-toast";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useRouter } from "next/router";

const inter_init = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  const [footerData, setFooterData] = useState(null);
  const router = useRouter();

  // PostHog Initialization and Page View Tracking
  useEffect(() => {
    if (!posthog.__loaded) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
        loaded: (posthog) => {
          if (process.env.NODE_ENV === "development") {
            posthog.debug();
          }
        },
        capture_pageview: false,
      });
    }

    const handleRouteChange = () => {
      posthog.capture("$pageview", {
        path: window.location.pathname,
      });
    };

    handleRouteChange();
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Footer Data Fetching
  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const data = await client.fetch('*[_type == "footer"][0]');
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
