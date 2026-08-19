"use client";

import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {

    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <h2>What are you craving?</h2>
                <div className={styles.headerSearchbar}>
                    <input type="text" placeholder="Biryani, Karahi, Kabobs, BBQ, Samosas..." />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;