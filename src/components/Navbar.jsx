import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import { useAppSelector } from "../redux/hooks";

const Navbar = ({ setShowCart }) => {

  // functions for handling menu section in react

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };


  // redux logic 
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <header className=" fixed w-full z-10">
      <section>
        {/* desktop menu section  */}
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-PrimaryColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div>
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className=" text-2xl font-semibold text-ExtraDarkColor cursor-pointer">
                StyleNestle
              </h1>
            </Link>
          </div>

          {/* nav elements */}
          <nav className=" hidden lg:flex flex-row items-center text-lg font-semibold gap-8 text-ExtraDarkColor">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="shop"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
            >
              Shop
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
            >
              Features
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
            >
              Products
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
            >
              Review
            </Link>
          </nav>

          {/* nav icons */}
          <div className="flex items-center gap-5">
            <FaUser size={25} className=" text-DarkColor" />
            <div className=" text-DarkColor relative">
              <FaShoppingCart
                size={25}
                className=" cursor-pointer"
                onClick={() => setShowCart(true)}
              />
              <div className=" absolute top-[-15px] right-[-10px] bg-red-600 w-[22px] h-[20px] rounded-full text-white text-sm grid place-items-center">
                {cartCount}
              </div>
            </div>
          </div>

          {/* menu icon */}
          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <RiMenu2Line size={28} onClick={handleChange} />
            )}
          </div>
        </div>

        {/* mobile menu section */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-SecondaryColor text-black left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-DarkColor transition duration-300 ease-in-out cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="shop"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-DarkColor transition duration-300 ease-in-out cursor-pointer"
            onClick={closeMenu}
          >
            Shop
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-DarkColor transition duration-300 ease-in-out cursor-pointer"
            onClick={closeMenu}
          >
            Features
          </Link>
          <Link
            to="products"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-black transition duration-300 ease-in-out cursor-pointer"
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-DarkColor transition duration-300 ease-in-out cursor-pointer"
            onClick={closeMenu}
          >
            Review
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
