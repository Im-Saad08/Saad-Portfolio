import Link from "next/link";

interface ProjectHeaderProps {
  category: string;
  title: string;
  description: string;
  metric?: string;
  breadcrumbLabel?: string;
  breadcrumbHref?: string;
}

export function ProjectHeader({
  category,
  title,
  description,
  metric,
  breadcrumbLabel = "← Back to all projects",
  breadcrumbHref = "/work",
}: ProjectHeaderProps) {
  return (
    <header className="mb-10">
      {/* Navigation Breadcrumb */}
      <div className="mb-8">
        <Link
          href={breadcrumbHref}
          className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
        >
          {breadcrumbLabel}
        </Link>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-tight">
        {title}
      </h1>

      <p className="text-sm font-medium text-gray-500 mb-4">
        {category}
      </p>

      {metric && (
        <p className="text-xs text-gray-500 font-mono mb-4">
          Benchmark: <span className="text-gray-900 font-medium">{metric}</span>
        </p>
      )}

      <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
        {description}
      </p>
    </header>
  );
}
