function cubeOdd(arr) {
  let trip = arr.map(function(x) {
    return x * x * x;
  });
  let odds = [];
  for (var i = 0; i < trip.length; i++) {
    if((trip[i] % 2) === 1) {
      odds.push(trip[i]);
    };
  };
  let sum = odds.reduce(add, 0);
  function add(a, b) {
    return a + b;
  };
  console.log(trip);
  console.log(odds);
  console.log(sum);
return sum;
};
