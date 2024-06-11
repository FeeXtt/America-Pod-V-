import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function ImgBGCard(props) {
  
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
    <div className="relative drop-shadow-element">
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
              <h2 ref={elementRef} className={`${isVisible ? 'scale-100' : 'scale-75'} transition ease-in-out duration-2000 mb-4 sm:text-6xl text-4xl font-semibold`}>{props.headline}</h2>
              <h4 className="mb-2 lg:text-2xl text-xl font-medium">
              {props.text}
              {props.text && <br/>}
              {props.text2}
              </h4>

              <Link to={props.link}>
              <button
                type="button"
                className="mt-3 text-xs font-bold inline-block rounded-lg bg-red-900  px-6 pb-2 pt-2.5 text-md  uppercase leading-normal text-white shadow-danger-3
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
