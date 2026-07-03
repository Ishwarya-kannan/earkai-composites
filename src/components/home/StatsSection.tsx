export default function StatsSection() {
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "500+", label: "Products Delivered" },
    { value: "100+", label: "Happy Clients" },
    { value: "20+", label: "Industries Served" },
  ];

  return (
    <section className="bg-green-700 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-5xl font-bold">{stat.value}</h2>
              <p className="mt-3 text-lg text-green-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}