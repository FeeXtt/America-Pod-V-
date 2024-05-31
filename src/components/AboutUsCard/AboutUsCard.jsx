import React from "react";
import Vycep from "./vycep.jpg";

export default function AboutUsCard() {
  return (
    <>
      
      <div className='grid md:grid-cols-4 sm:grid-cols-1 mt-20 mb-20 px-0 md:px-5'>
        <div className='md:w-full w-3/4  md:col-span-2 relative mx-auto'>
        <img src={Vycep} className="block  md:rounded-lg inset-0 w-full h-full object-cover object-center" alt="..."/>

        </div>
        <div className='max-w-md mx-auto sm:max-w-xl lg:max-w-full md:col-span-2 relative lg:block p-20'>
            <div className='text-7xl'><b>O nas</b></div>
            <div className='text-2xl mt-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sit numquam architecto deserunt cum iure, soluta maiores quam sint nobis sapiente quibusdam totam hic dicta illo dolor dolores porro voluptatum?</div>
        </div>
    </div>
    </>
  );
}
