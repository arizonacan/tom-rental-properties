"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import type { ComponentProps } from "react";

type SmoothScrollingProps = Pick<ComponentProps<typeof ReactLenis>, "children">;

export default function SmoothScrolling({
  children,
}: SmoothScrollingProps) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}   
