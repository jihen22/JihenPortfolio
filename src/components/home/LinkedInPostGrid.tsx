'use client'

import { linkedinPostIds } from "@/config/infoConfig";
import { LinkedInPostCard } from "./LinkedInPostCard";

export const LinkedInPostGrid = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {linkedinPostIds.map((post, index) => (
          <div
            key={index}
            className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <LinkedInPostCard 
              post={post} 
              className="shadow-xl hover:shadow-2xl rounded-xl border border-gray-200 bg-white transition-all duration-300" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};