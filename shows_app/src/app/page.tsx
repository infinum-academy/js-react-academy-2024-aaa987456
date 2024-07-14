"use client";

import styles from "./page.module.css";
import { useRedirect } from "../hooks/useRedirect";

export default function Home() {
  useRedirect("/all-shows", true);
  return <main className={styles.main}></main>;
}
