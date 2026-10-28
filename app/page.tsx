import { Hero } from "@/components/sections/Hero";
import { EngineeringPillars } from "@/components/sections/EngineeringPillars";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { FeaturedWriting } from "@/components/sections/FeaturedWriting";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EngineeringPillars />
      <FeaturedWork />
      <FeaturedWriting />
      <AboutTeaser />
      <Contact />
    </>
  );
}
