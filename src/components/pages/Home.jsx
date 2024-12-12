import React from 'react'
import Banner from '../Home/Banner'
import { ServiceSection } from '../Home/ServiceSection'
import { ServiceWork } from '../Home/ServiceWork'
import Slider from '../Home/Slider'

export const Home = () => {
  return (
    <div>

        <Banner/>
        <ServiceSection/>
        {/* <ServiceWork/> */}

        <Slider/>
    </div>
  )
}
