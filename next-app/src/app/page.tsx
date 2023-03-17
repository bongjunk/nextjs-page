import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const title = "next 13";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>Nextjs.13 page</div>
      </main>
    </>
  );
}
