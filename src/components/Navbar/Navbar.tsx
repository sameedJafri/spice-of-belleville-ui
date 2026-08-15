import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "@/assets/logo.png";
import cart from "@/assets/cart.webp";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Image
        className={styles.logo}
        src={logo}
        alt="logo"
        width={100}
        height={100}
        priority
      />
      <ul className={styles.navLinks}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.navRight}>
        {/* add search image with next/image and link to search page */}
        <div className={styles.cart}>
          <Image
            src={cart}
            alt="cart"
            width={20}
            height={20}
          />
          <div className={styles.dot}></div>
        </div>
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;