import React from 'react'
import CommonHeader from '../common/CommonHeader'
import CommonPera from '../common/CommonPera'
import TrustCard from '../common/TrustCard'
import trust1 from '../../assets/images/trust-1.png'
import trust2 from '../../assets/images/trust-2.png'
import trust3 from '../../assets/images/trust-3.png'

const TrushUs = () => {
    const trustdetails =[
        {
            id:1,
            svg:trust1,
            title:"Safe & Comfortable Environment",
            pera:"We prioritize your pet’s well-being."

        },
        {
            id:2,
            svg:trust2,
            title:"Real-Time Updates",
            pera:"Get pictures and messages about your pet’s day."

        },
        {
            id:3,
            svg:trust3,
            title:"Seamless Booking",
            pera:"Easy online scheduling and secure payment."

        },
    ]

 
    return (
        <div className=' mb-20 mt-20'>

            <div className='container'>

                <div className=' space-y-8'>
                    <div className=' flex justify-center flex-col gap-6 items-center text-center md:max-w-[1000px] mx-auto w-full'>
                        <CommonHeader title={"Why Pet Parents Trust Us"} />
                        <CommonPera pera={"Trusted dog daycare and boarding services designed to keep your pets safe, happy, and loved."} />

                    </div>

                    <div className=' mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px] '>
                        {
                            trustdetails.map((card,index)=>(
                                <TrustCard key={index} value={card} />

                            ))
                        }



                    </div>

                </div>

            </div>
            s
        </div>
    )
}

export default TrushUs