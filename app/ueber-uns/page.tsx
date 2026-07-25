import type { Metadata } from "next";
import type { ReactNode } from "react";
import { About } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie die Ballettschule Étoile, Primaballerina Oksana Kulchytska und unser Pädagogen-Team kennen.",
};

export default function UeberUnsPage(): ReactNode {
  return (
    <>
      <About />
      <Team />
    </>
  );
}
