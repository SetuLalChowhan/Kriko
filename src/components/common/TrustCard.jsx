import React from 'react'

const TrustCard = ({ value }) => {
    return (
        <div className='flex flex-col gap-[32px] rounded-lg bg-[#EDF1FA] justify-center items-center px-[16px] py-[40px] hover:bg-[#ABC0EA] group transition-all duration-300  '>
            <div className='w-[80px] h-[80px] py-[8px] px-[13px] flex justify-center items-center bg-[#C6D5F1] rounded-full transition-all duration-300 group-hover:bg-[#EDF1FA] '>
                <img src={value.svg} />
            </div>
            <div className='flex flex-col justify-center items-center gap-[16px] text-center  '>
                <p className='font-fredoka font-[600] text-[32px] leading-10 transition-all duration-300 group-hover:text-white'>{value.title}</p>
                <p className='text-[24px] font-poppins transition-all duration-300 group-hover:text-white'>{value.pera}</p>

            </div>

        </div>
    )
}

export default TrustCard