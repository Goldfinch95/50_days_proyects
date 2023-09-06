import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Expandible Cards</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.gallery}>
          <div className={styles.img_box}>
            <h3>Anivia</h3>
          </div>
          <div className={styles.img_box}>
            <h3>Ashe</h3>
          </div>
          <div className={styles.img_box}>
            <h3>Braum</h3>
          </div>
          <div className={styles.img_box}>
            <h3>Lissandra</h3>
          </div>
          <div className={styles.img_box}>
            <h3>Sejuani</h3>
          </div>
        </div>
      </main>
    </>
  );
}
