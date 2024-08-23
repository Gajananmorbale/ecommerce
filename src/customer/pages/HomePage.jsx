import React from 'react'
import MainCarousel from '../components/HomeCarousel/MainCarousel'
import HoemSectionCerousel from '../components/HomeSectionCerousel/HoemSectionCerousel'


const HomePage=()=> {
  return (
    <div>
      <MainCarousel/>

      <div>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HoemSectionCerousel/>
            <HoemSectionCerousel/>
            
        </div>
      </div>
    </div>
  )
}

export default HomePage;
