function abbrevName(name){
  var initial1 = name.charAt(0).toUpperCase();
  var initial2 = name.charAt(name.indexOf(' ')+1).toUpperCase();
  return `${initial1}.${initial2}`;
}
