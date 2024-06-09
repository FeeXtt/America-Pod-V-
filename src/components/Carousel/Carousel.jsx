import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import Img1Carousel from "./3burgers.jpg";

export default function Carousel() {
  return (
    <>
      <div className="w-full h-60">
        <TECarousel ride="carousel">
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] h-full">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={Img1Carousel} className="block w-full" alt="..." />
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={Img1Carousel} className="block w-full" alt="..." />
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={Img1Carousel} className="block w-full" alt="..." />
            </TECarouselItem>
          </div>
        </TECarousel>
      </div>
    </>
  );
}
