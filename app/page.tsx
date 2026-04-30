import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <WhatIDo />
      <Skills />
      <Projects />
      <Stats />
      <CTA />
    </MainLayout>
  );
}
