"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "@/assets/logo.png";
import cart from "@/assets/cart.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <header>
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
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? styles.active : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.navRight}>
          <div className={styles.cart}>
            <Image
              src={cart}
              alt="cart"
              width={30}
              height={30}
            />
            <div className={styles.dot}></div>
          </div>
          <button>Sign In</button>
        </div>
      </nav>
    </header>

  );
};

export default Navbar;