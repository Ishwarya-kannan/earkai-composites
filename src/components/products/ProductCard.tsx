import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  image: string;
  description: string;
  slug: string;
};

export default function ProductCard({
  title,
  image,
  description,
  slug,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={350}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-green-700">
          {title}
        </h3>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

        <button className="mt-6 rounded-lg bg-green-700 px-5 py-2 text-white transition hover:bg-green-800">
          Learn More
        </button>
      </div>
    </Link>
  );
}