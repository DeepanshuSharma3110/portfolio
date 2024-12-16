import React from 'react'
import exchangeIcon from '../../frontend_assets/exchange_icon.png';
import qualityIcon from '../../frontend_assets/quality_icon.png';
import supportImg from '../../frontend_assets/support_img.png';

const PolicySection = () => {

    const data = [
        {image:exchangeIcon, title:"Easy Exchange Policy", description: "We offer hassle free exchange policy"},
        {image:qualityIcon, title:"7 Days Return Policy", description: "We provide 7 days free return policy"},
        {image:supportImg, title:"Best customer support", description: "we provide 24/7 customer support"}


    ]

  return (
    <div className='grid lg:flex justify-center items-center mb-7'>
        {data.map((item)=>(
        <div className='flex flex-col  justify-center items-center mb-10'>
            <img src={item.image} className='mb-4'/>
            <div className='px-10 flex flex-col justify-center items-center'>
            <p className='text-2xl font-semibold mb-2'>{item.title}</p>
            <p className='text-2xl font-semibold text-gray-500 mb-2'>{item.description}</p>
                </div>
  
        </div>
        ))}
    </div>
  )
}

export default PolicySection
