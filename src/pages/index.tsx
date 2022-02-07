import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br /> the <span>React</span> world.
          </h1>
          <p>
            Get access to all publications <br />
            <span>for $9.90</span>
          </p>
          <SubscribeButton />
        </section>

        <Image
          src="/images/avatar.svg"
          alt="Menina mexendo no computador"
          width={334}
          height={520}
        />
      </main>
    </>
  );
}