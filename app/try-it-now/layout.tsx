import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Try SpaceCRM Free — Get Started in Minutes",
  description:
    "Set up your SpaceCRM workspace free. Send email campaigns, automate LinkedIn outreach, WhatsApp marketing, and transactional email — no credit card required.",
};

export default function TryItNowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
