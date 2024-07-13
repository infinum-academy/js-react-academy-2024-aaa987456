"use client";

import styles from "./page.module.css";
import { useRouter } from "next/router";

const router = useRouter;

export default function Home() {
  return <main className={styles.main}></main>;
}
