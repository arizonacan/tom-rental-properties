import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#141414] text-[#faf9eb] py-16 px-6 md:px-14 border-t border-[#ada87a]/20 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Client Branding */}
        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl tracking-wide mb-2">Tom&apos;s Rentals</h2>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#faf9eb]/50">
            Premium Upstate Escapes
          </p>
        </div>
        
        {/* Right Side: Legal & Agency Backlink */}
        <div className="flex flex-col items-center md:items-end gap-3 text-xs font-sans text-[#faf9eb]/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Tom&apos;s Rentals. All rights reserved.</p>
          <p>
            Engineered by{" "}
            <a 
              href="https://www.oceanaveconsulting.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#ada87a] hover:text-[#faf9eb] transition-colors"
            >
              Ocean Avenue Consulting
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}