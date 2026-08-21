import React from "react";
import styles from "./Browsemenu.module.css";
import Image from "next/image";
import { categoryImages } from "@/assets/categories/assets";

const Browsemenu: React.FC = () => {

    const categories = [
        { key: "appitizers", image: categoryImages.appitizers },
        { key: "platters", image: categoryImages.platters },
        { key: "Kabaobs", image: categoryImages.kabobs },
        { key: "Rice", image: categoryImages.rice },
        { key: "BBQ", image: categoryImages.bbq },
        { key: "Grains", image: categoryImages.grains },
        { key: "Curry", image: categoryImages.curry },
        { key: "Soups", image: categoryImages.soups },
        { key: "Desserts", image: categoryImages.deserts },

    ];

    const categoryItems = categories.map((category) => (
        <div key={category.key} className={styles.categoryItem}>
            <Image src={category.image} alt={category.key} width={300} height={300} />
            <h3>{category.key}</h3>
        </div>
    ));


    return (
        <div className={styles.browseMenu}>
            <div className={styles.browseMenuHeader}>
                <h2>Browse Menu Categories</h2>
                <div className={styles.browseMenuBorder}></div>
            </div>
            <div className={styles.browseMenuItemList}>
                {categoryItems}
            </div>
            <div className={styles.browseMenuFooter}>
                <button>View Full Menu</button>
            </div>
        </div >
    );
};

export default Browsemenu;