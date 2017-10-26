//Solution 1:

function insertDash(num) {
   let numString = num.toString()
   let numArray = numString.split("");
   numArray.forEach(if ((num[i]%2 === 1) && if (num[i+1]%2 === 1)) {
     num[i] += '-';
   }) ;
   let numString2 = numArray.toString()
   let numString3 = numString2.replace(/,/g, '' );
   return numString3;
}
