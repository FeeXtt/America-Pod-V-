import React from "react";
import { Link } from "react-router-dom";

export default function ImgBGCard(props) {
  return (
    <div className="relative">
      <div
        className="object-cover aspect-[23/15]  sm:aspect-[23/13] md:aspect-[23/9]  overflow-hidden bg-cover bg-no-repeat p-12 text-center"
        style={{ backgroundImage: 'url("http://americapodvezi.cz/wp-content/uploads/2022/01/burgertopview-1024x682.jpg")' }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 sm:text-6xl text-4xl font-semibold">{props.headline}</h2>
              <h4 className="mb-2 sm:text-xl text-lg font-medium">
              {props.text}
              {props.text && <br/>}
              {props.text2}
              </h4>

              <Link to={props.link}>
              <button
                type="button"
                class="mt-3  font-bold inline-block rounded-lg bg-red-900  px-6 pb-2 pt-2.5 text-md  uppercase leading-normal text-white shadow-danger-3
                 transition duration-150 ease-in-out  active:bg-red-800 active:shadow-danger-2  transform hover:drop-shadow-slate900 hover:-translate-y-0.5 hover:-translate-x-0.5"
              >
                {props.button}
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
