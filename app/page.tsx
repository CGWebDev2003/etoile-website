import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Courses } from "@/components/sections/Courses";
import { Schedule } from "@/components/sections/Schedule";
import { Testimonials } from "@/components/sections/Testimonials";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home(): ReactNode {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Schedule />
        <Testimonials />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
