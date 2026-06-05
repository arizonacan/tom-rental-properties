"use client"; // 🚨 REQUIRED: We are adding Framer Motion physics to this component!

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // 🚨 REQUIRED: For high-performance images

const properties = [
  {
    name: "The Historic Jesse Buel House",
    price: "Avg $1,500 / night",
    specs: "4 Bed / 3.5 Bath",
    label: "The epicenter of Upstate",
    image: "/jesse-buel-exterior-1.webp", 
    slug: "jesse-buel-house"
  },
  {
    name: "ABBA House Retreat",
    price: "Avg $1,000 / night",
    specs: "10 Bed / 4 Bath",
    label: "Centrally Located Grand Manor",
    image: "/ABBA-exterior-1.avif",
    slug: "abba-house"
  },
  {
    name: "Moonrise Rest",
    price: "Avg $1,000 / night",
    specs: "2 Bed / 2 Bath",
    label: "Historic Mohawk Valley Retreat",
    image: "/moonrisemeadows1.jpg",
    slug: "moonrise-rest"
  },
];

// 🚨 THE LUXURY CURVE: The exact same smooth easing we used on the homepage!
const luxuryEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function PropertyGrid() {
  return (
    <section className="bg-[#faf9eb] py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 md:px-10">
        
        {/* 🚨 HEADER ANIMATION: Fades and slides up when you scroll to it */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: luxuryEasing }}
          className="relative max-w-2xl" /* 🚨 Added relative here */
        >
          
          {/* 🗝️ THE FLOATING KEY ILLUSTRATION */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 10 }}
            whileInView={{ opacity: 1, y: 0, rotate: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: luxuryEasing, delay: 0.4 }}
            className="pointer-events-none absolute -right-8 -top-16 z-20 h-28 w-28 md:-right-24 md:-top-20 md:h-40 md:w-40 lg:-right-130 lg:-top-1 lg:h-48 lg:w-48"
          >
            {/* The Infinite "Breathing" Float (offset duration so it doesn't match the book exactly) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="relative h-full w-full"
            >
              <Image
                src="/key drawing.png"
                alt="Hand-drawn key illustration"
                fill
                className="object-contain opacity-80 drop-shadow-lg"
              />
            </motion.div>
          </motion.div>

          <p className="mb-4 font-sans text-sm tracking-[0.35em] uppercase text-[#141414]/55">
            Curated Escapes
          </p>
          <h2 className="font-display text-4xl leading-tight text-[#141414] md:text-6xl">
            Our Properties
          </h2>
          <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-[#141414]/75">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {properties.map((property, index) => (
            
            /* 🚨 THE WRAPPER: Makes the entire card clickable */
            <Link key={property.name} href={`/properties/${property.slug}`}>
              <motion.article 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: luxuryEasing, delay: index * 0.15 }}
                className="flex flex-col cursor-pointer group" // Added 'group' here for hover targeting
              >
                {/* 🚨 THE IMAGE CONTAINER */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e6d9]">
                  
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  
                  {/* Subtle dark gradient at the bottom so text is always readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 transition-opacity duration-700" />
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#faf9eb]/90">
                      {property.label}
                    </p>
                  </div>
                </div>

                <div className="border-b border-[#141414]/20 pt-6 pb-4" />

                <div className="flex items-start justify-between gap-6">
                  <h3 className="font-serif text-2xl text-[#141414]">
                    {property.name}
                  </h3>

                  <div className="text-right font-sans text-sm tracking-widest uppercase text-[#141414]/70">
                    <p>{property.price}</p>
                    <p className="mt-2 text-xs">{property.specs}</p>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}