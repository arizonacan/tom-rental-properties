"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Plus, Minus } from "lucide-react"; // Re-using for the description toggle if needed

type Accommodation = {
  id: string;
  title: string;
  specs: string;
  price: string;
  description?: string; 
};

export function BookingWidget({ options }: { options?: Accommodation[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Read the URL. If there is no ?room= parameter, default to the first option
  const selected = searchParams.get("room") || options?.[0]?.id || "default";

  const handleSelect = (id: string) => {
    // 🚨 The Magic: Silently update the URL so the server knows which photos to load
    router.replace(`${pathname}?room=${id}`, { scroll: false });
  };

  return (
    <div className="sticky top-24">
      {options && options.length > 0 && (
        <div className="mb-6 bg-white border border-[#141414]/10 shadow-sm p-2">
          <p className="font-sans text-[0.65rem] uppercase tracking-widest text-[#141414]/50 mb-3 px-3 pt-2">
            Select Accommodation
          </p>
          <div className="flex flex-col gap-2">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`flex flex-col items-start w-full px-4 py-4 text-left transition-all ${
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
              </button>
            ))}
          </div>
        </div>
      )}

      {/* THE WIDGET PLACEHOLDER */}
      <div className="bg-white border border-[#141414]/10 p-8 shadow-xl min-h-[450px] flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 border-4 border-[#ada87a]/30 border-t-[#ada87a] rounded-full animate-spin mb-6" />
        <h3 className="font-serif text-2xl mb-2 text-[#141414]">Live Calendar</h3>
        <p className="font-sans text-xs uppercase tracking-widest text-black/40 max-w-[200px]">
          Secure Direct Booking Engine initializing...
        </p>
      </div>
    </div>
  );
}