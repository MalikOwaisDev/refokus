import React from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  const { title, description, live, Case, isActive, image } = val;
  return (
    <div
      className={`w-full py-20 ${
        isActive ? "h-[22rem]" : "h-[18rem]"
      } bg-zinc-900 text-white flex transition-all duration-300`}
      style={{ backgroundImage: isActive ? `url(${image})` : "none" }}
      onMouseEnter={() => mover(count)} // Trigger the mover function when mouse enters
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-[18vw]">
        <h1 className="text-6xl capitalize font-medium">{title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{description}</p>
          <div className="flex items-center gap-5">
            {live && <Button title="Live Website" />}
            {Case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
