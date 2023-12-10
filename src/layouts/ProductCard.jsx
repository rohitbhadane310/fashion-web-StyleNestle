import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ index, img, name, price, discount }) => {
  return (
    <div
      className="h-[370px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
      key={index}
    >
      <div>
        <img src={img} alt="img" className=" h-56 rounded-t-xl w-full" />
      </div>
      <div className=" flex flex-col justify-center items-center">
        <h1 className=" font-semibold text-xl pt-4">{name}</h1>
        <div className=" flex gap-10 pt-2">
          <h2 className=" font-medium text-lg ">{price}</h2>
          <h2 className=" font-medium text-DarkColor">{discount}</h2>
        </div>

        <div className=" flex gap-8 pt-4">
          <button className=" bg-ExtraDarkColor text-white px-4 py-2 font-medium">
            Add to Cart
          </button>
          <div className=" flex gap-1 items-center">
            <h2>5.0</h2>
            <FaStar className=" text-yellow-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
