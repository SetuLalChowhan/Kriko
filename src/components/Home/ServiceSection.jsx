import React from 'react'
import CommonHeader from '../common/CommonHeader'
import CommonPera from '../common/CommonPera'
import s_card1 from "../../assets/images/service-card-1.png"
import s_card2 from "../../assets/images/service-card-2.png"
import { ServiceCard } from '../common/ServiceCard'

const serviceData = [
    {
        id: 1,
        image: s_card1,
        title: "Dog Daycare",
        pera: "Fun-filled days with playtime and activities to keep your pet engaged.",
    },
    {
        id: 2,
        image: s_card2,
        title: "Dog Boarding",
        pera: "Overnight stays in a cozy environment where your pet feels at home.",
    },

]

export const ServiceSection = () => {
    return (
        <div className=' mt-12 mb-80 hidden  '>

            <div className=' container space-y-20'>

                {/* Font section */}

                <div className='flex flex-col justify-center items-center text-center gap-4 '>
                    <CommonHeader title={"Our Services at a Glance"} />
                    <CommonPera pera={"Trusted dog daycare and boarding services designed to keep your pets safe, happy, and loved."} />
                </div>
                {/* image section */}
                <div className='flex gap-[250px] '>

                    {serviceData.map((card, index) => (

                        <ServiceCard key={index} value={card} />


                    ))}

                </div>

            </div>

        </div>
    )
}