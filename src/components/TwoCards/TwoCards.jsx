import React from "react";
import { Link } from "react-router-dom";

export default function TwoCards(props) {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-8  md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center sm:mt-20 sm:mb-20 mt-3 mb-0">
        <div className="grid md:mb-28 md:px-0 sm:px-20 text-center sm:text-left px-0 gap-3">
          <div className="lg:text-6xl text-5xl font-semibold">
            {props.headline}
            </div>

          <div className={`relative`}>
            <img
              className={`object-cover sm:rounded-lg w-full aspect-[16/9]`}
              src={props.imgSrc}
              alt="burger img"
            />
          </div>

          <div className="">
            <p className="lg:text-2xl text-xl px-2 sm:px-0">{props.text}</p>
            <Link to={props.link}>
              <button
                type="button"
                class="mt-4 font-bold inline-block rounded-lg bg-red-900  px-6 pb-2 pt-2.5 text-xs  uppercase leading-normal text-white shadow-danger-3
                 transition duration-150 ease-in-out  active:bg-red-800 active:shadow-danger-2  transform hover:drop-shadow-slate900 hover:-translate-y-0.5 hover:-translate-x-0.5"
              >
                {props.button}
              </button>
            </Link>
          </div>
        </div>

        <div className="grid md:mt-28 md:px-0 sm:px-20 text-center sm:text-left px-0 gap-3">

          <div className={`relative`}>
            <img
              className={`object-cover sm:rounded-lg w-full aspect-[4/3]`}
              src={props.imgSrc2}
              alt="burger img"
            />
          </div>

        </div>
      </section>
    </>
  );
}
