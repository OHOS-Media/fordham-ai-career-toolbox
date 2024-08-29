import { useState, useEffect } from "react";
import { AuthProvider } from "@/context/AuthContext";
import { Inter } from "next/font/google";
import PasswordEntry from "../components/PasswordEntry.jsx";
import "@/styles/globals.css";
import { useApi } from "@/hooks/useApi.js";

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

  return (
    <AuthProvider>
      <main className={inter_init.className}>
        <Component {...pageProps} />
      </main>
    </AuthProvider>
  );
}
