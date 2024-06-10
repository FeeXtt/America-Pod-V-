import React from "react";
import { Link } from "react-router-dom";

export default function AboutUsCard(props) {
  return (
    <>
      <>
        <section className="grid gap-8 md:grid-cols-2 md:items-center md:text-left mt-20 mb-20 ">
          <div className={`relative md:px-0 px-20`}>
            <img
              className={`object-cover rounded-lg w-full aspect-[4/3]`}
              src={props.imgSrc}
              alt="burger img"
            />
          </div>
          <div className="md:px-0 px-20 font-mate text-2xl  ">
            <p className="">
              <b>{props.headline}</b>
            </p>
            <p className=" mt-7">{props.text}</p>
            <Link to="/">
              <button
                type="button"
                class="mt-4 font-bold  inline-block rounded-lg bg-red-900  px-6 pb-2 pt-2.5 text-xs  uppercase leading-normal text-white shadow-danger-3
                 transition duration-150 ease-in-out  active:bg-red-800 active:shadow-danger-2  transform hover:drop-shadow-slate800 hover:-translate-y-0.5 hover:-translate-x-0.5"
              >
                Danger
              </button>
            </Link>
          </div>
        </section>
      </>
    </>
  );
}
