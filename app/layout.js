import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head title="My first app with Next13" />
      <body>{children}</body>
    </html>
  );
}
