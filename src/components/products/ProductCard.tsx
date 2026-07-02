import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  image: string;
  description: string;
  slug: string;
  category?: string;
};

export default function ProductCard({
  title,
  image,
  description,
  slug,
  category,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {category && (
          <span className="absolute left-4 top-4 rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">
            {category}
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-green-700">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          {description}
        </p>

        <div className="mt-6 inline-flex items-center font-semibold text-green-700 group-hover:translate-x-2 transition">
          View Details →
        </div>
      </div>
    </Link>
  );
}