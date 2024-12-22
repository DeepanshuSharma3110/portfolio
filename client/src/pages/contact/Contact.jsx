import React from 'react'
import contactImg from '../../frontend_assets/contact_img.png';
const Contact = () => {
  return (
    <div className="container my-5">
    <div className="border-t-2 border-black w-full mx-7"></div>
  
    <div className="flex gap-2 justify-center items-center my-10">
      <p className="text-2xl font-semibold">CONTACT US</p>
      <div className="border-t-2 border-black w-10"></div>
    </div>
  
    {/* About section */}
    <div className="grid md:flex justify-center items-stretch">
      {/* About image */}
      <div className="flex-grow h-full">
        <img src={contactImg} className="h-full w-full object-cover p-4" />
      </div>
  
      {/* About content */}
      <div className="w-full px-4 flex flex-col justify-center">
        <p className="text-lg md:text-2xl font-medium mb-4">Our Store</p>
        <p className="text-sm md:text-lg mb-4">
        54709 Willms Station
        Suite 350, Washington, USA
        </p>

        <p className="text-sm md:text-lg mb-4">
        Tel: (415) 555-0132
        </p>



        <p className="text-sm md:text-lg mb-4">
        Email: admin@forever.com
        </p>

        <p className="text-lg md:text-2xl font-medium mb-4">Careers at Forever</p>

        <p className="text-sm md:text-lg mb-4">
        Learn more about our teams and job openings.
        </p>

<button className='btn-primary'>Explore Jobs</button>
      </div>
    </div>
  </div>
  
  )
}

export default Contact
