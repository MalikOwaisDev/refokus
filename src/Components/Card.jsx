import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" ? "#7443ff" : "",
        paddingLeft: "25px",
      }}
      className={`${width} min-h-[30rem] flex flex-col justify-between bg-zinc-800 p-5 rounded-xl`}
    >
      <div className="w-full">
        {" "}
        <div className="w-full flex justify-between items-center">
          <h3>one heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h2 className="text-3xl font-medium mt-5">Whatever heading</h2>
      </div>
      <div className="down w-full">
        {start && (
          <>
            {" "}
            <h2 className="text-[7vw] font-medium tracking-tight leading-none">
              Start a Project
            </h2>
            <button className="rounded-full py-2 px-5 border-[1px] border-zinc-200 mt-5">
              Contact us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium ">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
