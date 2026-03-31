import { PropertyGrid } from "./components/PropertyGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-woodhouse-cream text-woodhouse-charcoal font-sans">
      
      {/* Navigation Bar */}
      <nav className="w-full py-6 px-6 md:px-10 flex justify-between items-center absolute top-0 z-50 text-woodhouse-cream">
        <div className="font-serif text-2xl tracking-widest uppercase">
          Tom's Rentals
        </div>
        <button className="text-sm font-sans tracking-widest uppercase border-b border-woodhouse-cream pb-1 transition-opacity hover:opacity-70">
          Book a Stay
        </button>
      </nav>

      {/* The Inset Hero Section */}
      <section className="w-full h-screen px-4 md:px-2 pt-0 pb-2 flex flex-col">
        
        {/* The Image Container */}
        <div className="relative w-full h-full overflow-hidden bg-woodhouse-beige shadow-2xl">
          
          {/* PLACEHOLDER */}
          <div className="absolute inset-0 bg-woodhouse-forest/80 flex items-center justify-center">
             <span className="text-woodhouse-cream/30 tracking-widest">[ HIGH-RES PROPERTY IMAGE ]</span>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70"></div>

          {/* THE NEW TYPOGRAPHY LAYOUT: Split Left and Right */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 md:pb-20 px-6 md:px-12">
            
            {/* Left Column: The Headline */}
            <div className="flex-1 text-left">
              <h1 className="font-display text-5xl md:text-7xl lg:text-[6vw] leading-[1.1] text-woodhouse-cream uppercase tracking-wide">
                A Cozy & <br className="hidden md:block"/>
                <span className="italic text-woodhouse-olive">Peaceful</span> <br/> Getaway
              </h1>
            </div>

            {/* Right Column: The Paragraph */}
            <div className="flex-1 flex justify-start md:justify-end">
              <p className="max-w-sm font-sans text-base md:text-lg text-woodhouse-cream/90 leading-relaxed text-left">
                Nestled in the heart of Upstate New York, Tom's Rentals offers a collection of three distinct properties, each designed to provide a quiet luxury experience.
              </p>
            </div>

          </div>

        </div>
      </section>

      <PropertyGrid />

    </main>
  );
}
