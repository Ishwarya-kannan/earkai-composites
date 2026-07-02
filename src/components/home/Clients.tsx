export default function Clients() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-bold">Our Trusted Clients</h2>

        <p className="mt-4 text-gray-600">
          We proudly serve customers across multiple industries with reliable
          composite solutions.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="rounded-xl border bg-white p-6">Client 1</div>
          <div className="rounded-xl border bg-white p-6">Client 2</div>
          <div className="rounded-xl border bg-white p-6">Client 3</div>
          <div className="rounded-xl border bg-white p-6">Client 4</div>
        </div>
      </div>
    </section>
  );
}