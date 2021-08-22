import React from 'react'
import styles from "./Card.module.scss"

const Card = (props) => {

  const { beerName, beerImage, beerDescription, beerABV, beerPH, beerID, beerDate } = props


  return (

       <div key={beerID} className={styles.card} >    
      
          <div className={styles.cardTitle}>
            <h3>{beerName}</h3>
            <p>Brewed: {beerDate}</p>
            <p>ABV: {beerABV}</p>
            <p>pH: {beerPH}</p>
        </div>
        <div className={styles.cardDetail}>
          <img src={beerImage} alt="beer" />
          <p>{beerDescription}</p>
        </div>
        
      </div>
            
    

    

  
  )
}

export default Card
