export default class Trie {
  constructor(words = [], key = "value"){
    this.root = {ids: new Set()};
    this.key = key;
    this.store = {};
    this.nextID = 0;
    this.processMultipleItems(words);
    this.getWords = this.getWords.bind(this)
  }


  addToTree(word, id){
    let currentLevel = this.root;
    currentLevel["ids"].add(id);
    for (let char of word.toLowerCase()) {
      if (!currentLevel[char]){
        currentLevel[char] = {ids: new Set()};
      }
      currentLevel = currentLevel[char]
      currentLevel["ids"].add(id);
    }
  }

  
  processItem(item){
    const id = this.nextID++; // check this computes then increments
    this.store[id] = item
    const itemString = typeof item === 'object' ? item[this.key] : item;
    const words = itemString.split(" ");
    for (let word of words){
      this.addToTree(word, id)
    }
    this.addToTree(itemString, id)
  }

  processMultipleItems(items){
    for (let item of items){
      this.processItem(item)
    }
  }

  getWords(input){
    let currentLevel = this.root;
    let results = currentLevel["ids"];
    for (let char of input.toLowerCase()){
      if (currentLevel[char]) {
        currentLevel = currentLevel[char];
        results = currentLevel["ids"]
      } else {
        results = null;
        break
      }
    }
    return results ?  [...results].map((id) => this.store[id]) : [];
  }
}