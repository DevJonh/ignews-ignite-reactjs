/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { SignInButton } from "../SignInButton";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/images/logo.svg"
          alt="Logo com o nome ig.news"
          width={108}
          height={30}
        />

        <nav>
          <a href="" className={styles.active}>
            Home
          </a>
          <a href="">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
};
