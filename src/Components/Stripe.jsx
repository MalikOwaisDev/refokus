import React from "react";

function Stripe({ val }) {
  const { url, number } = val;
  return (
    <div
      className={`w-[16.66%] px-10 py-5 pb-4 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between items-center`}
    >
      <img className="text-white" src={url} alt="" />{" "}
      <span className="font-semibold text-white ">{number}</span>
    </div>
  );
}

export default Stripe;
