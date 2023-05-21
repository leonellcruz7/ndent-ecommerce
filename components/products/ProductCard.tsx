import { ProductCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

const ProductCard: FC<ProductCardProps> = ({ details }) => {
  // const { _id, category, colors, images, isAvailable, name, sizes, price } = details;
  const [selectedImage, setSelectedImage] = useState(details?.images[0]);
  return (
    <div className="shadow-sm w-full flex flex-col justify-between rounded-[10px] bg-white overflow-hidden hover:scale-[1.01] transition-all">
      <div className="p-1 rounded-[5px] object-contain relative">
        <div className="rounded-[5px] flex items-center justify-center overflow-hidden h-[240px]">
          <Image
            width={1000}
            height={1000}
            src={selectedImage}
            alt=""
            className="rounded-[5px]"
          />
        </div>
        <div className="absolute bottom-[-15px] right-3 z-10">
          <Images setSelected={setSelectedImage} images={details?.images} />
        </div>
      </div>
      <div className="p-3 mt-3">
        <p className="text-sm truncate">{details?.name}</p>
        <p className="text-primary font-semibold text-sm">
          ${details?.price.toString()}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <button className="rounded-[50%] bg-primary text-white shadow-sm w-5 h-5 p-4 flex justify-center items-center">
            <i className="ri-shopping-cart-line"></i>
          </button>
          <Link href={`/products/${details?._id}`}>
            <button className="text-primary font-bold">
              <i className="ri-arrow-right-line"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
interface ImagesProps {
  images: string[];
  setSelected: any;
}
const Images: FC<ImagesProps> = ({ setSelected, images }) => {
  return (
    <div className="flex gap-1">
      {images?.map((item, index) => {
        return (
          <button
            key={index}
            onMouseEnter={() => setSelected(item)}
            className="p-1 shadow-lg w-fit rounded-[50%] bg-white hover:scale-[1.03] transition-all"
          >
            <Image
              width={300}
              height={300}
              alt=""
              src={item}
              className="w-10 h-10 rounded-[50%]"
            />
          </button>
        );
      })}
    </div>
  );
};
