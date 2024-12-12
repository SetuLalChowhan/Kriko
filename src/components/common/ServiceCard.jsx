import React from 'react'

export const ServiceCard = ({ value }) => {
    return (
        <div className=' space-y-8 '>
            {/* image colume */}
            <div className=' h-96 '>
                <img src={value.image} alt={value.title} className='w-full h-auto block' />
            </div>
            <div className='flex gap-3 flex-col justify-center items-center'>
                <h1 className='text-[40px] font-semibold font-fredoka capitalize '>{value.title}</h1>
                <p className=' text-base text-[#6B6B6B] text-center w-[90%]'>{value.pera}</p>

            </div>
        </div>

    )
}
