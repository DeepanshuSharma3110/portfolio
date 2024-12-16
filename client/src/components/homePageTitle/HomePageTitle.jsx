import React from 'react'

const HomePageTitle = () => {
  return (
    <div className='grid justify-center items-center p-10'>
        {/* headding */}
        <div className='flex items-center justify-center gap-2'>

        <p className='text-gray-700 text-6xl'>LATEST</p>
        <p className='text-6xl'>COLLECTIONS</p>
        <div className='border border-t-4 w-20 border-black'></div>
        </div>

        {/* body */}
        <div>
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, maxime.</p>
        <p className='text-xl'>consectetur adipisicing elit. Cumque, maxime.</p>
        </div>
        
    </div>
  )
}

export default HomePageTitle
