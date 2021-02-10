import React from 'react';
import styles from "../components/reload.module.css"



export default function Reload() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div>
      <button onClick={refreshPage} className={styles.button}>again?</button>
    </div>
  );
}

