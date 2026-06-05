// app/components/AmenitiesDisplay.tsx
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function AmenitiesDisplay({ 
  mainAmenities, 
  allAmenities 
}: { 
  mainAmenities: { name: string; icon: React.ReactNode }[]; 
  allAmenities: string[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-t border-black/10 pt-12 mb-16">
      <h3 className="font-sans text-xs tracking-widest uppercase mb-8 text-black/50">
        What this place offers
      </h3>

      {/* 1. THE CORE 4 (Always Visible) */}
      <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
        {mainAmenities.map((amenity, i) => (
          <div key={i} className="flex items-center gap-4 font-serif text-lg text-black/80">
            <span className="text-[#ada87a]">{amenity.icon}</span>
            {amenity.name}
          </div>
        ))}
      </div>

      {/* 2. THE EXPANDED LIST (Hidden by default) */}
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 mb-8 pt-8 border-t border-black/5 animate-in fade-in duration-500">
          {allAmenities.map((item, i) => (
            <div key={i} className="font-serif text-md text-black/70 flex items-start gap-2">
              <span className="text-[#ada87a] mt-1">•</span> {item}
            </div>
          ))}
        </div>
      )}

      {/* 3. THE TOGGLE BUTTON */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-[#141414] hover:text-[#ada87a] transition-colors border border-[#141414]/20 px-6 py-3 rounded-full"
      >
        {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        {isExpanded ? "Show Less" : "Show All Amenities"}
      </button>
    </div>
  );
}