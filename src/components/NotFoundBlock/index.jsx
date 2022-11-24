import React from 'react'
import styles from "./NotFoundBlock.module.scss"

function NotFoundBlock() {
  return (
    <div className={styles.root}>
        <h1>
        <span> 😕</span>
            <br/>
          
            Ничего не найдено
        </h1>
        <p className={styles.description}> К сожланию данная страница отсутсвует в нашем интернет-магазине</p>
    </div>
  )
}

export default NotFoundBlock