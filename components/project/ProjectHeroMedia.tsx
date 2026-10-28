import Image from "next/image";

interface ProjectHeroMediaProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ProjectHeroMedia({ src, alt, caption }: ProjectHeroMediaProps) {
  if (!src) return null;

  return (
    <figure className="mb-10">
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-[#e5e2d9] bg-[#f2f0e8] shadow-sm">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 768px"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="text-xs font-mono text-[#6e7787] mt-2.5 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
