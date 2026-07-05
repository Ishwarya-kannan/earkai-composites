import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            FRP COMPOSITES AND VARIOUS FRP RELEATED ITEMS
          </h2>

          <p className="mt-5 leading-7">

            Earkai Composites provides composite raw materials,
            consumables, machinery and engineering solutions for
            industries requiring quality, durability and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Quick Links
          </h3>
{/* Quick Links */}

<ul className="mt-5 space-y-3">
  <li><Link href="/">Home</Link></li>
  <li><Link href="/about">About</Link></li>
  <li><Link href="/products">Products</Link></li>
  <li><Link href="/industries">Industries</Link></li>
  <li><Link href="/contact">Contact</Link></li>
</ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Products
          </h3>

        <ul className="mt-5 space-y-3">
  <li>Composite Raw Materials</li>
  <li>Composite Consumables</li>
  <li>Vacuum Bagging Products</li>
  <li>RTM Products</li>
  <li>Silicone Bagging Products</li>
  <li>Spray Up Equipment</li>
  <li>Gelcoat Products</li>
  <li>Testing Equipment</li>
  <li>Composite Machinery</li>
</ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Contact
          </h3>

          <div className="mt-5 space-y-3">
            <p>📍 no:2/2B1-5, AGARAMTHEN MAIN ROAD ,AGARAMTHEN, CHENNAI - 600126, TAMIL NADU
            </p>
            <p>📞 +91 9655422893</p>
            <p>📧 earkaicomposites@gmail.com</p>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 py-6 text-center">
        © {new Date().getFullYear()} Earkai Composites. All Rights Reserved.
      </div>
    </footer>
  );
}