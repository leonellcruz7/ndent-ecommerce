import Layout from "@/components/layout/Layout";
import Colors from "@/components/products/Colors";
import Sizes from "@/components/products/Sizes";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Product() {
  return (
    <Layout>
      <div className="container py-10">
        <div className="flex flex-col gap-2 md:flex-row md:gap-10 mx-auto">
          <div className="md:w-[40%] flex flex-col gap-2">
            <div className="w-full max-h-[600px] flex justify-center items-center overflow-hidden">
              <Image
                width={1000}
                height={1000}
                src="https://picsum.photos/400/600"
                alt=""
                className=""
              />
            </div>
            <ImageList />
          </div>
          <div className="md:w-[60%]">
            <ProductDetails />
          </div>
        </div>
      </div>
    </Layout>
  );
}

const ProductDetails = () => {
  return (
    <div className="">
      <p className="text-lg font-medium">Product Name</p>
      <p className="text-headline5 font-semibold text-primary">$45.00</p>
      <div className="text-yellow-400">
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-half-fill"></i>
      </div>
      <p className="text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate harum
        accusantium quam beatae sapiente dolor
      </p>
      <div className="divider horizontal my-4"></div>
      <div className="flex flex-col gap-6">
        <Sizes />
        <Colors />
        <div className="divider horizontal"></div>
        <AddtoCart />
        <div className="divider horizontal"></div>
        <Others />
      </div>
    </div>
  );
};

const ImageList = () => {
  return (
    <div className="flex gap-2 overflow-x-scroll hideScroll">
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
    </div>
  );
};

const ImageItem = () => {
  return (
    <button className="min-w-[80px] h-[115px] overflow-hidden border-[1px] border-slate-300 p-1 hover:scale-[1.02] transition-all">
      <Image
        width={500}
        height={500}
        src="https://picsum.photos/400/600"
        alt=""
        className=""
      />
    </button>
  );
};

const AddtoCart = () => {
  const [quantity, setQuantity] = useState(1);
  const handleDeduct = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };
  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <button onClick={handleDeduct} className={styles.quantityButton}>
          <i className="ri-subtract-line"></i>
        </button>
        <p className="text-lg font-semibold text-primary">{quantity}</p>
        <button onClick={handleAdd} className={styles.quantityButton}>
          <i className="ri-add-line"></i>
        </button>
      </div>
      <button className="button primary-button max-w-[180px] flex items-center gap-2 justify-center">
        <i className="ri-shopping-cart-line"></i> <p>Add To Cart</p>
      </button>
    </div>
  );
};

const Others = () => {
  const tags = [
    {
      label: "Cloth",
      link: "#",
    },
    {
      label: "Printed",
      link: "#",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div className="text-body font-light flex gap-2">
        <p>Category:</p>
        <Link href="#">
          <span className="font-medium">Clothing</span>
        </Link>
      </div>
      <div className="text-body font-light flex gap-3 items-center">
        <p>Tags:</p>
        <div className="flex gap-2">
          {tags.map((item, index) => {
            return (
              <Link href="#" key={index}>
                <button className="font-medium text-sm py-1 px-2 bg-slate-200 text-slate-500">
                  {item.label}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
