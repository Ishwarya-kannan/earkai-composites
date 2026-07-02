export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h3 className="text-xl font-bold">
          Earkai Composites
        </h3>

        <p className="mt-3 text-gray-400">
          Eco Friendly Composite Solutions
        </p>

        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Earkai Composites. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}