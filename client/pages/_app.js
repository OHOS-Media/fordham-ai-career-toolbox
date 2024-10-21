import { useState, useEffect } from "react";
import { AuthProvider } from "@/context/AuthContext";
import { Inter } from "next/font/google";
import PasswordEntry from "../components/PasswordEntry.jsx";
import "@/styles/globals.css";
import { useApi } from "@/hooks/useApi.js";

import Layout from "@/components/Layout.jsx";
import { client } from "@/src/sanity/lib/client.js";

const inter_init = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  // const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const { request } = useApi();

  // useEffect(() => {
  //   const checkPasswordVerification = async () => {
  //     try {
  //       await request("/api/verify-password", {
  //         method: "POST",
  //         body: JSON.stringify({ password: "" }),
  //       });
  //       setIsPasswordVerified(true);
  //     } catch (error) {
  //       console.error("Error checking password verification:", error);
  //       setIsPasswordVerified(false);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   checkPasswordVerification();
  // }, [request]);

  // if (isLoading) {
  //   return <div className={inter_init.className}>Loading...</div>;
  // }

  // if (!isPasswordVerified) {
  //   return (
  //     <div className={inter_init.className}>
  //       <PasswordEntry onPasswordVerified={() => setIsPasswordVerified(true)} />
  //     </div>
  //   );
  // }

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
    <AuthProvider>
      <main className={inter_init.className}>
        <Layout footerData={footerData}>
          <Component {...pageProps} />
        </Layout>
      </main>
    </AuthProvider>
  );
}
