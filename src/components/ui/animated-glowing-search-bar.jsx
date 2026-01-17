"use client";
import { useState } from "react";

export default function SearchComponent({ value, onChange }) {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative flex items-center justify-center group">
        <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[65px] max-w-[312px] rounded-xl blur-[3px] 
          before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat 
          before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
          before:rotate-[82deg] before:bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)] 
          before:transition-all before:duration-2000 group-hover:before:rotate-[-98deg] 
          group-focus-within:before:rotate-[442deg]" />

        <input
          placeholder="Search posts..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-neutral-900 border-nonew-full max-w-[320px]
 h-[56px] rounded-lg text-white px-6 text-lg focus:outline-none placeholder-gray-400"
        />
      </div>
    </div>
  );
}
