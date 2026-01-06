import React, { useState } from "react";
import Banner from "../assets/images/Banner.jpg";
import Logo from "../assets/images/Logo.avif";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const menuItems = [
    "About",
    "Products",
    "Plants",
    "Price",
    "Gallery",
    "Animation",
    "Specification",
    "Contact ",
  ];

  return (
    <section
      className="bg-cover bg-center w-full h-screen"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <header className="py-4">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center px-6 sm:px-10 md:px-20 lg:px-40">
          
          {/* Logo */}
          <figure>
            <img src={Logo} alt="Logo" className="w-20 h-auto" />
          </figure>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6 lg:gap-10">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white text-[15px] font-[var(--font-jost)] uppercase hover:text-green-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {/* Hamburger icon */}
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden bg-black bg-opacity-80">
            <ul className="flex flex-col items-center gap-6 py-6">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white text-[18px] font-[var(--font-jost)] uppercase hover:text-green-400 transition"
                    onClick={() => setIsOpen(false)} // Close menu on click
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4">
        <h1 className="text-white text-4xl md:text-6xl font-[var(--font-jost)] font-bold mb-4">
          Welcome to Our Company
        </h1>
        <p className="text-white text-lg md:text-2xl mb-6">
          We provide the best products for your business
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Header;
