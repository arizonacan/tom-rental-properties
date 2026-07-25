import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  Wifi, Flame, Coffee, Trees, MapPin, Star, Bath, Droplets, Utensils, Tv, 
  Laptop, Car, PawPrint, ArrowUpDown, Shirt, Cctv, WavesLadder, WashingMachine,
  Wind, SprayCan, ShowerHead, Thermometer, Package, Bed, Speaker, Gamepad2, 
  BookOpen, Baby, Dices, Snowflake, Fan, Sun, Volume2, BellRing, ShieldAlert, 
  Refrigerator, Microwave, ChefHat, UtensilsCrossed, Wine, Armchair, Key, Lock,
  Clapperboard, BriefcaseMedical, DoorOpen, Luggage, CalendarDays, Hash, Archive
} from "lucide-react";
import { BookingWidget } from "../../components/BookingWidget";
import { AmenitiesDisplay } from "../../components/AmenitiesDisplay";

// 1. THE STREAMLINED DATABASE (3 Core Estates Only)
const propertiesData = {
  "jesse-buel-house": {
    id: "jesse-buel",
    name: "The Historic Jesse Buel House",
    price: "Average $1,500 / night", 
    description: "4800ft of living space and an epic backyard make this historic home a true gem. The blueprints for the Jesse Buel House reside in the Library of Congress… for real. The pool is enormous and OPEN TIL early NOV! Hot tub open all year. There is enough furniture for everyone to get cozy. Two kitchens, a billiard room, OLED TVs and luxurious mattresses make this home truly one of a kind.",
    subtitle: "A splendid oasis in the NY's capital. The historic character and pool are sublime.",
    specs: "4 Bedrooms • 4 Beds • 3.5 Baths",
    locationDesc: "The epicenter of Upstate! 2.5 Hours from NYC. 35 minutes from Saratoga. 1 Hr from ADK park / Gore / Berkshires.",
    mapQuery: "Albany, New York, United States", 
    amenities: [
      { name: "Kitchen", icon: <Utensils className="w-5 h-5" /> },
      { name: "Wifi", icon: <Wifi className="w-5 h-5" /> },
      { name: "Dedicated Workspace", icon: <Laptop className="w-5 h-5" /> },
      { name: "Free Parking on Premises", icon: <Car className="w-5 h-5" /> },
      { name: "Private Pool", icon: <WavesLadder className="w-5 h-5" /> },
      { name: "Private Hot Tub", icon: <Bath className="w-5 h-5" /> },
      { name: "65 inch HDTV with Amazon Prime Video", icon: <Tv className="w-5 h-5" /> },
      { name: "Pet Friendly", icon: <PawPrint className="w-5 h-5" /> },
      { name: "Free Washer", icon: <WashingMachine className="w-5 h-5" /> },
      { name: "Exterior Security Cameras", icon: <Cctv className="w-5 h-5" /> },
    ],
    extendedAmenities: [
      { name: "Hair dryer", icon: <Wind className="w-5 h-5" /> },
      { name: "Cleaning products", icon: <SprayCan className="w-5 h-5" /> },
      { name: "Shampoo & Conditioner", icon: <Droplets className="w-5 h-5" /> },
      { name: "Body soap", icon: <Droplets className="w-5 h-5" /> },
      { name: "Hot water", icon: <Thermometer className="w-5 h-5" /> },
      { name: "Dryer", icon: <WashingMachine className="w-5 h-5" /> },
      { name: "Essentials", icon: <Package className="w-5 h-5" /> },
      { name: "Hangers & Iron", icon: <Shirt className="w-5 h-5" /> },
      { name: "Bed linens & Extra pillows", icon: <Bed className="w-5 h-5" /> },
      { name: "Safe", icon: <Lock className="w-5 h-5" /> },
      { name: "Clothing storage", icon: <Archive className="w-5 h-5" /> },
      { name: "Books and reading material", icon: <BookOpen className="w-5 h-5" /> },
      { name: "Movie theater", icon: <Clapperboard className="w-5 h-5" /> },
      { name: "Board games", icon: <Dices className="w-5 h-5" /> },
      { name: "Air conditioning & Heating", icon: <Snowflake className="w-5 h-5" /> },
      { name: "Ceiling & Portable fans", icon: <Fan className="w-5 h-5" /> },
      { name: "Noise decibel monitors", icon: <Volume2 className="w-5 h-5" /> },
      { name: "Smoke & Carbon monoxide alarms", icon: <BellRing className="w-5 h-5" /> },
      { name: "Fire extinguisher & First aid", icon: <BriefcaseMedical className="w-5 h-5" /> },
      { name: "Refrigerator & Microwave", icon: <Refrigerator className="w-5 h-5" /> },
      { name: "Cooking basics & Dishwasher", icon: <ChefHat className="w-5 h-5" /> },
      { name: "Stove & Oven", icon: <Flame className="w-5 h-5" /> },
      { name: "Coffee maker & Kettle", icon: <Coffee className="w-5 h-5" /> },
      { name: "Wine glasses", icon: <Wine className="w-5 h-5" /> },
      { name: "Private entrance", icon: <DoorOpen className="w-5 h-5" /> },
      { name: "Private patio or balcony", icon: <Sun className="w-5 h-5" /> },
      { name: "Backyard & Outdoor furniture", icon: <Trees className="w-5 h-5" /> },
      { name: "BBQ grill & Dining area", icon: <Flame className="w-5 h-5" /> },
      { name: "Self check-in (Keypad)", icon: <Hash className="w-5 h-5" /> },
      { name: "Luggage dropoff allowed", icon: <Luggage className="w-5 h-5" /> }
    ],
    images: ["/jesse-buel-exterior-2.avif", "/20f9cbd6-c428-4fce-ae2d-f83060f9192f.jpg.jpeg", "/03d51f38-ea0e-4ad8-92d6-17711f96a92f.jpg.jpeg"],
  },

  "abba-house": {
    id: "abba-house",
    name: "ABBA House Retreat",
    price: "Average $1,000 / night",
    description: "Spread out and unwind across five casual living rooms, each designed for conversation, connection, or cozy relaxation. Sip your morning brew from the fully stocked coffee bar and enjoy your favorite book or a glass of wine on one of the two enclosed porches, both offering ample seating and a serene view of the surrounding nature.",
    subtitle: "Come experience the calm and charm that thousands before you have loved.",
    specs: "9 Bedrooms • 10 Beds • 4 Baths",
    locationDesc: "Centrally Located: The area's popular destinations are just minutes away.",
    mapQuery: "Albany, New York, United States",
    amenities: [
      { name: "Kitchen", icon: <Utensils className="w-5 h-5" /> },
      { name: "Wifi", icon: <Wifi className="w-5 h-5" /> },
      { name: "Dedicated Workspace", icon: <Laptop className="w-5 h-5" /> },
      { name: "Free Parking on Premises", icon: <Car className="w-5 h-5" /> },
      { name: "Shared Hot Tub", icon: <Bath className="w-5 h-5" /> },
      { name: "Pet Friendly", icon: <PawPrint className="w-5 h-5" /> },
      { name: "TV", icon: <Tv className="w-5 h-5" /> },
      { name: "Elevator", icon: <ArrowUpDown className="w-5 h-5" /> },
      { name: "Washer", icon: <WashingMachine className="w-5 h-5" /> },
      { name: "Exterior Security Cameras", icon: <Cctv className="w-5 h-5" /> },
    ],
    extendedAmenities: [
      { name: "Hair dryer", icon: <Wind className="w-5 h-5" /> },
      { name: "Cleaning products", icon: <SprayCan className="w-5 h-5" /> },
      { name: "Shampoo", icon: <Droplets className="w-5 h-5" /> },
      { name: "Essentials", icon: <Package className="w-5 h-5" /> },
      { name: "Air conditioning", icon: <Snowflake className="w-5 h-5" /> },
      { name: "Heating", icon: <Flame className="w-5 h-5" /> },
      { name: "Self check-in", icon: <Key className="w-5 h-5" /> },
    ], 
    images: ["/c2d1511c-8e20-44bc-8903-b726e08634a2.jpeg", "/ddf6e4a4-4f79-405b-903d-34e6d6544052.jpeg", "/d1df2699-3f97-49ff-ac75-10012cc0445a.jpeg"],
  },

  "moonrise-rest": {
    id: "moonrise-rest",
    name: "Moonrise Rest",
    price: "Avg $1,000 / night", 
    description: "Create one-of-a-kind memories in this 8500 sqft fully restored and modernized barn on 38 acres bordering a scenic creek and mature forest. You will simply not find another escape like it. Originally built in the 1800s, recent renovations create a warm and uniquely spectacular space with modern amenities including radiant heat, air conditioning and even an elevator.",
    subtitle: "The entire building in all of the 38 surrounding acres are yours to explore and enjoy.",
    specs: "4 Bedrooms • 13 Beds • 3.5 Baths", 
    locationDesc: "35 Minutes from Saratoga, 25 Minutes from Albany, 2hr 45 Minutes from NYC",
    mapQuery: "Schenectady, New York, United States", 
    amenities: [
      { name: "Kitchen", icon: <Utensils className="w-5 h-5" /> },
      { name: "Wifi", icon: <Wifi className="w-5 h-5" /> },
      { name: "Dedicated Workspace", icon: <Laptop className="w-5 h-5" /> },
      { name: "Free Parking on Premises", icon: <Car className="w-5 h-5" /> },
      { name: "Private Hot Tub", icon: <Bath className="w-5 h-5" /> },
      { name: "Pet Friendly", icon: <PawPrint className="w-5 h-5" /> },
      { name: "TV", icon: <Tv className="w-5 h-5" /> },
      { name: "Elevator", icon: <ArrowUpDown className="w-5 h-5" /> },
      { name: "Washer", icon: <WashingMachine className="w-5 h-5" /> },
      { name: "Exterior Security Cameras", icon: <Cctv className="w-5 h-5" /> },
    ],
    extendedAmenities: [
      { name: "Coffee maker", icon: <Coffee className="w-5 h-5" /> },
      { name: "Private patio or balcony", icon: <Sun className="w-5 h-5" /> },
      { name: "Backyard", icon: <Trees className="w-5 h-5" /> },
    ],
    images: ["/f9f0bf9b-e9fc-4335-a317-74f762c4ca2c.png.jpeg", "/efed9fcb-e7b1-4e3c-9719-eb8d2541aff6.jpeg", "/53333a12-7771-447e-bf8c-b1f0fb502d9e.png.jpeg"],
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
            <p className="font-serif text-xl leading-relaxed text-[#141414]/80 mb-12">
              {property.description}
            </p>
            <p className="font-sans text-xs uppercase tracking-widest text-[#141414] mb-12 pt-0.5">
              {property.subtitle}
            </p>

            {/* 🚨 THE INTERACTIVE AMENITIES COMPONENT */}
            <AmenitiesDisplay 
              mainAmenities={property.amenities} 
              allAmenities={property.extendedAmenities || []} 
            />

            {/* 🚨 LOCATION BLOCK WITH LIVE MAP */}
            <div className="border-t border-black/10 pt-12 mb-16">
              <h3 className="font-sans text-xs tracking-widest uppercase mb-8 text-black/50">Location</h3>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-[#ada87a] shrink-0 mt-1" />
                <p className="font-serif text-lg leading-relaxed text-black/80">{property.locationDesc}</p>
              </div>
              
              {/* LIVE GOOGLE MAP EMBED (Fixed Template Literal) */}
              <div className="w-full h-72 bg-[#e8e6d9] overflow-hidden grayscale contrast-125 opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(property.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                />
              </div>
            </div>

            {/* 🚨 HOST BIO */}
            <div className="border-t border-black/10 pt-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#141414] text-[#faf9eb] flex items-center justify-center font-display text-2xl">
                  T
                </div>
                <div>
                  <h4 className="font-serif text-xl">Hosted by Tom</h4>
                  <p className="font-sans text-xs uppercase tracking-widest text-[#ada87a] flex items-center gap-2 mt-1">
                    <Star className="w-3 h-3 fill-current" /> Superhost • 5 Years Hosting
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: The Sticky Booking Engine */}
          <div className="relative">
            <BookingWidget propertyId={property.id} />
          </div>

        </div>
      </section>
    </main>
  );
}