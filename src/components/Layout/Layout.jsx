import React from "react";
import BottomNav from "../NavigationBars/BottomBar/BottomNav";
import Navbar from "../NavigationBars/Navbar.jsx/Navbar";
import styles from "./Layout.module.css";
import Particles from "../Particles/Particles";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.outerWrapper}>
        <div className={styles.contentSection}>{children}</div>
      </div>
      <BottomNav />
      <div className={styles.dotGrid}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={150}
          particleSpread={18}
          speed={0.02}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </div>
  );
};

export default Layout;
