export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-green-700 border-t-transparent"></div>

        <p className="mt-6 text-gray-600">
          Loading...
        </p>
      </div>
    </main>
  );
}