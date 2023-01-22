import React from 'react'
import ProductView from '../components/ProductView'
import HeroSection from '../components/HeroSection'

function Home() {
  return (
    <div className='flex flex-col px-8  '>
      <HeroSection/>
      <h2>Happy Shopping..</h2>
      <ProductView/>
    </div>
  )
}

export default Home