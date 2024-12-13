import React from 'react'


const DogCard = ({ value, pos }) => {
    return (
        <div className={` ${pos == 2 && `mt-[6%]`} ${pos == 4 && `mt-[10%]`} aspect-square w-[21%] h-[21%]   rounded-full bg-[#abc0ea] flex flex-col justify-center items-center text-center relative md:p-[3%] px-[5px] lg:gap-[10px]  custom-before`} >
            <img src={value.image} alt='dog' className='w-[40%] absolute -top-[20%] left-[30%] ' />

            <p className='md:text-base md:text-[14px] text-[10px]'> {value.step}</p>

            <p className='font-fredoka lg:font-[600] font-[300] capitalize text-[10px] xs:leading-3 lg:leading-6 xl:leading-9 md:text-[14px]  xl:text-[24px] 2xl:text-[32px]'>{value.title}</p>


        </div>
    )
}

export default DogCard