import React from 'react'
import { TECarousel, TECarouselItem } from "tw-elements-react";
import Img1Carousel from "./3burgers.jpg";

export default function Carousel() {
  return (
    <>
    <div className='w-full h-full relative '>
    <TECarousel ride="carousel">
              <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] h-full">
                <TECarouselItem
                  itemID={1}
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                >
                  <img
                    src={Img1Carousel}
                    className="block w-full"
                    alt="..."
                  />
                </TECarouselItem>
                <TECarouselItem
                  itemID={2}
                  className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                >
                  <img
                    src={Img1Carousel}
                    className="block w-full"
                    alt="..."
                  />
                </TECarouselItem>
                <TECarouselItem
                  itemID={3}
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                >
                  <img
                    src={Img1Carousel}
                    className="block w-full"
                    alt="..."
                  />
                </TECarouselItem>
              </div>
            </TECarousel>
            <div className="shadow-black shadow-md md:ml-64 xl:ml-0 rounded-xl backdrop-blur-sm py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-10 lg:py-14 lg:px-12 xl:py-16 xl:px-14 2xl:py-16 2xl:px-16">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto odit cum ea reiciendis, quo tempora dignissimos vero facere atque qui repellendus iusto? Enim natus hic voluptas dignissimos cumque nobis tempora.
            <br/>  

            
          </div>
        </div>
    </div>
    </>
  )
}
