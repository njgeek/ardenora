export function TrustBar() {
  const logos = [
    "TJ Maxx",
    "Marshalls",
    "Ross",
    "Burlington",
    "Nordstrom Rack",
    "Saks OFF 5TH",
    "Century 21",
    "Stein Mart",
  ];

  return (
    <section className="bg-white border-b border-border py-8 overflow-hidden">
      <p className="text-center text-xs text-muted uppercase tracking-[0.2em] font-medium mb-6">
        Trusted by women&apos;s apparel buyers from leading off-price retailers
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="animate-marquee flex whitespace-nowrap">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-10 px-6 py-2"
            >
              <span className="text-lg font-bold text-gray-300 tracking-wider uppercase">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
