import React, { useState } from "react";
import {
  FiHome,
  FiSearch,
  FiPlusCircle,
  FiHeart,
  FiUser,
} from "react-icons/fi";
import styles from "../Style.module.css";

const BottomNav = () => {
  const [active, setActive] = useState("home");

  const items = [
    { id: "home", label: "Home", icon: FiHome },
    { id: "search", label: "Search", icon: FiSearch },
    { id: "add", label: "Add", icon: FiPlusCircle },
    { id: "favorites", label: "Likes", icon: FiHeart },
    { id: "profile", label: "Profile", icon: FiUser },
  ];

  return (
    <nav className={`${styles.bottomNav} lg:!hidden`}>
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = item.id === active;

        return (
          <button
            key={item.id}
            className={`${styles.navItem} ${isActive ? styles.active : ""}`}
            onClick={() => setActive(item.id)}
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
