import Image from "next/image";

interface ProjectHeroMediaProps {
  src: string;
  alt: string;
}

export function ProjectHeroMedia({ src, alt }: ProjectHeroMediaProps) {
  if (!src) return null;

  return (
    <div className="relative w-full h-60 sm:h-80 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 mb-8">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 768px"
        className="object-cover"
      />
    </div>
  );
}
