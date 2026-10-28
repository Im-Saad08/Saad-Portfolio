import Image from "next/image";

interface ProjectDiagramGalleryProps {
  images: string[];
  projectTitle: string;
  title?: string;
}

export function ProjectDiagramGallery({
  images,
  projectTitle,
  title = "System Architecture & Verification Artifacts",
}: ProjectDiagramGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="my-10 pt-8 border-t border-[#e6e4dc]">
      <div className="mb-4">
        <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#767d8f] mb-1">
          Technical Diagrams &amp; Verification
        </p>
        <h3 className="text-xl font-bold tracking-tight text-[#151927]">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="group relative h-52 sm:h-60 rounded-xl overflow-hidden border border-[#e6e4dc] bg-[#ffffff] shadow-sm hover:border-[#d2cfbe] transition-colors"
          >
            <Image
              src={img}
              alt={`${projectTitle} architecture diagram ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-contain p-3 group-hover:scale-[1.02] transition-transform duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
