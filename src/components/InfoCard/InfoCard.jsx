import * as React from "react";
import "../../index.css";

import { TECarousel, TECarouselItem } from "tw-elements-react";


export default function InfoCard(props) {
  return (
    <>

      <div className="lg:w-1/2 sm:w-full">
        <div className="p-8 ">
          <div className="w-full bg-red-900   text-center align-text-middle">
            <p className="align-middle">Lorem ipsum dolor sit amet</p>
          </div>
          <div className="w-full">
            <TECarousel ride="carousel">
              <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                <TECarouselItem
                  itemID={1}
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                    className="block w-full"
                    alt="..."
                  />
                </TECarouselItem>
                <TECarouselItem
                  itemID={2}
                  className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                    className="block w-full"
                    alt="..."
                  />
                </TECarouselItem>
                <TECarouselItem
                  itemID={3}
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                    className="block w-full"
                    alt="..."
                  />
                </TECarouselItem>
              </div>
            </TECarousel>
          </div>

        </div>
      </div>
    </>
  );
}
