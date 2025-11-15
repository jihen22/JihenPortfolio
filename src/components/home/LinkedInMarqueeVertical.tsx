'use client'

import { Marquee } from "@/components/magicui/marquee";
import { linkedinPostIds } from "@/config/infoConfig";
import { LinkedInPostCard } from "./LinkedInPostCard";

const firstRow = linkedinPostIds.slice(0, Math.ceil(linkedinPostIds.length / 3));
const secondRow = linkedinPostIds.slice(Math.ceil(linkedinPostIds.length / 3), Math.ceil((linkedinPostIds.length / 3) * 2));
const thirdRow = linkedinPostIds.slice(Math.ceil((linkedinPostIds.length / 3) * 2));

export function LinkedInMarqueeVertical() {
  return (
    <div className="relative hidden lg:flex h-[1000px] w-full flex-row items-center justify-center overflow-hidden gap-4">
      {/* Top gradient fade overlay - blends with background */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent pointer-events-none z-10" />

      {/* Bottom gradient fade overlay - blends with background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10" />

      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((post, index) => (
          <LinkedInPostCard key={index} post={post} className="shadow-xl mb-4" />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((post, index) => (
          <LinkedInPostCard key={index} post={post} className="shadow-xl mb-4" />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {thirdRow.map((post, index) => (
          <LinkedInPostCard key={index} post={post} className="shadow-xl mb-4" />
        ))}
      </Marquee>
    </div>
  );
}

