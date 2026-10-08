import Image from "next/image";

interface ProjectDiagramGalleryProps {
  images: string[];
  projectTitle: string;
  title?: string;
}

export function ProjectDiagramGallery({
  images,
  projectTitle,
  title = "System Diagrams & Verification Artifacts",
}: ProjectDiagramGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative h-48 sm:h-56 rounded-lg overflow-hidden border border-gray-200 bg-gray-50"
          >
            <Image
              src={img}
              alt={`${projectTitle} architecture diagram ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
