import React from "react";
import Logo from "../assets/images/Logo.avif"; 

const FooterSection = () => {
  const menuItems = [
    "About",
    "Products",
    "Plants",
    "Price",
    "Gallery",
    "Animation",
    "Specification",
    "Contact",
  ];

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-20">
        
        <div className="grid md:grid-cols-3 gap-8">
          
          
          <div className="flex flex-col gap-4">
            <img src={Logo} alt="Logo" className="w-28 h-auto" />
            <p className="text-gray-400 text-sm">
              Camel Industries is committed to delivering excellence in every product we create. Quality and customer satisfaction are our top priorities.
            </p>
          </div>

        
          <div className="flex flex-col gap-2">
            <h3 className="font-(--font-jost) font-weight-700 text-lg mb-2">Quick Links</h3>
            <ul className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="flex flex-col gap-2">
            <h3 className="font-(--font-jost) font-weight-700 text-lg mb-2">Contact Us</h3>
            <p className="text-gray-400 text-sm">123 Industrial Area, Lahore, Pakistan</p>
            <p className="text-gray-400 text-sm">Phone: +92 300 1234567</p>
            <p className="text-gray-400 text-sm">Email: info@camelindustries.com</p>
          </div>
        </div>

       
        <div className="border-t border-gray-700 mt-8"></div>

       
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2026 Camel Industries. All rights reserved.</p>

       
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-400 transition">Facebook</a>
            <a href="#" className="hover:text-green-400 transition">Twitter</a>
            <a href="#" className="hover:text-green-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-green-400 transition">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
