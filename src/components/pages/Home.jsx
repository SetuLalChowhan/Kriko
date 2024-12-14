import React from 'react'
import Banner from '../Home/Banner'
import { ServiceSection } from '../Home/ServiceSection'
import { ServiceWork } from '../Home/ServiceWork'
import Slider from '../Home/Slider'
import TrushUs from '../Home/TrushUs'
import PetBanner from '../Home/PetBanner'

export const Home = () => {
  return (
    <div>

        <Banner/>
        <ServiceSection/>
        <ServiceWork/>
        <Slider/>
        <TrushUs/>
        <PetBanner/>
    </div>
  )
}
