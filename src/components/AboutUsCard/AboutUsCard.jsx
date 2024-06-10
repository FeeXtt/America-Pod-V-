import React from "react";
import { Link } from "react-router-dom";

export default function AboutUsCard(props) {
  return (
    <>
      <>
        <section className="grid gap-8 md:grid-cols-2 md:items-center md:text-left text-center sm:mt-20 mt-20 mb-20 ">
          <div className={`relative md:px-0 sm:mx-20 md:mx-0 hidden sm:block`}>
            <img
              className={`object-cover sm:rounded-lg w-full aspect-[4/3]`}
              src={props.imgSrc}
              alt="burger img"
            />
          </div>
          <div className="md:px-0 font-mate lg:text-2xl text-xl md:mx-0 sm:mx-20 ">
            <p className="lg:text-6xl text-5xl">
              <b>{props.headline}</b>
            </p>
            <p className=" mt-7">{props.text}</p>
            
          </div>
        </section>
      </>
    </>
  );
}
