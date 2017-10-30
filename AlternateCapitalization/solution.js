
function capitalize(s) {
  chrEven = s.split('');
  chrOdd = s.split('');
  for (j = 0; j < chrEven.length; j++) {
    if (j % 2 === 0) {
      chrEven[j] = chrEven[j].toUpperCase();
    }
  }
  for (i = 0; i < chrOdd.length; i++) {
    if (i % 2 === 1) {
      chrOdd[i] = chrOdd[i].toUpperCase();
    }
  }
  let chEven = chrEven.join('');
  let chOdd = chrOdd.join('');
  return [chEven, chOdd];
}
