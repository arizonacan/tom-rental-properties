"use client"; // 🚨 REQUIRED: We are adding Framer Motion physics to this component!

import { motion } from "framer-motion";

const properties = [
  {
    name: "The Historic Jesse Buel House",
    price: "$250 / night",
    specs: "4 Bed / 3.5 Bath",
    label: "The epicenter of Upstate",
    palette: "from-woodhouse-forest via-woodhouse-rustic/70 to-woodhouse-olive/60",
  },
  {
    name: "ABBA House Retreat",
    price: "$325 / night",
    specs: "10 Bed / 4 Bath",
    label: "Centrally Located Grand Manor",
    palette: "from-woodhouse-beige via-woodhouse-olive/70 to-woodhouse-forest",
  },
  {
    name: "Moonrise Rest",
    price: "$295 / night",
    specs: "2 Bed / 2 Bath",
    label: "Historic Mohawk Valley Retreat",
    palette: "from-woodhouse-rustic via-woodhouse-charcoal to-woodhouse-forest",
  },
];

// 🚨 THE LUXURY CURVE: The exact same smooth easing we used on the homepage!
const luxuryEasing = [0.16, 1, 0.3, 1];

export function PropertyGrid() {
  return (
    <section className="bg-woodhouse-cream py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 md:px-10">
        
        {/* 🚨 HEADER ANIMATION: Fades and slides up when you scroll to it */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: luxuryEasing }}
          className="max-w-2xl"
        >
          <p className="mb-4 font-sans text-sm tracking-[0.35em] uppercase text-woodhouse-charcoal/55">
            Curated Escapes
          </p>
          <h2 className="font-display text-4xl leading-tight text-woodhouse-charcoal md:text-6xl">
            Our Properties
          </h2>
          <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-woodhouse-charcoal/75">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {properties.map((property, index) => (
            /* 🚨 CARD ANIMATION: We changed <article> to <motion.article>.
               The magic is the `delay: index * 0.15`. This tells React:
               Card 0: Delay 0s
               Card 1: Delay 0.15s
               Card 2: Delay 0.3s
               This creates the waterfall stagger effect! */
            <motion.article 
              key={property.name} 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: luxuryEasing, delay: index * 0.15 }}
              className="flex flex-col"
            >
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}