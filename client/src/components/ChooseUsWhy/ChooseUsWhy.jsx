import React from 'react'

const ChooseUsWhy = () => {
  return (
    <div className='my-20'>
        {/* headding */}
        
        <div className='flex items-center gap-2 mb-6'>
            <p className='text-2xl text-gray-500 font-medium'>WHY</p>
            <p className='text-2xl font-medium'>CHOOSE US</p>
            <div className='border-t-4 border-black w-20'></div>
        </div>

        {/* container */}
        
        <div className='grid md:flex  mb-7'>
        <div className='p-10 border'>
            {/* headding */}
            <p className='font-bold'>Quality Assurance:</p>

            {/* body */}
            <p className='text-gray-500 font-medium'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
            </div>


            <div className='p-10 border'>
            {/* headding */}
            <p className='font-bold'>Convenience:</p>

            {/* body */}
            <p className='text-gray-500 font-medium'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
            </div>


            <div className='p-10 border'>
            {/* headding */}
            <p className='font-bold'>Exceptional Customer Service:</p>

            {/* body */}
            <p className='text-gray-500 font-medium'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
            </div>
            

        </div>
    </div>
  )
}

export default ChooseUsWhy
