// import React from "react";
// import "../style/home.css";
// export default function Home() {
//   let cats = [
//     {
//       id: "1",
//       name: "cat 1",
//       description: "Cat description goes here",
//       price: "12.99",
//       src:
//         "https://raw.githubusercontent.com/ivanmmarkovic/misc/master/images/cats-images-for-project/adorable-animal-blur-cat-617278.jpg",
//       count: "3",
//     },
//     {
//       id: "2",
//       name: "cat 2",
//       description: "Cat description goes here",
//       price: "22.99",
//       src:
//         "https://raw.githubusercontent.com/ivanmmarkovic/misc/master/images/cats-images-for-project/animal-cat-face-close-up-feline-416160.jpg",
//       count: "2",
//     },
//     {
//       id: "3",
//       name: "cat 3",
//       description: "Cat description goes here",
//       price: "17.99",
//       src:
//         "https://raw.githubusercontent.com/ivanmmarkovic/misc/master/images/cats-images-for-project/adorable-animal-cat-302280.jpg",
//       count: "5",
//     },
//     {
//       id: "4",
//       name: "cat 4",
//       description: "Cat description goes here",
//       price: "27.99",
//       src:
//         "https://raw.githubusercontent.com/ivanmmarkovic/misc/master/images/cats-images-for-project/adorable-animal-baby-blur-177809.jpg",
//       count: "3",
//     },
//   ];
//   return (
//     <div>
//       {/* <img src={cats.src} /> */}
//       <div className="container">
//         <nav>
//           <span>
//             <i>add_shopping_cart</i>
//           </span>
//           <span>
//             <i className="material-icons">chat_bubble</i>
//           </span>
//         </nav>
//         {cats.map(cats =>
//           <div>{cats.name}</div>
//         )}
//       </div>
//     </div>
//   );
// }

import React from "react";

function Home(props) {
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://raw.githubusercontent.com/ivanmmarkovic/misc/master/images/cats-images-for-project/adorable-animal-blur-cat-617278.jpg"
            alt="cats"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <br/>
          <span>Price: $2000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
