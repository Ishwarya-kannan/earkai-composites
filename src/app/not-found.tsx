import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-green-700">404</h1>

        <h2 className="mt-4 text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-green-700 px-8 py-3 text-white transition hover:bg-green-800"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}