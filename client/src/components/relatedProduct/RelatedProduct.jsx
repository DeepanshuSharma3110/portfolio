import React from 'react'
import Card from '../Card/Card'

const RelatedProduct = () => {
  return (
    <div>
        {/* headding */}
      <div className='flex justify-center items-center'>
        <p className='text-gray-500 text-3xl font-semibold'>RELATED&nbsp;</p><p className='text-3xl font-semibold'>PRODUCTS</p><div className='border-t-4 border-black w-20'></div>
      </div>
      {/* products */}
      <div className='flex my-10'>
        {[1,2,3,4,5,6].map((item)=>(
            <Card />
        ))}
      </div>
      <div>

      </div>
    </div>
  )
}

export default RelatedProduct
