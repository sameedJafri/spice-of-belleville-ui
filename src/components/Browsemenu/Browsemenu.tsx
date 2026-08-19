import React from "react";
import styles from "./Browsemenu.module.css";

const Browsemenu: React.FC = () => {

    return (
        <div className={styles.browseMenu}>
            <h2>Browse Menu Categories</h2>
            <div className={styles.browseMenuBorder}></div>
        </div>
    );
};

export default Browsemenu;