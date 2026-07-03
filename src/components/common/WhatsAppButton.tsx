import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
     href="https://wa.me/919655422893?text=Hello%20Earkai%20Composites,%20I%20need%20more%20information."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
    >
      💬
    </Link>
  );
}