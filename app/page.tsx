import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Story />
      <FeaturedWork />
      <Skills />
      <Education />
      <Timeline />
      <Contact />
    </>
  );
}
