import React from 'react';
import ProductItem from './productItem'
import Slider from 'react-slick';
import '../../../scss/ListItem.scss'

const ListItem = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <>
      <div className = "listItem">
        <Slider {...settings}>
          <div>
            <ProductItem/>
          </div>
          <div>
            <ProductItem/>
          </div>
          <div>
            <ProductItem/>
          </div>
          <div>
            <ProductItem/>
          </div>
          <div>
            <ProductItem/>
          </div>
          <div>
            <ProductItem/>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default ListItem;
