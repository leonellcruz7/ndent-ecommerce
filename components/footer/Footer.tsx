import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className="bg-darkGrey text-white">
      <div className="container gap-10 px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <Header />
        <UsefulLinks />
        <Category />
        <Account />
        <ContactInfo />
      </div>
    </div>
  );
}

const Header = () => {
  const socialLink = [
    { icon: "ri-facebook-fill", link: "#" },
    { icon: "ri-twitter-fill", link: "#" },
    { icon: "ri-youtube-fill", link: "#" },
    { icon: "ri-instagram-fill", link: "#" },
  ];
  return (
    <div className="">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="w-14">
            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dyecs1c3j/image/upload/v1684114116/ndent_qiuwfu.png"
              alt=""
            />
          </div>
          <p className="text-headline4 font-bold">Ndent</p>
        </div>
        <p className="text-sm leading-[190%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <ul className="flex gap-8">
          {socialLink.map((item, index) => {
            return (
              <Link key={index} href={item.link}>
                <li>
                  <i className={item.icon}></i>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const UsefulLinks = () => {
  const links = [
    { title: "About Us", link: "#" },
    { title: "FAQ", link: "#" },
    { title: "Location", link: "#" },
    { title: "Affiliates", link: "#" },
    { title: "Contact", link: "#" },
  ];
  return (
    <div>
      <p className={styles.title}>Useful Links</p>
      <ul className="flex flex-col gap-2">
        {links.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              <li>
                <p className="text-sm font-light">{item.title}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

const Category = () => {
  const category = [
    { title: "Men", link: "#" },
    { title: "Women", link: "#" },
    { title: "Kids", link: "#" },
    { title: "Best Seller", link: "#" },
    { title: "New Arrivals", link: "#" },
  ];
  return (
    <div>
      <p className={styles.title}>Category</p>
      <ul className="flex flex-col gap-2">
        {category.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              <li>
                <p className="text-sm font-light">{item.title}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

const Account = () => {
  const links = [
    { title: "My Account", link: "#" },
    { title: "Discount", link: "#" },
    { title: "Returns", link: "#" },
    { title: "Order History", link: "#" },
    { title: "Order Tracking", link: "#" },
  ];
  return (
    <div>
      <p className={styles.title}>Account</p>
      <ul className="flex flex-col gap-2">
        {links.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              <li>
                <p className="text-sm font-light">{item.title}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

const ContactInfo = () => {
  const info = [
    {
      info: "123 Street, Old Trafford, New South London , UK",
      icon: "ri-map-pin-line",
    },
    {
      info: "info@sitename.com",
      icon: "ri-mail-line",
    },
    {
      info: "+ 457 789 789 65",
      icon: "ri-smartphone-line",
    },
  ];
  return (
    <div className="">
      <p className={styles.title}>Contact Info</p>
      <ul className="flex flex-col gap-3">
        {info.map((item, index) => {
          return (
            <li key={index} className="flex gap-3">
              <i className={item.icon}></i>
              <p>{item.info}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
