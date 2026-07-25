"use client";

export function BookingWidget({ propertyId }: { propertyId?: string }) {
  return (
    <div className="sticky top-24">
      <div className="bg-white border border-[#141414]/10 p-8 shadow-xl rounded-xl min-h-[450px] flex flex-col items-center justify-center text-center">
        
        {/* THIS IS WHERE THE HOSPITABLE SCRIPT WILL GO ON MONDAY */}
        <div className="w-12 h-12 border-4 border-[#ada87a]/30 border-t-[#ada87a] rounded-full animate-spin mb-6" />
        <h3 className="font-serif text-2xl mb-2 text-[#141414]">Live Calendar</h3>
        <p className="font-sans text-xs uppercase tracking-widest text-black/40 max-w-[200px]">
          Secure Direct Booking Engine initializing...
        </p>

      </div>
    </div>
  );
}