import React from 'react'
import Banner from '../../components/Banner'
import About from '../../components/About'
import Services from '../../components/OurServices'

const Home = () => {
  return (
    <div className='min-h-screen'>
        <Banner/>
        <About/>
        <Services/>
    </div>
  )
}

export default Home