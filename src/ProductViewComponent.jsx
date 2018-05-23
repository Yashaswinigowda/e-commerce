import React from 'react';
import './App.css';

const ProductViewComponent = ({ product }) =>{
 /* Should attach the icon in the rating tag  */
  return(
    <div className='floatDiv' id='productDivWidth'>
      <img src={product.image} alt="boohoo" className="img-responsive" width="200" height="200"/>
      <p> {product.title} </p>
      <p> {product.rating} </p>
      <div className='floatDiv'>
        <span className='floatDiv'> rs {product.price.final_price}  {product.discount ? <span className='textDecor'> {product.price.mrp} {product.discount} off</span>: null} </span>
      </div>
    </div>
  );
}


const DiscountRateView = (discount, price) => {
  const discount_rate = discount, final_price = price;
  let actual_price;

  actual_price = (final_price * 100) / discount_rate;

  return (
    <p>
      <b> rs {final_price} </b>
      <span> rs {actual_price} </span>
      <span> {discount_rate} %off </span>
    </p>
    );
}

export default ProductViewComponent;
