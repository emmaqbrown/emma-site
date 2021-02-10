import React from 'react';
import styles from "../components/reload.module.css"



export default function Reload() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div  className={styles.button}>
      <button onClick={refreshPage}>again?</button>
    </div>
  );
}
