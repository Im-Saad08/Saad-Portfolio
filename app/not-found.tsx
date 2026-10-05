import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">404</h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Page not found</h2>
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex items-center justify-center gap-4 text-sm font-medium">
          <Link
            href="/"
            className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
          >
            Go to Home
          </Link>
          <Link
            href="/work"
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
