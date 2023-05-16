import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Subscribe from "@/components/subscribe/Subscribe";
import Footer from "@/components/footer/Footer";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { FC, useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <TopCategories />
      <OurProducts />
    </Layout>
  );
}

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] bg-lightGrey">
      <div className="container py-20">
        <div className="flex gap-6 flex-wrap justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

const TopCategories = () => {
  const categories = [
    {
      name: "Television",
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1684202466/kindpng_1755322_jczzar.png",
    },
    {
      name: "Mobile",
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1684202550/iPhone-11-PNG-Transparent-HD-Photo_dpo9ew.png",
    },
    {
      name: "Headphones",
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1684202599/16-black-headphones-png-image_wchdld.png",
    },
    {
      name: "Watch",
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1684202665/58863-series-watch-apple-smartwatch-strap-free-photo-png_ogxi4s.png",
    },
    {
      name: "Game",
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1684217754/71b5c986-76fd-4182-b7de-31d3c8ad2234_instinct_base_shadow_xbox_series_x_controller_850x600_qyjqpw.webp",
    },
    {
      name: "Camera",
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1684217806/DSLR-Camera-Transparent-Background_jk4dqs.png",
    },
    {
      name: "Audio",
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1684217991/wireless_speaker_PNG50_ci3wlm.png",
    },
  ];
  return (
    <div>
      <div className="container py-10">
        <div className="text-center flex flex-col gap-3">
          <p className="title">Top Categories</p>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div className="flex justify-center gap-10 overflow-scroll hideScroll">
          {categories.map((item, index) => {
            return <Category key={index} props={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

interface CategoryProps {
  props: {
    name: string;
    image: string;
  };
}

const Category: FC<CategoryProps> = ({ props }) => {
  const { image, name } = props;
  return (
    <a href="#">
      <div className="h-[250px] flex flex-col items-center">
        <div className="flex items-center h-[300px]">
          <div className="flex w-[150px]">
            <Image
              className="w-full h-full"
              width={500}
              height={500}
              alt=""
              src={image}
            />
          </div>
        </div>
        <p>{name}</p>
      </div>
    </a>
  );
};

const OurProducts = () => {
  const [selectedMenu, setSelectedMenu] = useState("New Arrival");
  const menu = [
    {
      label: "New Arrival",
      link: "#",
    },
    {
      label: "Best Seller",
      link: "#",
    },
    {
      label: "Featured",
      link: "#",
    },
    {
      label: "Special Offer",
      link: "#",
    },
  ];
  return (
    <div className="bg-lightGrey py-10">
      <div className="container">
        <p className="title text-center">Our Products</p>
        <ul className="flex gap-10 justify-center mt-4">
          {menu.map((item, index) => {
            return (
              <button key={index} onClick={() => setSelectedMenu(item.label)}>
                <li
                  className={`hover:text-primary transition-all ${
                    selectedMenu === item.label &&
                    "text-primary scale-[1.04] font-medium"
                  }`}
                >
                  {item.label}
                </li>
              </button>
            );
          })}
        </ul>
        <div className="mt-10 flex flex-wrap justify-start gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};
