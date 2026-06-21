import type { Metadata } from "next";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Kotobana",
  description:
    "Privacy Policy for Kotobana, the gamified English learning iOS app.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
