import React from "react";

const Home = (props) => {
  //how to check action data and state data through reducer and action  via props
  // console.log("action and reducer data  ", props);
  let cats = [
    {
      id: "1",
      name: "cat 1",
      description: "Cat description goes here",
      price: "12.99",
      src:
        "https://raw.githubusercontent.com/ivanmmarkovic/misc/master/images/cats-images-for-project/adorable-animal-blur-cat-617278.jpg",
      count: "3",
    },
    {
      id: "2",
      name: "cat 2",
      description: "Cat description goes here",
      price: "22.99",
      src:
        "https://raw.githubusercontent.com/ivanmmarkovic/misc/master/images/cats-images-for-project/animal-cat-face-close-up-feline-416160.jpg",
      count: "2",
    },
    {
      id: "3",
      name: "cat 3",
      description: "Cat description goes here",
      price: "17.99",
      src:
        "https://raw.githubusercontent.com/ivanmmarkovic/misc/master/images/cats-images-for-project/adorable-animal-cat-302280.jpg",
      count: "5",
    },
    {
      id: "4",
      name: "cat 4",
      description: "Cat description goes here",
      price: "27.99",
      src:
        "https://raw.githubusercontent.com/ivanmmarkovic/misc/master/images/cats-images-for-project/adorable-animal-baby-blur-177809.jpg",
      count: "3",
    },
  ];
  //items add to cart
  const handleButtonOnSubmit = () => {
    //how to pass dynamic values in the action
    const datails = props.addToCartHandler({ price: 20000, name: "I-Phone" });
    // console.log("datails", datails);
  };

  //items remove to cart
  const handleRemoveToCartButton = () => {
    props.RemoveToCartHandler();
    if(!props.data.length && props.data.length===0){
      alert("YOU CART IS EMPTY");
    }
  };

  return (
    <div className='main'>
      <h1>Home Component</h1>
      {cats.map((cats) => (
        <div className="cart-wrapper">
          <div>
            <div className="img-wrapper item">
              <img src={cats.src} alt="cats" />
            </div>
            <div className="text-wrapper item">
              <span>Price : {cats.price}</span>
              <br />
              <span>Product Name: {cats.name}</span>
            </div>
            <div className="btn-wrapper item">
              <button onClick={handleButtonOnSubmit}>Add To Cart</button>
            </div>
            <div className="btn-wrapper-remove item">
              <button onClick={handleRemoveToCartButton}>Remove To Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;
