function makeNumber(str){
  return str.split('').filter(item => !isNaN(item)).join("")
}

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd'); 
makeNumber('ijifjgdj'); 