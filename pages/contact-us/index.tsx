import Layout from "@/components/layout/Layout";
import { setBreadCrumbs } from "@/redux/breadcrumbs";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ContactUs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadCrumbs([
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Contact Us",
          link: "/contact-us",
        },
      ])
    );
  }, []);
  return (
    <Layout>
      <div className="container py-10">
        <Infos />
        <Contact />
      </div>
    </Layout>
  );
}

const Infos = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </div>
  );
};

const InfoCard = () => {
  return (
    <div className="rounded-[15px] w-full bg-white shadow-md p-10 text-center">
      <button className="border-[1px] border-primary text-primary p-4 w-20 h-20 flex items-center justify-center rounded-[50%] mx-auto hover:text-white hover:bg-primary transition-all">
        <i className="ri-map-pin-line text-[40px] font-extralight"></i>
      </button>
      <div className="mt-4">
        <p className="text-slate-900 font-medium">Address</p>
        <p className="text-slate-500 font-light text-sm ">
          123 Street, Old Trafford, London, UK
        </p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="py-10">
      <div>
        <Form />
      </div>
      <div></div>
    </div>
  );
};

const Form = () => {
  return (
    <div className="flex flex-col gap-4 max-w-[500px]">
      <p className="text-headline6 font-semibold">Get In Touch</p>
      <p className="text-body text-sm font-extralight">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
        repudiandae dolore aperiam
      </p>
      <form className="flex flex-col gap-2">
        <input
          type="text"
          className="input withBorder"
          placeholder="Enter Name"
        />
        <input
          type="text"
          className="input withBorder"
          placeholder="Enter Email"
        />
        <input
          type="text"
          className="input withBorder"
          placeholder="Enter Phone Number"
        />
        <input
          type="text"
          className="input withBorder"
          placeholder="Enter Subject"
        />
        <textarea
          className="input withBorder min-h-[100px]"
          placeholder="Enter Email"
        />
        <button className="button dark-button max-w-[160px]">
          Send Message
        </button>
      </form>
    </div>
  );
};
