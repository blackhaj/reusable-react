import React from 'react'
import styles from './AutoComplete.module.css'

export default function Suggestions(props) {
  
  const {
    activeSuggestion,
    itemsKey,
    query,
    wordSuggestions,
  } = props;
  
  // Create elements for rendering:
  let output;
  // if there is a query...
  if (query !== ""){
    // ...and the query returns results, render them
    if (wordSuggestions.length){
      output = <ul className={styles["suggestions-list"]}>
        { wordSuggestions.map((item, index) => {
            const nameOfClass = activeSuggestion === index ? styles["selected"] : "";
            return <li key={item[itemsKey]} className={`${styles["suggestion-item"]} ${nameOfClass}`}>{item[itemsKey]}</li>
          })}
      </ul>
      // else render no matches
    } else {
      output = <p className={styles["no-matches-warning"]} >No matches</p>
    }
    // If no query, render nothing
  } else {
    output = null;
  }

  return (
    <div className={styles["suggestions-container"]}>
      {output}
    </div>
  )
}
