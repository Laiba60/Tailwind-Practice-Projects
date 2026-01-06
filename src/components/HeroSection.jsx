import React from "react";
import camel from "../assets/images/camel.webp";

const HeroSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center gap-8 px-6 sm:px-10 lg:px-20">
        
        {/* Hero Image */}
        <figure className="flex justify-center md:justify-start">
          <img src={camel} alt="Hero Image" className="w-full h-auto max-w-md" />
        </figure>

        {/* Hero Text */}
        <article className="flex flex-col justify-center">
          <h2 className="font-(--font-jost) font-weight-700 text-3xl md:text-4xl text-gray-900">
  Delivering Excellence in Every Product
</h2>


          <p className="font-(--font-jost) text-base md:text-lg mt-4 text-gray-700 text-justify">
            At Camel Industries, we are committed to delivering excellence in every product we create. Our dedication to quality, innovation, and customer satisfaction sets us apart in the industry. From the initial design phase to the final delivery, we ensure that each product meets the highest standards of craftsmanship and performance. Trust Camel Industries to provide you with products that not only meet but exceed your expectations.
          </p>

          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition w-fit">
            Book Now
          </button>
        </article>

      </div>
    </section>
  );
};

export default HeroSection;
