import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function TwoCards(props) {

  const elementRef = useRef(null);

  // State to track whether the element is visible or not
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Create an IntersectionObserver to observe when the element comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is intersecting (visible in the viewport)
        if (entry.isIntersecting) {
          setIsVisible(true); // Update state to trigger animation
          observer.unobserve(entry.target); // Stop observing the element
        }
      },
      { threshold: 0.1 } // 10% of the element needs to be visible to trigger the callback
    );

    // Attach the observer to the element
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="grid md:grid-cols-2 gap-8  mx-5 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center sm:mt-20 sm:mb-20 mt-10 mb-10 drop-shadow-element">

      <div className=" text-center md:text-left px-0 gap-3 ">
          
          <div ref={elementRef} className={`ml-auto ${isVisible ? 'translate-x-0' : 'translate-x-2/4'} mb-4 transition ease-in-out duration-2000 text-5xl font-semibold`}>
            {props.headline}
          </div>

          <div className={`relative `}>
            <img
              className={`object-cover rounded-lg w-full aspect-[4/3]`}
              src={props.imgSrc2}
              alt="burger img"
            />
          </div>
        </div>

        <div className="grid  text-center md:text-left px-0 gap-3">

          <div className="md:hidden mb-4">
            <p className="lg:text-2xl text-xl px-2 sm:px-16">{props.text}</p>
            <Link to={props.link}>
              <button
                type="button"
                className="ml-auto mt-4 font-bold inline-block rounded-lg bg-red-900  px-6 pb-2 pt-2.5 text-xs uppercase leading-normal text-white shadow-danger-3
                 transition duration-150 ease-in-out  active:bg-red-800 active:shadow-danger-2  transform hover:drop-shadow-slate900 hover:-translate-y-0.5 hover:-translate-x-0.5"
              >
                {props.button}
              </button>
            </Link>
          </div>

          <div className={`relative`}>
            <img
              className={`object-cover rounded-lg w-full aspect-[16/9]`}
              src={props.imgSrc}
              alt="burger img"
            />
          </div>

          <div className="md:visible invisible md:m-0 -m-20">
            <p className="lg:text-2xl text-xl px-2 sm:px-0">{props.text}</p>
            <Link to={props.link}>
              <button
                type="button"
                className="ml-auto mt-4 font-bold inline-block rounded-lg bg-red-900  px-6 pb-2 pt-2.5 text-xs uppercase leading-normal text-white shadow-danger-3
                 transition duration-150 ease-in-out  active:bg-red-800 active:shadow-danger-2  transform hover:drop-shadow-slate900 hover:-translate-y-0.5 hover:-translate-x-0.5"
              >
                {props.button}
              </button>
            </Link>
          </div>

        </div>
        
      </section>
    </>
  );
}
