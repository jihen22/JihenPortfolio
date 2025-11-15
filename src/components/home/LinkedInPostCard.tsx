'use client'

import { cn } from "@/lib/utils";
import { LinkedInEmbed } from 'react-social-media-embed';
import { LinkedInPostType } from "@/config/activity";
import { Suspense } from "react";

interface LinkedInPostCardProps {
  post: LinkedInPostType;
  className?: string;
}

export const LinkedInPostCard = ({ post, className }: LinkedInPostCardProps) => {
  return (
    <div
      className={cn(
        "flex justify-center transition-all duration-300 ease-in-out",
        className
      )}
    >
      <Suspense fallback={<LinkedInPostSkeleton />}>
        <LinkedInEmbed
          url={post.url}
          postUrl={post.postUrl}
          width={post.width}
          height={post.height}
          placeholderImageUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='504' height='600'%3E%3Crect fill='%23f0f0f0' width='504' height='600'/%3E%3C/svg%3E"
        />
      </Suspense>
    </div>
  );
};

export const LinkedInPostSkeleton = () => (
  <div className="relative flex size-full max-w-lg flex-col gap-3 overflow-hidden rounded-lg border p-4 backdrop-blur-md bg-primary/10 animate-pulse" style={{ width: 325, height: 570 }}>
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-primary/10" />
        <div className="flex flex-col gap-2">
          <div className="h-4 w-24 bg-primary/10 rounded" />
          <div className="h-3 w-16 bg-primary/10 rounded" />
        </div>
      </div>
      <div className="h-4 w-4 bg-primary/10 rounded" />
    </div>
    <div className="flex-1 flex flex-col gap-2">
      <div className="h-3 w-full bg-primary/10 rounded" />
      <div className="h-3 w-5/6 bg-primary/10 rounded" />
      <div className="h-3 w-4/6 bg-primary/10 rounded" />
    </div>
    <div className="flex items-center justify-between pt-2 border-t border-border">
      <div className="flex items-center gap-3">
        <div className="h-3 w-12 bg-primary/10 rounded" />
        <div className="h-3 w-12 bg-primary/10 rounded" />
      </div>
      <div className="h-3 w-16 bg-primary/10 rounded" />
    </div>
  </div>
);

