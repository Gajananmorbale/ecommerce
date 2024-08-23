import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';



const MainCarousel = () => {
    const items = mainCarouselData.map((item) => <img className='cursor-pointer'
role='presentation' src={item.image} alt=''></img>)


return(

    <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableButtonsControls
    />
)
    

}
export default MainCarousel;