import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "../Style.module.css";
import Button from "../../Button/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Services", href: "#" },
    { title: <Button title={"Contact"} />, href: "#" },
  ];

  return (
    <nav className={`${styles.navbar} shadow-md w-full fixed top-0 left-0`}>
      <div className="max-w-[1780px] mx-auto px-[16px]">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-white">MyBrand</div>

          <div className="hidden lg:flex space-x-8">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`${styles.navLink} text-white`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="lg:hidden text-white">
           <Button title={"Contact"} />
          </div>

          {/* <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button> */}
        </div>
      </div>

      {/* <div
        className={`${styles.mobileMenu} ${
          open ? styles.open : ""
        } md:hidden`}
      >
        {navLinks.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className={`${styles.mobileLink} block text-white py-3`}
            onClick={() => setOpen(false)}
          >
            {item.title}
          </a>
        ))}
      </div> */}
    </nav>
  );
};

export default Navbar;
