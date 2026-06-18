// app/properties/[slug]/page.tsx
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

// 1. THE EXPANDED DATABASE (MOCK)
const propertiesData = {
  "jesse-buel-house": {
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
      { name: "Free Washer - In Building", icon: <WashingMachine className="w-5 h-5" /> },
      { name: "Exterior security cameras on property", icon: <Cctv className="w-5 h-5" /> },
    ],
    extendedAmenities: [
      { name: "Bathtub", icon: <Bath className="w-5 h-5" /> },
      { name: "Hair Dryer", icon: <Wind className="w-5 h-5" /> },
      { name: "Cleaning Products", icon: <SprayCan className="w-5 h-5" /> },
      { name: "Shampoo", icon: <Droplets className="w-5 h-5" /> },
      { name: "Head and Shoulders Conditioner", icon: <Droplets className="w-5 h-5" /> },
      { name: "Rad Body Soap", icon: <Droplets className="w-5 h-5" /> },
      { name: "Outdoor Shower", icon: <ShowerHead className="w-5 h-5" /> },
      { name: "Hot Water", icon: <Thermometer className="w-5 h-5" /> },
      { name: "Free Dryer - In Building", icon: <WashingMachine className="w-5 h-5" /> },
      { name: "Essentials", icon: <Package className="w-5 h-5" /> },
      { name: "Hangers", icon: <Shirt className="w-5 h-5" /> },
      { name: "Bed Linens", icon: <Bed className="w-5 h-5" /> },
      { name: "Extra Pillows and Blankets", icon: <Bed className="w-5 h-5" /> },
      { name: "Iron", icon: <Shirt className="w-5 h-5" /> },
      { name: "Clothing Storage: Closet", icon: <Package className="w-5 h-5" /> },
      { name: "Bluetooth Sound System", icon: <Speaker className="w-5 h-5" /> },
      { name: "Pool Table", icon: <Gamepad2 className="w-5 h-5" /> },
      { name: "Books and Reading Material", icon: <BookOpen className="w-5 h-5" /> },
      { name: "Crib", icon: <Baby className="w-5 h-5" /> },
      { name: "Board Games", icon: <Dices className="w-5 h-5" /> },
      { name: "Central Air Conditioning", icon: <Snowflake className="w-5 h-5" /> },
      { name: "Indoor Fireplace: Gas Fireplace", icon: <Flame className="w-5 h-5" /> },
      { name: "Ceiling Fan", icon: <Fan className="w-5 h-5" /> },
      { name: "Portable Fans", icon: <Fan className="w-5 h-5" /> },
      { name: "Radiant Heating", icon: <Sun className="w-5 h-5" /> },
      { name: "Noise Decibel Monitors", icon: <Volume2 className="w-5 h-5" /> },
      { name: "Smoke Alarm", icon: <BellRing className="w-5 h-5" /> },
      { name: "Carbon Monoxide Alarm", icon: <ShieldAlert className="w-5 h-5" /> },
      { name: "Fire Extinguisher", icon: <ShieldAlert className="w-5 h-5" /> },
      { name: "Refrigerator", icon: <Refrigerator className="w-5 h-5" /> },
      { name: "Microwave", icon: <Microwave className="w-5 h-5" /> },
      { name: "Cooking Basics", icon: <ChefHat className="w-5 h-5" /> },
      { name: "Dishes and Silverware", icon: <UtensilsCrossed className="w-5 h-5" /> },
      { name: "Mini Fridge", icon: <Refrigerator className="w-5 h-5" /> },
      { name: "Dishwasher", icon: <WashingMachine className="w-5 h-5" /> },
      { name: "Stainless Steel Oven", icon: <ChefHat className="w-5 h-5" /> },
      { name: "Hot Water Kettle", icon: <Coffee className="w-5 h-5" /> },
      { name: "Drip Coffee Maker", icon: <Coffee className="w-5 h-5" /> },
      { name: "Wine Glasses", icon: <Wine className="w-5 h-5" /> },
      { name: "Blender", icon: <Coffee className="w-5 h-5" /> },
      { name: "Coffee", icon: <Coffee className="w-5 h-5" /> },
      { name: "Private Patio or Balcony", icon: <Sun className="w-5 h-5" /> },
      { name: "Private Backyard - Fully Fenced", icon: <Trees className="w-5 h-5" /> },
      { name: "Fire Pit", icon: <Flame className="w-5 h-5" /> },
      { name: "Outdoor Furniture", icon: <Armchair className="w-5 h-5" /> },
      { name: "Hammock", icon: <Trees className="w-5 h-5" /> },
      { name: "Outdoor Dining Area", icon: <Utensils className="w-5 h-5" /> },
      { name: "BBQ Grill", icon: <Flame className="w-5 h-5" /> },
      { name: "Self Check-in", icon: <Key className="w-5 h-5" /> },
      { name: "Smart Lock", icon: <Lock className="w-5 h-5" /> },
    ],
    images: ["/jesse-buel-exterior-2.avif", "/20f9cbd6-c428-4fce-ae2d-f83060f9192f.jpg.jpeg", "/03d51f38-ea0e-4ad8-92d6-17711f96a92f.jpg.jpeg"],
    
    // 🚨 THE EXTRACTED 3 LISTINGS
    accommodations: [
      { 
        id: "jb-entire", 
        title: "Historic Jesse Buel Farmhouse", 
        specs: "Entire Estate • Sleeps 16+", 
        price: "Select Dates",
        images: [
          { src: "/27ed0f61-fd9a-4f99-8005-6b180c3e4c4b.avif", label: "The Historic Exterior" },
          { src: "/83b93d64-3d27-400d-875c-0d0dd8a93331.jpg.jpeg", label: "The Pool Area" },
          { src: "/62c6bf8a-e641-451e-af20-a24f7e531350.avif", label: "The Pool Area" },
          { src: "/7824aa1c-6050-4f34-a405-5f4f2661ad8d.avif", label: "Outdoor Dining Area" },
          { src: "/b0fd2717-2410-4ae4-8832-577246f40689.jpg.jpeg", label: "The Kitchen" },
          { src: "/20f9cbd6-c428-4fce-ae2d-f83060f9192f.jpg.jpeg", label: "The Living Room with Fireplace" },
          { src: "/35240981-d44c-4e5d-977c-89ea3d4de7cf.avif", label: "Billiard Room" },
          { src: "/83008de3-f0b1-4afe-875c-dc1a5e84b9b1.avif", label: "Bedroom 1" },
          { src: "/011b542f-e954-422e-ae84-a28068373d35.avif", label: "Bedroom 1" },
          { src: "/9744e720-b14d-457d-8815-855fb3635889.avif", label: "Bedroom 2" },
          { src: "/f72262e5-ad62-4df8-9e74-c8e7cbeae5ab.avif", label: "Bedroom 2" },
          { src: "/ff7aa831-0d23-419c-a3ef-c65eb229c9e0.jpg.jpeg", label: "Bedroom 3" },
          { src: "/6d8c822c-8a08-4fb3-9704-7fff75c0b446.avif", label: "Bedroom 3" },
          { src: "/5ac78dec-bed5-40a8-b27c-d0d0ba2b5221.jpg.jpeg", label: "Bedroom 4" },
        ]
      },
      { 
        id: "jb-jesses-suite", 
        title: "Jesse's Suite", 
        specs: "2 Beds • 1 Private Bath • Master Suite", 
        price: "Select Dates",
        images: [
          { src: "/interior-fireplace.jpg", label: "Gas Fireplace & Living Area" },
          { src: "/20f9cbd6-c428-4fce-ae2d-f83060f9192f.jpg.jpeg", label: "Master Bathroom" }
        ]
      },
      { 
        id: "jb-loft-suite", 
        title: "The Loft Suite", 
        specs: "1 King Bed • 1 Private Bath • 800 sqft", 
        price: "Select Dates",
        images: [
          { src: "/moonrisemeadows1.jpg", label: "Purple Hybrid King Bed" }, 
          { src: "/cabin-door.jpg", label: "Private Reading Nook" }
        ]
      },
    ]
  },

  "abba-house": {
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
      { name: "Shared Hot Tub - Available All Year", icon: <Bath className="w-5 h-5" /> },
      { name: "Pet Friendly", icon: <PawPrint className="w-5 h-5" /> },
      { name: "TV", icon: <Tv className="w-5 h-5" /> },
      { name: "Elevator", icon: <WashingMachine className="w-5 h-5" /> },
      { name: "Washer", icon: <WashingMachine className="w-5 h-5" /> },
      { name: "Exterior security cameras on property", icon: <Cctv className="w-5 h-5" /> },
    ],
    extendedAmenities: [
      { name: "Hair dryer", icon: <Wind className="w-5 h-5" /> },
      { name: "Cleaning products", icon: <SprayCan className="w-5 h-5" /> },
      { name: "Shampoo", icon: <Droplets className="w-5 h-5" /> },
      { name: "Conditioner", icon: <Droplets className="w-5 h-5" /> },
      { name: "Body soap", icon: <Droplets className="w-5 h-5" /> },
      { name: "Hot water", icon: <Thermometer className="w-5 h-5" /> },
      { name: "Shower gel", icon: <Droplets className="w-5 h-5" /> },
      { name: "Dryer", icon: <WashingMachine className="w-5 h-5" /> },
      { name: "Essentials (Towels, bed sheets, soap, toilet paper)", icon: <Package className="w-5 h-5" /> },
      { name: "Hangers", icon: <Shirt className="w-5 h-5" /> },
      { name: "Bed linens", icon: <Bed className="w-5 h-5" /> },
      { name: "Extra pillows and blankets", icon: <Bed className="w-5 h-5" /> },
      { name: "Iron", icon: <Shirt className="w-5 h-5" /> },
      { name: "Safe", icon: <Lock className="w-5 h-5" /> },
      { name: "Clothing storage", icon: <Archive className="w-5 h-5" /> },
      { name: "Books and reading material", icon: <BookOpen className="w-5 h-5" /> },
      { name: "Movie theater", icon: <Clapperboard className="w-5 h-5" /> },
      { name: "Board games", icon: <Dices className="w-5 h-5" /> },
      { name: "Air conditioning", icon: <Snowflake className="w-5 h-5" /> },
      { name: "Ceiling fan", icon: <Fan className="w-5 h-5" /> },
      { name: "Portable fans", icon: <Fan className="w-5 h-5" /> },
      { name: "Heating", icon: <Flame className="w-5 h-5" /> },
      { name: "Noise decibel monitors", icon: <Volume2 className="w-5 h-5" /> },
      { name: "Smoke alarm", icon: <BellRing className="w-5 h-5" /> },
      { name: "Carbon monoxide alarm", icon: <ShieldAlert className="w-5 h-5" /> },
      { name: "Fire extinguisher", icon: <ShieldAlert className="w-5 h-5" /> },
      { name: "First aid kit", icon: <BriefcaseMedical className="w-5 h-5" /> },
      { name: "Refrigerator", icon: <Refrigerator className="w-5 h-5" /> },
      { name: "Microwave", icon: <Microwave className="w-5 h-5" /> },
      { name: "Cooking basics (Pots, pans, oil, salt, pepper)", icon: <ChefHat className="w-5 h-5" /> },
      { name: "Dishes and silverware", icon: <UtensilsCrossed className="w-5 h-5" /> },
      { name: "Freezer", icon: <Snowflake className="w-5 h-5" /> },
      { name: "Dishwasher", icon: <WashingMachine className="w-5 h-5" /> },
      { name: "Stove", icon: <Flame className="w-5 h-5" /> },
      { name: "Oven", icon: <ChefHat className="w-5 h-5" /> },
      { name: "Hot water kettle", icon: <Coffee className="w-5 h-5" /> },
      { name: "Coffee maker", icon: <Coffee className="w-5 h-5" /> },
      { name: "Wine glasses", icon: <Wine className="w-5 h-5" /> },
      { name: "Toaster", icon: <Utensils className="w-5 h-5" /> },
      { name: "Baking sheet", icon: <ChefHat className="w-5 h-5" /> },
      { name: "Blender", icon: <Coffee className="w-5 h-5" /> },
      { name: "Barbecue utensils", icon: <Flame className="w-5 h-5" /> },
      { name: "Dining table", icon: <Utensils className="w-5 h-5" /> },
      { name: "Coffee", icon: <Coffee className="w-5 h-5" /> },
      { name: "Bread maker", icon: <ChefHat className="w-5 h-5" /> },
      { name: "Private entrance", icon: <DoorOpen className="w-5 h-5" /> },
      { name: "Laundromat nearby", icon: <Shirt className="w-5 h-5" /> },
      { name: "Private patio or balcony", icon: <Sun className="w-5 h-5" /> },
      { name: "Backyard", icon: <Trees className="w-5 h-5" /> },
      { name: "Outdoor furniture", icon: <Armchair className="w-5 h-5" /> },
      { name: "Hammock", icon: <Trees className="w-5 h-5" /> },
      { name: "Outdoor dining area", icon: <Utensils className="w-5 h-5" /> },
      { name: "BBQ grill", icon: <Flame className="w-5 h-5" /> },
      { name: "Sun loungers", icon: <Sun className="w-5 h-5" /> },
      { name: "Free street parking", icon: <Car className="w-5 h-5" /> },
      { name: "Luggage dropoff allowed", icon: <Luggage className="w-5 h-5" /> },
      { name: "Long term stays allowed", icon: <CalendarDays className="w-5 h-5" /> },
      { name: "Self check-in", icon: <Key className="w-5 h-5" /> },
      { name: "Keypad", icon: <Hash className="w-5 h-5" /> },
      { name: "Housekeeping - Available at Extra Cost", icon: <SprayCan className="w-5 h-5" /> }
    ], 
    images: ["/c2d1511c-8e20-44bc-8903-b726e08634a2.jpeg", "/ddf6e4a4-4f79-405b-903d-34e6d6544052.jpeg", "/d1df2699-3f97-49ff-ac75-10012cc0445a.jpeg"],
    
    // 🚨 THE EXTRACTED 6 LISTINGS
    accommodations: [
      { id: "abba-entire", title: "The Historic ABBA House", specs: "Entire House • 10 Beds", price: "Select Dates" },
      { id: "abba-room-5", title: "The Double Room", specs: "Private Room • 2 bedrooms • 2 beds • 1.5 baths", price: "Select Dates" },
      { id: "abba-room-4", title: "1st Floor Queen Bed Room", specs: "Private Room • 1 Bed • Shared Bathroom", price: "Select Dates" },
      { id: "abba-room-3", title: "3rd Floor Twin Bed Room", specs: "Private Room • 1 Bed • Shared Bathroom", price: "Select Dates" },
      { id: "abba-room-std", title: "Queen Bed with Single", specs: "Private Room • 1 Bed • Shared Bathroom", price: "Select Dates" },
      { id: "abba-room-gen", title: "King Bedroom with Large Office", specs: "Private Room • 1 Bed • Shared Bathroom", price: "Select Dates" },
      { id: "abba-room-2", title: "2nd Floor Full Bed", specs: "Private Room • 1 Bed • Shared Bathroom", price: "Select Dates" },
      { id: "abba-room-1", title: "Queen Bed with Large Closet", specs: "Private Room • 1 Bed • Shared Bathroom", price: "Select Dates" },
      { id: "abba-room-6", title: "2nd Floor Queen Bed", specs: "Private Room • 1 Bed • Shared Bathroom", price: "Select Dates" },
      { id: "abba-room-7", title: "2nd Floor Queen", specs: "Private Room • 1 DoubleBed • Shared Bathroom", price: "Select Dates" },
    ]
  },

  "moonrise-rest": {
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
      { name: "Private Hot Tub - Available All Year", icon: <Bath className="w-5 h-5" /> },
      { name: "Pet Friendly", icon: <PawPrint className="w-5 h-5" /> },
      { name: "TV", icon: <Tv className="w-5 h-5" /> },
      { name: "Elevator", icon: <WashingMachine className="w-5 h-5" /> },
      { name: "Washer", icon: <WashingMachine className="w-5 h-5" /> },
      { name: "Exterior security cameras on property", icon: <Cctv className="w-5 h-5" /> },
    ],
    extendedAmenities: [],
    images: ["/f9f0bf9b-e9fc-4335-a317-74f762c4ca2c.png.jpeg", "/efed9fcb-e7b1-4e3c-9719-eb8d2541aff6.jpeg", "/53333a12-7771-447e-bf8c-b1f0fb502d9e.png.jpeg"],
    
    // 🚨 THE 1 EXTRACTED LISTING
    accommodations: [
      { id: "moonrise-entire", title: "The Moonrise Rest - Quiet Mohawk Valley Retreat", specs: "Entire Home", price: "Select Dates" },
      { id: "moccasin-suite", title: "The Moccasin Suite", specs: "1 Bedroom • 1 Bed • 1 Private Bath", price: "Select Dates" },
      { id: "moonrise-double", title: "The Double Room", specs: "1 Bedroom • 6 Beds • 1.5 Baths", price: "Select Dates" },
    ]
  }
};

