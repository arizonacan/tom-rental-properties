'use client'

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { PropertyGrid } from "./components/PropertyGrid";

const lenisOptions = {
  duration: 1.6,
  lerp: 0.08,
  smoothWheel: true,
  syncTouch: true,
  touchMultiplier: 1.08,
  wheelMultiplier: 0.82,
} as const;

// 🚨 CUSTOM EASING CURVE: This is the secret to the "Expensive Apple/Agency" feel. 
// It starts fast and incredibly slowly glides to a stop.
const luxuryEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

function SiteNavigation() {
  const lenis = useLenis();

  const handleBookClick = () => {
    if (lenis) {
      lenis.scrollTo("#properties", {
        duration: 1.35,
        offset: -32,
      });
      return;
    }

    document
      .querySelector("#properties")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="pointer-events-none absolute inset-x-0 top-0 z-50">
      {/* 🚨 ENTRY ANIMATION: The Nav floats down gently from the top */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: luxuryEasing, delay: 0.2 }}
        className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7 lg:px-14"
      >
        <p className="pointer-events-auto font-serif text-[0.72rem] uppercase tracking-[0.42em] text-[#faf9eb] mix-blend-difference">
          Tom&apos;s Rentals
        </p>

        <motion.button
          type="button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleBookClick}
          className="pointer-events-auto rounded-full bg-[#faf9eb] px-5 py-3 font-sans text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#141414] ring-1 ring-[#141414]/10 shadow-[0_16px_50px_rgba(0,0,0,0.16)] transition-transform"
        >
          Book a Stay
        </motion.button>
      </motion.div>
    </nav>
  );
}

function HeroFrame() {
  const heroRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const backgroundY = useTransform(
    scrollY,
    [0, 1000],
    prefersReducedMotion ? ["0vh", "0vh"] : ["0vh", "-30vh"],
  );
  const backgroundScale = useTransform(
    scrollY,
    [0, 1000],
    prefersReducedMotion ? [1.08, 1.08] : [1.08, 1.15],
  );
  const textY = useTransform(
    scrollY,
    [0, 1000],
    prefersReducedMotion ? ["0vh", "0vh"] : ["0vh", "-50vh"],
  );
  const overlayOpacity = useTransform(
    scrollY,
    [0, 1000],
    prefersReducedMotion ? [1, 1] : [1, 0.88],
  );

  return (
    <section ref={heroRef} className="sticky top-0 z-0 h-screen px-1 md:px-2">
      <div className="relative h-full overflow-hidden border-x border-[#faf9eb]/80 bg-[#141414]">
        
        {/* 🚨 ENTRY ANIMATION: The image starts dark and fades to full brightness */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ y: backgroundY, scale: backgroundScale }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/hero-cabin-exterior.jpg"
            alt="Exterior view of Tom's Rentals framed by pines in Upstate New York"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,20,0.82)_0%,rgba(20,20,20,0.18)_36%,rgba(20,20,20,0.12)_58%,rgba(20,20,20,0.86)_100%)]"
        />

        {/* Outer div controls the SCROLL physics */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex items-end pb-12 md:pb-16 lg:pb-20"
        >
          {/* 🚨 ENTRY ANIMATION: Inner div controls the LOAD IN physics. It floats up slowly. */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: luxuryEasing, delay: 0.4 }}
            className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-8 px-6 md:px-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(19rem,0.7fr)] lg:items-end lg:px-14"
          >
            <div className="max-w-4xl">
              <h1 className="font-display text-[clamp(2.5rem,5.5vw,6.5rem)] leading-[0.92] tracking-[-0.03em] text-[#faf9eb]">
                A Cozy &{" "}
                <span className="font-serif italic text-[#ada87a]">
                  Peaceful
                </span>
                <br />
                Getaway
              </h1>
            </div>

            <p className="max-w-md font-serif text-lg leading-relaxed text-[#faf9eb]/86 md:text-[1.35rem] md:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. 
              Quisque faucibus ex sapien vitae pellentesque sem placerat. 
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="relative z-10 bg-[#faf9eb] shadow-[0_-30px_80px_rgba(0,0,0,0.28)]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-6 pt-20 pb-8 md:px-10 md:pt-28 md:pb-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-20 lg:px-14 lg:pt-36 lg:pb-12">
        
        {/* 🚨 SCROLL ANIMATION: The image gracefully slides up when you scroll down to it */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: luxuryEasing }}
          className="relative aspect-[4/5] min-h-[28rem] overflow-hidden bg-[#d8d1bc] md:min-h-[42rem]"
        >
          <Image
            src="/interior-fireplace.jpg"
            alt="Warm fireplace corner with layered textures inside Tom's Rentals"
            fill
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* 🚨 SCROLL ANIMATION: The text follows slightly after the image (delay: 0.2) */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: luxuryEasing, delay: 0.2 }}
          className="max-w-2xl"
        >
          <p className="font-sans text-[0.72rem] uppercase tracking-[0.38em] text-[#ada87a]">
            Our Story
          </p>

          <h2 className="mt-5 font-display text-[clamp(2.6rem,5vw,5.25rem)] leading-[0.98] tracking-[-0.03em] text-[#141414]">
            Lorem ipsum dolor sit amet.
          </h2>

          <p className="mt-8 font-serif text-xl leading-relaxed text-[#141414]/80">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. 
            Quisque faucibus ex sapien vitae pellentesque sem placerat. 
            In id cursus mi pretium tellus duis convallis. 
            Tempus leo eu aenean sed diam urna tempor. 
            Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
          </p>

          <p className="mt-6 font-serif text-xl leading-relaxed text-[#141414]/80">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. 
            Quisque faucibus ex sapien vitae pellentesque sem placerat. 
            In id cursus mi pretium tellus duis convallis. 
            Tempus leo eu aenean sed diam urna tempor. 
            Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 border-t border-[#141414]/12 pt-6 font-sans text-[0.72rem] uppercase tracking-[0.28em] text-[#141414]/58 md:grid-cols-3">
            <p>Upstate New York</p>
            <p>Mid-Century Warmth</p>
            <p>Private Boutique Escape</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <ReactLenis root options={lenisOptions}>
      <main className="min-h-screen overflow-x-clip bg-[#faf9eb] text-[#141414]">
        <SiteNavigation />
        <HeroFrame />
        <IntroSection />
        <section id="properties" className="relative z-10 bg-[#faf9eb]">
          <PropertyGrid />
        </section>
      </main>
    </ReactLenis>
  );
}