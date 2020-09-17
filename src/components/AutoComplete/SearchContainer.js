import React, { useState } from 'react'
import Input from './Input'
import Suggestions from './Suggestions'
import styles from './AutoComplete.module.css'

export default function SearchContainer(props) {
  const {
    callback,
    getWords,
    itemsKey,
  } = props;

  const [wordSuggestions, setWordsSuggestions] = useState([]);
  const [query, setQuery] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  
  return (
    <div className={styles["search-container"]}>
      <Input 
        activeSuggestion={activeSuggestion}
        setActiveSuggestion={setActiveSuggestion}
        callback={callback} 
        filterSuggestions={(query) => setWordsSuggestions(getWords(query))} 
        query={query}
        setQuery={setQuery}
        wordSuggestions={wordSuggestions}
      />
      <Suggestions 
        activeSuggestion={activeSuggestion}
        itemsKey={itemsKey} 
        query={query}
        wordSuggestions={wordSuggestions}
      />
    </div>
  )
}
