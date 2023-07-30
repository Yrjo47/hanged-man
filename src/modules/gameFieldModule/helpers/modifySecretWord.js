export default function replaceMatchingLetters(word, hiddenWord, letter) {
    let modifiedWord = hiddenWord.split(' ')
    modifiedWord = word.split('').map((char, index) => {
      if (char === letter) {
        return letter;
      } else if (modifiedWord[index] !== '_'){
        // console.log(['MVI:', modifiedWord[index]])
        return modifiedWord[index];
      } else {
        return '_'
      }
    }).join(' ');
  
    return modifiedWord.slice(0, modifiedWord.length);
  }