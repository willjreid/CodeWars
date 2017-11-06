//Solution 1
function solution(str){
  let splitStr = str.split('');
  let reverseAry = splitStr.reverse();
  let joinAry = reverseAry.join('')
  return joinAry;
}

//Solution 2
function solution(str){
  let revString = "";
  for (var i = str.length -1; i >= 0; i--) {
    revString += str[i]
  }
  return revString;
}
