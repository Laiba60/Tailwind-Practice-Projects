import React from 'react'
import Banner from '../assets/images/Banner.jpg'
import Logo from '../assets/images/Logo.avif'

const Header = () => {
  const menuItems = [
    "About",
    "Products",
    "Plants",
    "Price",
    "Gallery",
    "Animation",
    "Specification",
    "Contact Us"
  ]

  return (
    <section
      className="bg-cover bg-center w-full h-screen"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <header className="py-4">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center px-40">
          
          {/* Logo */}
          <figure>
            <img src={Logo} alt="Logo" className="w-15 h-auto" />

          </figure>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-8">
              {menuItems.map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white text-[15px] font-[var(--font-jost)] hover:text-green-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </header>
    </section>
  )
}

export default Header
