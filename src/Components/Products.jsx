import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const [products, setproducts] = useState([
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      Case: false,
      isActive: false,
      image: "./resources/arquitel.webp",
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      Case: true,
      isActive: false,
      image: "./resources/cula.png",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      Case: false,
      isActive: false,
      image: "./resources/ttr.png",
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      Case: false,
      isActive: false,
      image: "./resources/maniv.jpg",
    },
    {
      title: "YIR 2025",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      Case: true,
      isActive: false,
      image: "./resources/yir2021.png",
    },
  ]);

  const [pos, setpos] = useState(0);
  const mover = (val) => {
    setpos(val * 18);
    setproducts(
      products.map((elem, index) =>
        index === val
          ? { ...elem, isActive: true }
          : { ...elem, isActive: false }
      )
    );
  };

  const handleMouseLeave = () => {
    setproducts(
      products.map((prev) => ({
        ...prev,
        isActive: false, // Reset isActive to false when mouse leaves
      }))
    );
  };

  const isAnyProductActive = products.some((product) => product.isActive);

  return (
    <div className="bg-zinc-900 relative pt-5" onMouseLeave={handleMouseLeave}>
      {products.map((val, i) => (
        <Product key={i} val={val} mover={mover} count={i} />
      ))}
      <div
        className={`w-full h-full pointer-events-none absolute top-0 pt-6 ${
          isAnyProductActive ? "mt-7.5" : null
        }`}
      >
        <motion.div
          initial={{ y: pos, x: "-20%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
          className={`window bg-sky-100 absolute w-[26rem] left-1/3 h-[18rem] overflow-hidden rounded-xl ${
            isAnyProductActive ? "block" : "hidden"
          }`}
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
            className="window w-full h-full"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="./resources/arqitel.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
            className="window  bg-sky-500 w-full h-full"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="./resources/cula.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
            className="window bg-sky-700  w-full h-full"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="./resources/ttr.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
            className="window bg-sky-900  w-full h-full"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="./resources/maniv.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
            className="window bg-sky-900  w-full h-full"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="./resources/yir2021.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
