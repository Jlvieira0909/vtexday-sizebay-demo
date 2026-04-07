"use client";

import { useState } from "react";

export default function ProductGallery({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto lg:max-w-none">
      <div className="relative aspect-[3/4] bg-gray-100 rounded-3xl overflow-hidden w-full shadow-sm border border-gray-100">
        <img
          src={mainImage}
          alt={productName}
          className="object-cover object-top w-full h-full transition-opacity duration-300"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto py-1 scrollbar-hide">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setMainImage(img)}
            className={`flex-none w-20 aspect-[3/4] rounded-xl overflow-hidden border-2 transition-all p-0 ${
              mainImage === img
                ? "border-blue-600 opacity-100"
                : "border-transparent opacity-60 hover:opacity-100 hover:border-gray-300"
            }`}
          >
            <img
              src={img}
              alt={`Miniatura ${index + 1}`}
              className="object-cover object-top w-full h-full bg-gray-100 block"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
