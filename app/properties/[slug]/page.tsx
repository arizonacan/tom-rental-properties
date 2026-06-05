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
    price: "$1,500 / night", // Update this if Tom changes the direct booking rate
    description: "The epicenter of Upstate! 2.5 Hours from NYC. 35 minutes from Saratoga. 1 Hr from ADK Park / Gore / Berkshires. 4800ft of living space and an epic backyard make this historic home a true gem. The blueprints for the Jesse Buel House reside in the Library of Congress…for real. The pool is enormous and OPEN TIL early NOV! Hot tub open all year. There is enough furniture for everyone to get cozy. Two kitchens, a billiard room, OLED TVs and luxurious mattresses make this home truly one of a kind.",
    specs: "12 guests • 4 bedrooms • 4 beds • 3.5 baths",
    locationDesc: "Located in historic Center Square, Albany. A short walk to Washington Park and just steps away from Dove + Deer pub (where guests get 10% off Dinner, Lunch, or Brunch).",
    mapQuery: "Center Square, Albany, NY", 
    amenities: [
      { name: "Year-Round Hot Tub", icon: <Droplets className="w-5 h-5" /> },
      { name: "Remote Gas Fireplace", icon: <Flame className="w-5 h-5" /> },
      { name: "Deep Soaking Tub", icon: <Bath className="w-5 h-5" /> },
      { name: "Seasonal Pool", icon: <Droplets className="w-5 h-5" /> },
    ],
    extendedAmenities: [
      "Scenic views & Pool view", "Hair dryer & Cleaning products", "Shampoo, Conditioner & Rad body soap",
      "Outdoor shower & Hot water", "Free washer & dryer", "Towels, bed sheets, soap, and toilet paper",
      "Cotton linens, Extra pillows and blankets", "Iron & Clothing storage", "65 inch HDTV with Amazon Prime Video",
      "Bluetooth sound system", "Pool table", "Books, board games & Crib", "Central air conditioning & Portable fans",
      "Radiant heating", "Noise decibel monitors & 13 exterior security cameras", "Smoke & Carbon monoxide alarms",
      "Fire extinguisher", "Fast Wifi & Dedicated workspace", "Fully equipped kitchen with Refrigerator & Microwave",
      "Pots, pans, oil, salt, pepper & Cooking basics", "Dishes, silverware, bowls, chopsticks", "Mini fridge & Dishwasher",
      "Stainless steel oven", "Hot water kettle, Drip coffee maker, Blender & Coffee", "Wine glasses", 
      "Private patio or balcony", "Private fenced backyard", "Fire pit & BBQ grill", "Outdoor furniture & Hammock",
      "Free parking on premises", "Pets & Assistance animals allowed", "Self check-in & Smart lock"
    ],
    images: ["/hero-cabin-exterior.jpg", "/interior-fireplace.jpg", "/moonrisemeadows1.jpg"] // Swap these when Tom sends the actual photos
  },
  "abba-house": {
    name: "ABBA House Retreat",
    price: "Avg $1,000 / night",
    description: "Welcome to Abba House – A Historic Retreat for Groups & Getaways Step into Abba House, a beloved former retreat that has been a sanctuary for New York’s capital region for decades. This spacious, character-filled home comfortably sleeps up to 16 guests, making it perfect for family reunions, group getaways, or peaceful retreats. Spread out and unwind across five casual living rooms, each designed for conversation, connection, or cozy relaxation. Sip your morning brew from the fully stocked coffee bar and enjoy your favorite book or a glass of wine on one of the two enclosed porches, both offering ample seating and a serene view of the surrounding nature. Abba House combines rustic charm with modern comforts, creating an inviting space where you can relax, recharge, and make lasting memories. With a rich history of welcoming guests seeking escape and tranquility, this retreat is ready to be part of your story. Come experience the calm and charm that thousands before you have loved.",
    specs: "16+ guests • 9 bedrooms • 10 beds • 4 baths",
    locationDesc: "Centrally Located: The area's popular destinations are just minutes away.",
    mapQuery: "Saratoga Springs, NY", // 🚨 ADD THIS
    amenities: [
      { name: "High-Speed WiFi", icon: <Wifi className="w-5 h-5" /> },
      { name: "Forest Views", icon: <Trees className="w-5 h-5" /> },
      { name: "Outdoor Firepit", icon: <Flame className="w-5 h-5" /> },
    ],
    extendedAmenities: []
    ,
    images: ["/interior-fireplace.jpg", "/hero-cabin-exterior.jpg", "/cabin-door.jpg"]
  },
  "moonrise-rest": {
    name: "Moonrise Rest",
    // 🚨 We use "From" or "Avg" to protect Tom from fluctuating holiday rates
    price: "Avg $1,000 / night", 
    description: "Historic Mohawk Valley Retreat surrounded by pines. The perfect quiet getaway for couples looking to unplug.",
    // 🚨 Added the 3-night minimum to the specs so it's immediately visible
    specs: "16+ guests • 4 Bedrooms • 13 Beds • 3.5 Baths • 3-Night Minimum", 
    locationDesc: "Secluded forest location. A true off-grid feel while still being a 15-minute drive to town.",
    mapQuery: "Mohawk Valley, NY", 
    amenities: [
      { name: "Forest Views", icon: <Trees className="w-5 h-5" /> },
      { name: "Coffee Station", icon: <Coffee className="w-5 h-5" /> },
      { name: "Wood Fireplace", icon: <Flame className="w-5 h-5" /> },
      { name: "High-Speed WiFi", icon: <Wifi className="w-5 h-5" /> },
    ],
    extendedAmenities: [
      "Secluded forest location", "Outdoor fire pit", "Fully equipped kitchen",
      "Luxury linens", "Smart TV with streaming", "Dedicated workspace",
      "Free parking on premises", "Self check-in"
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