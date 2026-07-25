import type { Metadata } from "next";
import type { ReactNode } from "react";
import { About } from "@/components/sections/About";
import { Founder } from "@/components/sections/Founder";
import { Team } from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie die Ballettschule Étoile, Primaballerina Oksana Kulchytska und unser Pädagogen-Team kennen.",
  openGraph: {
    title: "Über uns | Ballettschule Étoile",
    description:
      "Lernen Sie die Ballettschule Étoile, Primaballerina Oksana Kulchytska und unser Pädagogen-Team kennen.",
    locale: "de_DE",
    type: "website",
  },
};

export default function UeberUnsPage(): ReactNode {
  return (
    <>
      <About />
      <Founder />
      <Team />
    </>
  );
}
