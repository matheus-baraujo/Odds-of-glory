import React from 'react'
import styles from "./styles.module.css";


var randoms: number[] = [];

for (let index = 0; index < 40; index++) {
  let aux = Math.random() * 20;
  randoms.push(aux);
}


const AnimatedBackground = () => {
  return (
    <div className={styles.container}>
        <div className={styles.bubbles}>

            {
              randoms.map((item) => {
                return(
                  <span style={{ "--i": item } as React.CSSProperties}></span>
                )
              })
            }
        </div>
    </div>
  )
}

export default AnimatedBackground