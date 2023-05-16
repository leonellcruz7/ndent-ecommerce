import Image from "next/image";
import React from "react";

export default function ProductCard() {
  return (
    <div className="w-[160px] md:w-[250px] rounded-[10px] bg-white overflow-hidden hover:scale-[1.01] transition-all">
      <div>
        <Image
          width={500}
          height={500}
          src="https://picsum.photos/300/300"
          alt=""
        />
      </div>
      <div className="p-3">
        <p>Product Name</p>
        <p className="text-primary font-semibold">$100.00</p>
        <button className="button dark-button mt-4">Shop Now</button>
      </div>
    </div>
  );
}
