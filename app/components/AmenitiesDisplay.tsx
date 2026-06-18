"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// 🚨 Define the type once so our code stays clean
type Amenity = { name: string; icon: React.ReactNode };

export function AmenitiesDisplay({ 
  mainAmenities, 
  allAmenities 
}: { 
  mainAmenities: Amenity[]; 
  allAmenities: Amenity[]; // 🚨 FIXED: Now it expects your objects!
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-t border-black/10 pt-12 mb-16">
      <h3 className="font-sans text-xs tracking-widest uppercase mb-8 text-black/50">
        What this place offers
      </h3>

      {/* 1. THE CORE AMENITIES (Always Visible) */}
      <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
        {mainAmenities.map((amenity, i) => (
          <div key={i} className="flex items-center gap-4 font-serif text-lg text-black/80">
            <span className="text-[#ada87a] shrink-0">{amenity.icon}</span>
            {amenity.name}
          </div>
        ))}
      </div>

      {/* 2. THE EXPANDED LIST (Hidden by default) */}
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-4 mb-8 pt-8 border-t border-black/5 animate-in fade-in duration-500">
          {allAmenities.map((item, i) => (
            <div key={i} className="font-serif text-md text-black/70 flex items-center gap-4">
              {/* 🚨 FIXED: It now renders the beautiful icons you added */}
              <span className="text-[#ada87a] opacity-70 shrink-0">{item.icon}</span> 
              {item.name}
            </div>
          ))}
        </div>
      )}

      {/* 3. THE TOGGLE BUTTON */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-[#141414] hover:text-[#ada87a] transition-colors px-0.5 py-3"
      >
        {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        {isExpanded ? "Show Less" : "Show All Amenities"}
      </button>
    </div>
  );
}