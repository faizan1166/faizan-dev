import React, { useState } from "react";
import { FiHome, FiUser } from "react-icons/fi";
import { MdFace6 } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdContacts } from "react-icons/md";
import styles from "../Style.module.css";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const items = [
    { id: "home", path: "/", label: "Home", icon: FiHome },
    { id: "about", path: "/about", label: "About", icon: MdFace6 },
    { id: "skills", label: "Skills", icon: GiBrain },
    { id: "experience", label: "Experience", icon: FaRegStar },
    { id: "contactUs", label: "Contact Us", icon: MdContacts },
  ];

  return (
    <nav className={`${styles.bottomNav} lg:!hidden`}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            className={`${styles.navItem} ${
              location.pathname === item?.path ? styles.active : ""
            }`}
            onClick={() => navigate(item?.path)}
          >
            <span className={styles.iconWrapper}>
              <Icon className={styles.icon} />
            </span>
            <span className={styles.label}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
