import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function AboutUsCard(props) {

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
      <section className="drop-shadow-element grid gap-8 md:grid-cols-2 md:items-center md:text-left text-center  sm:mb-20 sm:mt-20 mt-14 mb-14 ">
        <div className={`relative md:px-0 sm:mx-20 md:mx-0 mx-5 hidden sm:block`}>
          <img
            className={`object-cover rounded-lg w-full aspect-[4/3]`}
            src={props.imgSrc}
            alt="burger img"
          />
        </div>
        <div className="md:px-0 mx-5 font-mate lg:text-2xl text-xl md:mx-0 sm:mx-20 ">
          <p ref={elementRef} className={`${isVisible ? 'translate-x-0' : 'translate-x-2/4'} transition ease-in-out duration-2000 lg:text-6xl text-5xl`}>
            <b>{props.headline}</b>
          </p>
          <p className=" mt-7">{props.text}</p>
        </div>
      </section>
    </>
  );
}
