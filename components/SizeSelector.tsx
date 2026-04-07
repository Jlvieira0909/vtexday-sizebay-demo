"use client";

import { useState } from "react";

export default function SizeSelector({ sizes }: { sizes: string[] }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="flex gap-2.5 md:gap-3">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border rounded-xl text-sm md:text-base font-bold transition-all ${
            selectedSize === size
              ? "border-blue-600 bg-blue-600 text-white shadow-md scale-105"
              : "border-gray-200 bg-white text-gray-950 hover:border-blue-600 hover:text-blue-600"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
