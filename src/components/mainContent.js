import React from "react";
import styles from "../components/container.module.css"


export default function MainContent({ children })  {
  return (
    <div className={styles.mainContentStyle}>
        {children}
    </div>
  );
};

