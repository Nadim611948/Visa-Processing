import React from 'react'
import Banner from '../../components/Banner'
import About from '../../components/About'
import Services from '../../components/OurServices'
import Testimonials from '../../components/Testimonials'
import WhyChooseUs from '../../components/WhyChoosUs'
import HowItWorks from '../../components/HowItWorks'
import Achivements from '../../components/Achivements'

const Home = () => {
  return (
    <div className='min-h-screen'>
        <Banner/>
        <About/>
        <Services/>
        <HowItWorks/>
        <Achivements/>
        <WhyChooseUs/>
        <Testimonials/>
    </div>
  )
}

export default Home