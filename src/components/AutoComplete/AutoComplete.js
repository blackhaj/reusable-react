import React, { useState, useEffect } from 'react'
import Trie from './utils/trie';
import SearchContainer from './SearchContainer'
import styles from './AutoComplete.module.css'


/* 
** Autocomplete Input Component **
Uses a Trie data structure and sets to provide rapid autocomplete suggestions as the user types

Inputs:
callback: function to be called with selected suggestion
items: List of objects to use for suggestions
itemsKey: String for property field to use in suggestions

*/
export default function AutoComplete(props) {
  const {
    callback,
    items,
    itemsKey
  } = props;
  
  const [prefixTrie, setPrefixTrie] = useState(new Trie(items, itemsKey || null))

  useEffect(() => {
    setPrefixTrie(new Trie(items, itemsKey || null))
  }, [items, itemsKey])

  return (
    <div className={styles["autocomplete-container"]}>
      <SearchContainer getWords={prefixTrie.getWords} callback={callback} itemsKey={itemsKey} />
    </div>
  )
}
