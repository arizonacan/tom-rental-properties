// app/properties/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { Wifi, Flame, Coffee, Trees, MapPin, Star, Bath, Droplets } from "lucide-react";
import { BookingWidget } from "../../components/BookingWidget";
import { AmenitiesDisplay } from "../../components/AmenitiesDisplay";

// 1. THE EXPANDED DATABASE (MOCK)
const propertiesData = {
  "jesse-buel-house": {
    name: "The Historic Jesse Buel House",
    price: "From $150 / night", 
    description: "This is Albany's best! Enjoy a cozy stay in one of Albany's oldest and most unique homes. Rent the entire historic farmhouse, an adjacent townhouse, or a private suite.",
    specs: "Estate, Townhouses & Private Suites",
    locationDesc: "Located in historic Center Square, Albany. A short walk to Washington Park and just steps away from Dove + Deer pub.",
    mapQuery: "Center Square, Albany, NY", 
    amenities: [
      { name: "Year-Round Hot Tub", icon: <Droplets className="w-5 h-5" /> },
      { name: "Remote Gas Fireplace", icon: <Flame className="w-5 h-5" /> },
      { name: "Deep Soaking Tub", icon: <Bath className="w-5 h-5" /> },
      { name: "High-Speed WiFi", icon: <Wifi className="w-5 h-5" /> },
    ],
    extendedAmenities: [], // Keep your massive list here
    images: ["/hero-cabin-exterior.jpg", "/interior-fireplace.jpg", "/moonrisemeadows1.jpg"],
    
    // 🚨 THE EXTRACTED 9 LISTINGS
    accommodations: [
      { 
        id: "jb-entire", 
        title: "Historic Jesse Buel Farmhouse", 
        specs: "Entire Estate • Sleeps 16+", 
        price: "Select Dates",
        description: "Rent the entire historic estate for large family gatherings or corporate retreats. Enjoy exclusive access to the grounds, year-round hot tub, and seasonal pool."
      },
      { 
        id: "jb-jesses-suite", 
        title: "Jesse's Suite", 
        specs: "2 Beds • 1 Private Bath • Master Suite", 
        price: "Select Dates",
        description: "This is Albany’s best! Enjoy a cozy stay in our 1821 master suite complete with a deep soaking tub, remote controlled gas fireplace, king size bed, pull out American Leather couch, and double sinks."
      },
      { 
        id: "jb-loft-suite", 
        title: "The Loft Suite", 
        specs: "1 King Bed • 1 Private Bath • 800 sqft", 
        price: "Select Dates",
        description: "Rustic style master suite in the heart of Albany. Enjoy a Purple hybrid 4 luxury mattress, Dune couch, and original architecture. Access to outdoor patio, pool, and hot tub included."
      },
    ]
  },

  "abba-house": {
    name: "ABBA House Retreat",
    price: "From $120 / night",
    description: "Centrally Located Grand Manor perfect for large family gatherings. Rent the entire estate, or choose one of our private luxury suites.",
    specs: "Estate & Private Suites Available",
    locationDesc: "Nestled on a quiet, tree-lined street just 5 minutes from the main hiking trails.",
    mapQuery: "Saratoga Springs, NY",
    amenities: [
      { name: "High-Speed WiFi", icon: <Wifi className="w-5 h-5" /> },
      { name: "Forest Views", icon: <Trees className="w-5 h-5" /> },
      { name: "Outdoor Firepit", icon: <Flame className="w-5 h-5" /> },
    ],
    extendedAmenities: [], 
    images: ["/interior-fireplace.jpg", "/hero-cabin-exterior.jpg", "/cabin-door.jpg"],
    
    // 🚨 THE EXTRACTED 6 LISTINGS
    accommodations: [
      { id: "abba-entire", title: "The Historic ABBA House | Grand Mansion", specs: "Entire Villa • 10 Beds", price: "Select Dates" },
      { id: "abba-room-5", title: "Large Room with King Bed #5", specs: "Private Room", price: "Select Dates" },
      { id: "abba-room-4", title: "Queen Bed #4 in Historic ABBA House", specs: "Private Room", price: "Select Dates" },
      { id: "abba-room-3", title: "Queen Canopy Bed #3", specs: "Private Room", price: "Select Dates" },
      { id: "abba-room-std", title: "Standard Full Bed", specs: "Private Room • 2 Beds", price: "Select Dates" },
      { id: "abba-room-gen", title: "Room at the Grand Historic ABBA House", specs: "Private Room", price: "Select Dates" }
    ]
  },

  "moonrise-rest": {
    name: "Moonrise Rest",
    price: "Avg $1,000 / night", 
    description: "Historic Mohawk Valley Retreat surrounded by pines. The perfect quiet getaway for couples looking to unplug.",
    specs: "2 Bed / 2 Bath • 3-Night Minimum", 
    locationDesc: "Secluded forest location. A true off-grid feel while still being a 15-minute drive to town.",
    mapQuery: "Palatine Bridge, NY", 
    amenities: [
      { name: "Forest Views", icon: <Trees className="w-5 h-5" /> },
      { name: "Coffee Station", icon: <Coffee className="w-5 h-5" /> },
      { name: "Wood Fireplace", icon: <Flame className="w-5 h-5" /> },
      { name: "High-Speed WiFi", icon: <Wifi className="w-5 h-5" /> },
    ],
    extendedAmenities: [],
    images: ["/moonrisemeadows1.jpg", "/cabin-door.jpg", "/interior-fireplace.jpg"],
    
    // 🚨 THE 1 EXTRACTED LISTING
    accommodations: [
      { id: "moonrise-entire", title: "The Moonrise Rest - Quiet Mohawk Valley Retreat", specs: "Entire Home", price: "Select Dates" }
    ]
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

            {/* 🚨 THE INTERACTIVE AMENITIES COMPONENT */}
            <AmenitiesDisplay 
              mainAmenities={property.amenities} 
              allAmenities={property.extendedAmenities || []} 
            />

            {/* 🚨 UPDATED: LOCATION BLOCK WITH LIVE MAP */}
            <div className="border-t border-black/10 pt-12 mb-16">
              <h3 className="font-sans text-xs tracking-widest uppercase mb-8 text-black/50">Location</h3>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-[#ada87a] shrink-0 mt-1" />
                <p className="font-serif text-lg leading-relaxed text-black/80">{property.locationDesc}</p>
              </div>
              
              {/* LIVE GOOGLE MAP EMBED */}
              <div className="w-full h-72 bg-[#e8e6d9] overflow-hidden grayscale contrast-125 opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(property.mapQuery)}&output=embed`}
                />
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
          {/* RIGHT COLUMN: The Interactive Booking Engine */}
          <div className="relative">
            <BookingWidget options={property.accommodations} />
          </div>

        </div>
      </section>
    </main>
  );
}