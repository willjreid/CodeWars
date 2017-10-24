function abbrevName(name){
  var initial1 = name.charAt(0);
  var initial2 = name.charAt(name.indexOf(' ')+1);
  return `${initial1}.${initial2}`;
}
