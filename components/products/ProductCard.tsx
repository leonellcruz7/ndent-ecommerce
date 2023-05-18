import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard() {
  return (
    <div className="shadow-sm w-full max-w-[250px] rounded-[10px] bg-white overflow-hidden hover:scale-[1.01] transition-all">
      <div>
        <Image
          width={500}
          height={500}
          src="https://picsum.photos/300/300"
          alt=""
        />
      </div>
      <div className="p-3">
        <p className="text-sm">Product Name</p>
        <p className="text-primary font-semibold text-sm">$100.00</p>
        <Link href="/products/test">
          <button className="button dark-button mt-4 text-sm">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}
