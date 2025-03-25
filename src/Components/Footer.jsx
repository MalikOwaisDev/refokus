import React from "react";

function Footer() {
  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2 ">
          <h1 className="text-[11.5rem] font-medium leading-none tracking-tight">
            {" "}
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="text-zinc-500 capitalize mb-10">Social</h4>
            {["instagram", "twitter(x?)", "LinkedIn"].map((elem, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">
                {elem}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="text-zinc-500 capitalize mb-10">Social</h4>
            {["instagram", "twitter(x?)", "LinkedIn"].map((elem, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">
                {elem}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology .
            </p>
            <img
              className="mt-10 w-44"
              src="https://cdn.prod.website-files.com/626ad8a884126e0c87e2ea23/63685f807a46cd477e21c425_Badge-EnterprisePartner-Blue.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto pb-5 flex gap-10">
        {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
          (item, index) => (
            <a key={index} className="text-zinc-500" href="#">
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Footer;
