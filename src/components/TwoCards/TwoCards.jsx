import React from "react";
import { Link } from "react-router-dom";

export default function TwoCards(props) {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-20  md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center mt-20 mb-20 ">
        <div className="grid md:mb-40 md:px-0 px-20 gap-3">
          <div className="text-8xl border-l-10">
            {props.headline}
            </div>

          <div className={`relative`}>
            <img
              className={`object-cover rounded-lg w-full aspect-[16/9]`}
              src={props.imgSrc}
              alt="burger img"
            />
          </div>

          <div className="">
            <p className="">{props.text}</p>
            <Link to="/">
              <button
                type="button"
                class="mt-4 font-bold inline-block rounded-lg bg-red-900  px-6 pb-2 pt-2.5 text-xs  uppercase leading-normal text-white shadow-danger-3
                 transition duration-150 ease-in-out  active:bg-red-800 active:shadow-danger-2  transform hover:drop-shadow-slate800 hover:-translate-y-0.5 hover:-translate-x-0.5"
              >
                Danger
              </button>
            </Link>
          </div>
        </div>

        <div className="grid gap-3 md:mt-40 md:px-0 px-20 ">
          <div className="text-8xl ">
            {props.headline}
            </div>

          <div className={`relative`}>
            <img
              className={`object-cover rounded-lg w-full aspect-[16/9]`}
              src={props.imgSrc}
              alt="burger img"
            />
          </div>

          
          
          <div className="">
            <p className=" pl-2">{props.text}</p>
            <Link to="/">
              <button
                type="button"
                class="mt-4 font-bold inline-block rounded-lg bg-red-900  px-6 pb-2 pt-2.5 text-xs  uppercase leading-normal text-white shadow-danger-3
                 transition duration-150 ease-in-out  active:bg-red-800 active:shadow-danger-2  transform hover:drop-shadow-slate800 hover:-translate-y-0.5 hover:-translate-x-0.5"
              >
                Danger
              </button>
            </Link>
            
          </div>
        </div>
      </section>
    </>
  );
}
