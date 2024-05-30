import * as React from "react";
import "../../index.css";
import { Carousel } from "flowbite-react";

export default function InfoCard() {
  return (
    <>
      <div className="lg:w-1/2 sm:w-full ">
        <div className="p-8 ">
          <div className="w-full bg-red-900  h-10 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore voluptatem eos a distinctio ipsum id mollitia! Provident ex veniam odio labore accusantium ipsum, praesentium, sint nulla cupiditate, quasi dolores velit!</div>
          <div className="w-full">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
              <Carousel slideInterval={5000} leftControl="" rightControl="" indicators={false} >
               <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
               <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
               <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
               <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
               <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
