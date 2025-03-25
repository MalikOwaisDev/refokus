import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Get Started" }) => {
  return (
    <div className="min-w-34 px-4 py-2 bg-zinc-100 text-black rounded-full flex gap-2 items-center justify-between">
      <span className="text-sm font-medium">{title}</span>
      <span className="text-xl">
        {" "}
        <IoIosReturnRight />
      </span>
    </div>
  );
};

export default Button;
