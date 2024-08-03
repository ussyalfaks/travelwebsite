import React from 'react'
import House from "../assets/h1.png"

function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-16 bg-transparent">
  <div className=" mb-20 ">
    <h1 className="text-4xl md:text-5xl mb-4 lg:leading-relaxed font-semibold ">Discover and <br /> Enjoy Exceptional <br /> 
    <span className='text-red-500'>Adventures</span> </h1>
    <p className="text-lg mb-8 capitalize">Discover Amazing Destinations and <br /> Create Unforgettable Memories</p>
    <div className="flex space-x-4">
      <button className=" py-1 px-4 bg-[#4475F2] text-white btn-outline font-normal rounded-md ">Start Your Journey</button>
      {/* <button className="btn btn-sm btn-outline font-light text-black rounded-2xl ">Rent Your Place</button> */}
    </div>
  </div>

  <div className="mt-8 md:mt-0">
    <img className="w-full max-w-md mx-auto md:max-w-xl" src={House} alt="Herohouse" />
  </div>
</div>

    </>
  )
}

export default Hero
