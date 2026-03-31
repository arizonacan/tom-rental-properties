const properties = [
  {
    name: "The A-Frame",
    price: "$250 / night",
    specs: "2 Bed / 1 Bath",
    label: "Forest Retreat",
    palette: "from-woodhouse-forest via-woodhouse-rustic/70 to-woodhouse-olive/60",
  },
  {
    name: "The Creek House",
    price: "$325 / night",
    specs: "3 Bed / 2 Bath",
    label: "Waterside Stay",
    palette: "from-woodhouse-beige via-woodhouse-olive/70 to-woodhouse-forest",
  },
  {
    name: "The Ridge Cabin",
    price: "$295 / night",
    specs: "2 Bed / 2 Bath",
    label: "Hilltop Escape",
    palette: "from-woodhouse-rustic via-woodhouse-charcoal to-woodhouse-forest",
  },
];

export function PropertyGrid() {
  return (
    <section className="bg-woodhouse-cream py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="mb-4 font-sans text-sm tracking-[0.35em] uppercase text-woodhouse-charcoal/55">
            Curated Escapes
          </p>
          <h2 className="font-display text-4xl leading-tight text-woodhouse-charcoal md:text-6xl">
            Our Properties
          </h2>
          <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-woodhouse-charcoal/75">
            Three distinct stays, each designed with quiet luxury, warm textures,
            and an easy sense of retreat in the Catskills.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {properties.map((property) => (
            <article key={property.name} className="flex flex-col">
              <div className="group relative aspect-[3/4] overflow-hidden bg-woodhouse-forest">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${property.palette} transition-transform duration-700 ease-in-out group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-sans text-xs tracking-[0.3em] uppercase text-woodhouse-cream/80">
                    {property.label}
                  </p>
                </div>
              </div>

              <div className="border-b border-woodhouse-charcoal/20 pt-6 pb-4" />

              <div className="flex items-start justify-between gap-6">
                <h3 className="font-serif text-2xl text-woodhouse-charcoal">
                  {property.name}
                </h3>

                <div className="text-right font-sans text-sm tracking-widest uppercase text-woodhouse-charcoal/70">
                  <p>{property.price}</p>
                  <p className="mt-2">{property.specs}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
