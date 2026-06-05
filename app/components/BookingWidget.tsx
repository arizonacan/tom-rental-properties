"use client";

import Script from "next/script";

export function BookingWidget({ propertyName }: { propertyName: string }) {
  return (
    <div className="w-full">
      {/* 1. THE MOUNTING POINT
        This is the empty div that Hospitable/Lodgify will look for to inject their calendar UI. 
        We give it a min-height so the page doesn't violently "jump" when the calendar loads in.
      */}
      <div 
        id="channel-manager-widget" 
        className="min-h-[450px] w-full bg-black/5 border border-dashed border-black/20 flex items-center justify-center font-sans text-xs uppercase tracking-widest text-black/40"
      >
        Loading Calendar...
      </div>

      {/* 2. THE NEXT.JS SCRIPT LOADER
        Next.js handles this perfectly. 'lazyOnload' ensures your high-res cabin images 
        load FIRST, and the booking script loads after, keeping the site blazing fast.
        
        Note: When Tom buys his software, you will replace this src URL with his actual widget script.
      */}
      <Script
        src="https://placeholder-channel-manager.com/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`Widget loaded for ${propertyName}`);
          // If the software requires an init function, it goes here!
          // e.g., window.HospitableWidget.init('#channel-manager-widget');
        }}
      />
    </div>
  );
}