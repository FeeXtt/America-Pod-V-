import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 

//2xl:-translate-y-48 xl:-translate-y-24 md: -translate-y-20 
export default function ImageCard(props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`relative font-mate bg-black ${props.border} drop-shadow-element`}>
      <img
        className={`object-cover opacity-60 w-full ${props.h}`}
        src={props.src}
        alt="burger img"
      />

      <div
        className={`${
          loaded
            ? `${props.translation}`
            : ""
        }   ${props.translationAdjustment} absolute top-0 left-0 w-full h-full flex items-center justify-center text-center font-bold duration-1000 `}
      >
        <div className={`${props.blurPadding} shadow-black shadow-md md:ml-64 xl:ml-0 rounded-xl backdrop-blur-sm py-16 px-24 `}>
          <div className={`${props.fontSize}`}> 
            {props.textpt1}
            {props.textpt2 && <br/>} 
            {props.textpt2}
            <br/>

            <Link
              to={props.link}
              className="underline text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
            >
              {props.linkText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

