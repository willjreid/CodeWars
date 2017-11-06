function find_average(array) {
  let tot = array.reduce((sum, value) => sum + value, 0);
  let avg = tot/array.length;
  return avg;
}
