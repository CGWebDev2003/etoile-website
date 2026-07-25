import type { ReactNode } from "react";
import { Hero } from "@/components/sections/Hero";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Courses } from "@/components/sections/Courses";
import { Achievements } from "@/components/sections/Achievements";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCta } from "@/components/sections/ContactCta";

export default function Home(): ReactNode {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <Courses limit={4} />
      <Achievements />
      <Testimonials />
      <ContactCta />
    </>
  );
}
