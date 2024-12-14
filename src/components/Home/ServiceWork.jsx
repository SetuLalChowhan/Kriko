import React from 'react'
import bannerImage from "../../assets/images/Vector-2.png"
import CommonHeader from '../common/CommonHeader'
import CommonPera from '../common/CommonPera'
import dog1 from '../../assets/images/Dog-1.png'
import dog2 from '../../assets/images/Dog-2.png'
import dog3 from '../../assets/images/Dog-3.png'
import dog4 from '../../assets/images/Dog-4.png'
import DogCard from '../common/DogCard'


const dogDetails = [
  {
    image: dog1,
    step: "step 1",
    title: "Choose a Service"

  },
  {
    image: dog2,
    step: "step 2",
    title: "Book a Time"

  },
  {
    image: dog3,
    step: "step 3",
    title: "Drop off your Dog"

  },
  {
    image: dog4,
    step: "step 4",
    title: "Pick Up Happy Pets"

  },
]

export const ServiceWork = () => {
  return (
    <div className=' mt-36 mb-40 relative'>

      <div className='  flex flex-col justify-center items-center text-center'>
        <CommonHeader title={"How Our Service Works"} />
        <CommonPera pera={"Trusted dog daycare and boarding services designed to keep your pets safe, happy, and loved."} />
      </div>

      <div className='flex justify-between 2xl:max-w-[1200px] xl:max-w-[900px] lg:max-w-[600px] md:max-w-[500px] max-w-[300px] sm:max-w-[450px]   mx-auto mt-[10%]'>

        {
          dogDetails.map((item, index) => (
            <DogCard key={index} value={item} pos={index + 1}>

            </DogCard>
          ))
        }

      </div>

      <img src={bannerImage} alt='banner-image' className=' absolute w-full h-full block object-fill top-[-20%] -z-10 ' />

    </div>
  )

}
