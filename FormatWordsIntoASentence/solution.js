function formatWords(words){
  if (!words[0]) {
    return "";
  } else {
    let joinWords = words.join(', ');
    let index = joinWords.lastIndexOf(',');
    joinWords.replaceAt(index, ', ', ' and ');
    return joinWords;
  };
}
