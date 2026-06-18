"use client";

import { useState } from "react";

// 🚨 We define the exact data shape it should expect from your propertiesData
type Accommodation = {
  id: string;
  title: string;
  specs: string;
  price: string;
  description?: string; 
};

export function BookingWidget({ options }: { options?: Accommodation[] }) {
  // It defaults to selecting the first room in the list
  const [selected, setSelected] = useState<string>(options?.[0]?.id || "default");

  return (
    <div className="sticky top-24">
      {/* 1. THE SELECTION TABS (Only shows if there are multiple options) */}
      {options && options.length > 0 && (
        <div className="mb-6 bg-white border border-[#141414]/10 shadow-sm p-2 rounded-xl">
          <p className="font-sans text-[0.65rem] uppercase tracking-widest text-[#141414]/50 mb-3 px-3 pt-2">
            Select Accommodation
          </p>
          <div className="flex flex-col gap-2">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={`flex flex-col items-start w-full px-4 py-4 rounded-lg text-left transition-all ${
                  selected === opt.id
                    ? "bg-[#faf9eb] border border-[#ada87a]/40 shadow-md ring-1 ring-[#ada87a]/10"
                    : "hover:bg-black/5 border border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex justify-between w-full items-center mb-1">
                  <span className="font-serif text-lg text-[#141414]">{opt.title}</span>
                  <span className="font-sans text-xs tracking-wider text-[#ada87a]">{opt.price}</span>
                </div>
                <span className="font-sans text-xs tracking-widest uppercase text-black/50 mb-2">
                  {opt.specs}
                </span>
                
                {/* The description smoothly drops down when clicked */}
                {opt.description && selected === opt.id && (
                  <div className="pt-3 mt-1 border-t border-[#ada87a]/20 animate-in fade-in slide-in-from-top-2 duration-500">
                    <p className="font-serif text-sm leading-relaxed text-[#141414]/80">
                      {opt.description}
                    </p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 2. THE WIDGET PLACEHOLDER (Where Hospitable goes Monday) */}
      <div className="bg-white border border-[#141414]/10 p-8 shadow-xl rounded-xl min-h-[450px] flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 border-4 border-[#ada87a]/30 border-t-[#ada87a] rounded-full animate-spin mb-6" />
        <h3 className="font-serif text-2xl mb-2 text-[#141414]">Live Calendar</h3>
        <p className="font-sans text-xs uppercase tracking-widest text-black/40 max-w-[200px]">
          Secure Direct Booking Engine initializing...
        </p>
      </div>
    </div>
  );
}