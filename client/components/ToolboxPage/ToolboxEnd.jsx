import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const messages = [
  "Go make an impact!",
  "You're capable. Own it!",
  "Show the world your skills!",
  "Success is within reach!",
  "You're ready to shine!",
  "You've got this!",
  "Chase your dreams!",
  "Take the first step!",
  "Own your future!",
  "Go make a difference!",
];

export default function ToolboxEnd() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    function messageRandomizer() {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setMessage(messages[randomIndex]);
    }

    messageRandomizer();

    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return <h1 className="h1 text-primary text-center">{message}</h1>;
}
