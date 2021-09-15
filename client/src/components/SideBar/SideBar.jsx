import React from "react";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <h1  className={styles.title}>From Side Bar</h1>
      </aside>
    </div>
  );
};

export default SideBar;
