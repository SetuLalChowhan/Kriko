import React from 'react'
import CommonHeader from '../common/CommonHeader'
import CommonPera from '../common/CommonPera'
import CardSlider from './CardSlider'

const Slider = () => {
  return (
    <div className=' mt-20 mb-20'>

        <div>
            {/* font section */}
            <div className='container flex justify-center flex-col gap-6 items-center text-center'>
                <CommonHeader title={"What Our Happy Customers Say"} />
                <CommonPera pera={"Trusted dog daycare and boarding services designed to keep your pets safe, happy, and loved."} />

            </div>

            <CardSlider/>
        </div>

    </div>
  )
}

export default Slider