export default async function PropertyPage({
  params,
  searchParams, // 🚨 Added to read the URL
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const { room } = await searchParams; // 🚨 Extract the room ID from the URL

  const property = propertiesData[slug as keyof typeof propertiesData];

  if (!property) {
    notFound();
  }

  // 🚨 Find the exact room the user clicked, or default to the first one
  const selectedRoomId = room || property.accommodations[0]?.id;
  const activeAccommodation = property.accommodations.find(a => a.id === selectedRoomId) || property.accommodations[0];

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
            
            {/* 📸 THE DYNAMIC MASONRY GALLERY */}
            {activeAccommodation?.images && activeAccommodation.images.length > 0 && (
              <div className="mb-16 pt-8 border-t border-black/10">
                <h3 className="font-sans text-xs tracking-widest uppercase mb-8 text-black/50">
                  Tour {activeAccommodation.title}
                </h3>
                
                {/* 🚨 Tailwind CSS Columns create the true Pinterest-style Masonry layout */}
                <div className="columns-1 md:columns-2 gap-4 space-y-4">
                  {activeAccommodation.images.map((img, idx) => (
                    <div key={idx} className="break-inside-avoid relative group overflow-hidden bg-[#e8e6d9]">
                      <img 
                        src={img.src} 
                        alt={img.label} 
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* The Label Overlay (Fades in slightly on hover) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                      <p className="absolute bottom-4 left-4 right-4 font-sans text-[0.65rem] tracking-[0.2em] uppercase text-[#faf9eb]">
                        {img.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(property.mapQuery)}&output=embed`}
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
                    <Star className="w-3 h-3 fill-current" /> Superhost • 5 Years Hosting
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