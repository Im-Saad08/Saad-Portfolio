import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { FeaturedWriting } from "@/components/sections/FeaturedWriting";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <FeaturedWriting />
      <Contact />
    </>
  );
}
