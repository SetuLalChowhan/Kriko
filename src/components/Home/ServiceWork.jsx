import React from 'react'
import bannerImage from "../../assets/images/Vector-2.png"
import CommonHeader from '../common/CommonHeader'
import CommonPera from '../common/CommonPera'
import dog1 from '../../assets/images/Dog-1.png'
import dog2 from '../../assets/images/Dog-2.png'
import dog3 from '../../assets/images/Dog-3.png'
import dog4 from '../../assets/images/Dog-4.png'


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
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-screen mt-44 "
    >

      <div className='space-y-20 '>
        <div className='flex flex-col justify-center items-center container relative top-56'>
          <CommonHeader title={"How Our Service Works"} />
          <CommonPera pera={"Trusted dog daycare and boarding services designed to keep your pets safe, happy, and loved."} />
        </div>

        <div className='flex  gap-0   relative top-72 2xl:max-w-[1400px] xl:max-w lg:max-w-[800px] border-2 border-red-500  mx-auto  '>
          {/* {
            dogDetails.map((card,index)=>(
              <DogCard key={index} value = {card} position ={index+1}/>

            ))
          } */}

        </div>

      </div>

    </div>
  )
}
