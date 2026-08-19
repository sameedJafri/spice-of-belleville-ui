import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Browsemenu from "@/components/Browsemenu/Browsemenu";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Browsemenu />
      </main>
    </>
  );
}
