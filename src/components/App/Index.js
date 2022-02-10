import React from "react";

import CurrentTime from "../CurrentTime/Index";
import NavBar from "../NavBar/Index";
import styles from "./Styles.module.css"

export default function App() {
  return (
    <div className={styles.container}>
      <NavBar className={styles.navBar}/>
      <CurrentTime className={styles.currentTime} />
    </div>
  );
}
