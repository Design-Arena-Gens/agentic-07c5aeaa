import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "@/components/react-query-provider";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "EduSwap Somalia",
  description:
    "A community marketplace for textbooks and educational resources serving Somali students, parents, and educators.",
  keywords: [
    "Somalia",
    "education",
    "marketplace",
    "textbooks",
    "school supplies",
    "C2C"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <ReactQueryProvider>
          <SiteShell>{children}</SiteShell>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
