//Solution 1:

function fixTheMeerkat(arr) {
  return [arr[2], arr[1], arr[0]];

}


//Solution2:

function fixTheMeerkat(arr) {
  arr.reverse();
  return arr;
}
