import React from "react";

export default function Subscribe() {
  return (
    <div className="bg-primary">
      <div className="container py-10 flex flex-col md:flex-row justify-between gap-6 text-start">
        <p className="text-white font-semibold text-headline6 md:text-headline5">
          Subscribe to Our New Letter
        </p>
        <div className="flex w-full max-w-[420px]">
          <input
            placeholder="Enter Email Address"
            className="input w-full"
            type="text"
          />
          <button className="button dark-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
