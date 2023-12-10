import React from "react";
import ProductCard from "../layouts/ProductCard";

const Features = () => {
  const data = [
    {
      id: 6,
      img: "/src/assets/img/product7.jpg",
      name: "FrostFire Outerlayers",
      price: "398.00",
      discount: "24% Off",
    },
    {
      id: 7,
      img: "/src/assets/img/product8.jpg",
      name: "DaintyDoll Dresses",
      price: "258.00",
      discount: "40% Off",
    },
    {
      id: 8,
      img: "/src/assets/img/product9.jpg",
      name: "TrendTraverse Bag",
      price: "104.00",
      discount: "35% Off",
    },
    {
      id: 9,
      img: "/src/assets/img/product10.jpg",
      name: "Fitness Footgear",
      price: "299.00",
      discount: "40% Off",
    },
    {
      id: 10,
      img: "/src/assets/img/product11.jpg",
      name: "UrbanBelle Hoodies",
      price: "129.00",
      discount: "28% Off",
    },
    {
      id: 11,
      img: "/src/assets/img/product12.jpg",
      name: "Elite Handbags",
      price: "189.00",
      discount: "30% Off",
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col justify-center pt-24">
      {/* heading section */}
      <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
        Exclusive Products
      </h1>

      {/* card section */}
      <div className=" flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <div className=" md:w-2/4 lg:w-1/4">
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
