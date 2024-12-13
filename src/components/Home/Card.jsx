import React from 'react'

const Card = ({ value }) => {
    return (
        <div className=' py-[26px] px-[70px] flex-col items-start shadow-lg space-y-2'>

            {/* avatar info section */}

            <div className='flex gap-4 '>
                <div className='w-[50px]'>
                    <img src={value.image} className=' w-full object-cover' />
                </div>

                <div className=' space-y-1'>
                    <p className='font-medium text-base'>{value.name}</p>
                    <p className='text-[#766e70] '>{value.date}</p>
                    <p className='text-[#766e70] font-poppins text-[14px] p-1 bg-[#fbf7f8]'>{value.verified ? "VERIFIED STAY" : ""}</p>
                </div>
            </div>

            <p className='text-[14px] font-poppins'>{value.review}</p>

        </div>
    )
}

export default Card