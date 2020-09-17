import React from 'react'
import styles from './AutoComplete.module.css'

export default function Input(props) {
  const {
    activeSuggestion, 
    setActiveSuggestion,
    callback, 
    filterSuggestions,
    query, 
    setQuery, 
    wordSuggestions, 
  } = props;

  // Event to handle keyboard scrolling
  const onKeyDown = (event) => {
    // If key is Enter, invoked callback with selected suggestion
    if (event.keyCode === 13) {
      let item = wordSuggestions[activeSuggestion]
      if (item) callback(item)
      setQuery("")
      // If key is UP, move selection up
    } else if (event.keyCode === 38) { 
      event.preventDefault()
      const newActiveSuggestion = activeSuggestion - 1 >= 0 ? activeSuggestion - 1 : 0
      setActiveSuggestion(newActiveSuggestion)
      // If key is DOWN, move selection down
    } else if (event.keyCode === 40) { 
      const newActiveSuggestion = activeSuggestion + 1 < wordSuggestions.length ? activeSuggestion + 1 : wordSuggestions.length - 1;
      setActiveSuggestion(newActiveSuggestion)
      // Otherwise, reset selection as query has changed
    } else {
      setActiveSuggestion(0)
    }
  }

  return (
    <>
      <input 
        className={styles["search-input"]}
        type="text"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
          filterSuggestions(event.target.value)
        }}
        onKeyDown={onKeyDown}
      />
    </>
  )
}
