function filter_list(l) {
  let num = [];
  l.forEach(function(v) {
    if (!isNaN(v/1)) num.push(v);
  });
  return num;
}
