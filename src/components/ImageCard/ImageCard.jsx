import React, { useState, useEffect } from 'react';

export default function ImageCard(props) {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (

    <div className="relative md:bg-black">
      <img
        className={`object-cover md:opacity-60 w-full ${props.h}`}
        src={props.src}
        alt="burger img"
      />

      <div className={`${loaded ? '2xl:-translate-y-48 xl:-translate-y-24 md: -translate-y-20' : ''} 2xl:mt-48 xl:mt-24 mt-20 opacity-0 md:opacity-100 absolute top-0 left-0 w-full h-full flex items-center justify-center text-center font-bold duration-1000 `}>
        <div className="shadow-black shadow-md md:ml-64 xl:ml-0 rounded-xl backdrop-blur-sm py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-10 lg:py-14 lg:px-12 xl:py-16 xl:px-14 2xl:py-16 2xl:px-16">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            {props.textpt1}
            <br />
            {props.textpt2}
          </div>
        </div>
      </div>

    </div>
  );
}
//2xl:-translate-y-48 xl:-translate-y-24 md: -translate-y-20 || 2xl:mt-48 xl:mt-24 mt-20