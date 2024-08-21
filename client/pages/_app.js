import { AuthProvider } from "@/context/AuthContext";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter_init = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <main className={inter_init.className}>
        <Component {...pageProps} />
      </main>
    </AuthProvider>
  );
}
