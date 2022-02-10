import React from "react";
import SearchBar from "../SearchBar/Index";
import styles from "./Styles.module.css"

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <h1>Weather Informer</h1>
      <SearchBar />
    </nav>
  );
}
