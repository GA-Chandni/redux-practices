import React from "react";
function Header(props) {
  // console.log('haeder-props',props.data);

  //store the data
  const data = props.data;
  return (
    <div className='card-icon'>
      <div className="add-to-cart">
          {/* add item to cart */}
        <span  className="card-icon-span">{data.length}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="cart" />
      </div>
      
    </div>
  );
}

export default Header;
