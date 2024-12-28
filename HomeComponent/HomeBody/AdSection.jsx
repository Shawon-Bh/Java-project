import React from 'react'
import styles from './AdSection.module.css'


const AdSection = (props) => {
  return (
    <div className={styles.adSectionMain}>
      <div className={styles.adSection}>
        <img src={props.src} alt={props.name} width={180} height={180}/>
        <div>
          Name: {props.name}
        </div>
        <div>
          Price: {props.price} taka
        </div>
        <div >
          <button className={styles.buyButton} >Buy Now</button>
          <button className={styles.cartButton} >Add to Cart</button>
        </div>
        
      </div>      
    </div>

  )
}

export default AdSection
