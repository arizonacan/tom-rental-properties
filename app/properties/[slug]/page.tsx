// app/properties/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { Wifi, Flame, Coffee, Trees, MapPin, Star } from "lucide-react"; // 🚨 NEW: Premium Icons
import { BookingWidget } from "../../components/BookingWidget";

// 1. THE EXPANDED DATABASE (MOCK)
const propertiesData = {
  "jesse-buel-house": {
    name: "The Historic Jesse Buel House",
    price: "$250 / night",
    description: "The epicenter of Upstate. A historic retreat with modern luxury. Carefully curated mid-century furniture meets 19th-century architecture.",
    specs: "4 Bed / 3.5 Bath",
    locationDesc: "Located in the heart of the historic district, walking distance to local cafes and antique shops.",
    amenities: [
      { name: "High-Speed WiFi", icon: <Wifi className="w-5 h-5" /> },
      { name: "Wood Fireplace", icon: <Flame className="w-5 h-5" /> },
      { name: "Chef's Kitchen", icon: <Coffee className="w-5 h-5" /> },
    ],
    images: ["/hero-cabin-exterior.jpg", "/interior-fireplace.jpg", "/moonrisemeadows1.jpg"]
  },
  "abba-house": {
    name: "ABBA House Retreat",
    price: "$325 / night",
    description: "Centrally Located Grand Manor perfect for large family gatherings. Expansive dining areas and a private backyard oasis.",
    specs: "10 Bed / 4 Bath",
    locationDesc: "Nestled on a quiet, tree-lined street just 5 minutes from the main hiking trails.",
    amenities: [
      { name: "High-Speed WiFi", icon: <Wifi className="w-5 h-5" /> },
      { name: "Forest Views", icon: <Trees className="w-5 h-5" /> },
      { name: "Outdoor Firepit", icon: <Flame className="w-5 h-5" /> },
    ],
    images: ["/interior-fireplace.jpg", "/hero-cabin-exterior.jpg", "/cabin-door.jpg"]
  },
  "moonrise-rest": {
    name: "Moonrise Rest",
    price: "$295 / night",
    description: "Historic Mohawk Valley Retreat surrounded by pines. The perfect quiet getaway for couples looking to unplug.",
    specs: "2 Bed / 2 Bath",
    locationDesc: "Secluded forest location. A true off-grid feel while still being a 15-minute drive to town.",
    amenities: [
      { name: "Forest Views", icon: <Trees className="w-5 h-5" /> },
      { name: "Coffee Station", icon: <Coffee className="w-5 h-5" /> },
      { name: "Wood Fireplace", icon: <Flame className="w-5 h-5" /> },
    ],
    images: ["/moonrisemeadows1.jpg", "/cabin-door.jpg", "/interior-fireplace.jpg"]
  }
};

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = propertiesData[slug as keyof typeof propertiesData];

  if (!property) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-[#faf9eb] text-[#141414]">
      
      {/* 🎬 THE CINEMATIC STACKING GALLERY */}
      <section className="relative w-full">
        {property.images.map((imgSrc, index) => (
          <div key={index} className="sticky top-0 h-screen w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/20 z-10" /> 
            <Image
              src={imgSrc}
              alt={`${property.name} gallery image ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </section>

      {/* 📋 THE CONTENT ZONE */}
      <section className="relative z-20 bg-[#faf9eb] -mt-8 px-6 py-20 md:px-14 shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16">
          
          {/* LEFT COLUMN: Details */}
          <div>
            <p className="font-sans text-sm tracking-[0.35em] uppercase text-[#ada87a] mb-4">
              {property.specs}
            </p>
            <h1 className="font-display text-5xl md:text-6xl leading-tight mb-8">
              {property.name}
            </h1>
            <p className="font-serif text-xl leading-relaxed text-[#141414]/80 mb-16">
              {property.description}
            </p>

            {/* 🚨 NEW: AMENITIES GRID */}
            <div className="border-t border-black/10 pt-12 mb-16">
              <h3 className="font-sans text-xs tracking-widest uppercase mb-8 text-black/50">What this place offers</h3>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {property.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-4 font-serif text-lg text-black/80">
                    <span className="text-[#ada87a]">{amenity.icon}</span>
                    {amenity.name}
                  </div>
                ))}
              </div>
            </div>

            {/* 🚨 NEW: LOCATION BLOCK */}
            <div className="border-t border-black/10 pt-12 mb-16">
              <h3 className="font-sans text-xs tracking-widest uppercase mb-8 text-black/50">Location</h3>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-[#ada87a] shrink-0 mt-1" />
                <p className="font-serif text-lg leading-relaxed text-black/80">{property.locationDesc}</p>
              </div>
              {/* Map Placeholder */}
              <div className="w-full h-64 bg-[#e8e6d9] flex items-center justify-center text-black/30 font-sans text-sm tracking-widest uppercase">
                [ Mapbox / Google Maps Integration ]
              </div>
            </div>

            {/* 🚨 NEW: HOST BIO */}
            <div className="border-t border-black/10 pt-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#141414] text-[#faf9eb] flex items-center justify-center font-display text-2xl">
                  T
                </div>
                <div>
                  <h4 className="font-serif text-xl">Hosted by Tom</h4>
                  <p className="font-sans text-xs uppercase tracking-widest text-[#ada87a] flex items-center gap-2 mt-1">
                    <Star className="w-3 h-3 fill-current" /> Superhost
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: The Sticky Booking Engine */}
          <div className="relative">
            <div className="sticky top-24 bg-white border border-[#141414]/10 p-8 shadow-xl">
              <h3 className="font-display text-3xl mb-2">{property.price}</h3>
              <p className="font-sans text-xs uppercase tracking-widest text-black/50 mb-8">
                Direct Booking
              </p>
              
              <div className="mb-6">
                <BookingWidget propertyName={property.name} />
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}