export const metadata = {
  title: "Ram Resume Studio",
  description: "Ram Resume Content Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
