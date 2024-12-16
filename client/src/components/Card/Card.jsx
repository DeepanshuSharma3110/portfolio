import React from 'react'
import img from '../../frontend_assets/p_img2.png';
const Card = () => {
  return (
    <div className='mb-2'>
      {/* top section */}
      <div className='overflow-hidden'>
        {/* i want to zoom the image 5-10 % when the person hover on the image */}
        <img src={img} className='transform transition duration-300 hover:scale-110 w-full'/>
      </div>
      {/* bottom section */}
      <p className='text-xl'>title of the product</p>
      <p className='text-xl font-semibold'>$245</p>
    </div>
  )
}

export default Card
