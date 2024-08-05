import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function aboutus() {
  return (
    <>
    
    <div className='flex justify-center items-center flex-col m-10'>
        <h1 className='font-semibold text-4xl my-2 text-center max-md:text-3xl'>Why We Are The Best</h1>
        <p className='text-center'>Unmatched travel website designs for seamless <br /> exploration</p>

        <div className='flex justify-center max-md:flex-col items-center'>
        <div className='flex flex-col mr-10 mt-16 mb-5 max-md:my-5 max-md:mx-auto justify-center items-center'>
          <span> <FontAwesomeIcon
            icon={faBars}/></span>
            <h1 className='text-bold text-3xl text-center my-3'>Passionate Experts</h1>
              <p className='text-center mb-3'>We understand the nuances of travel and curate <br /> experiences that go beyond the ordinary.</p>
              <button className='text-[#4475F2]'>Read More +</button>
        </div>


        <div className='flex flex-col mr-10 mt-16 mb-5 max-md:my-5 max-md:mx-auto justify-center items-center'>
          <span> <FontAwesomeIcon
            icon={faBars}/></span>
            <h1 className='text-bold text-3xl text-center my-3'>Passionate Experts</h1>
              <p className='text-center mb-3'>We understand the nuances of travel and curate <br /> experiences that go beyond the ordinary.</p>
              <button className='text-[#4475F2]'>Read More +</button>
        </div>


        <div className='flex flex-col mr-10 mt-16 mb-5 max-md:my-5 max-md:mx-auto justify-center items-center'>
          <span> <FontAwesomeIcon
            icon={faBars}/></span>
            <h1 className='text-bold text-3xl text-center my-3'>Passionate Experts</h1>
              <p className='text-center mb-3'>We understand the nuances of travel and curate <br /> experiences that go beyond the ordinary.</p>
              <button className='text-[#4475F2]'>Read More +</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default aboutus