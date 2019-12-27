function countNumbers(str) {
  let newstr = str.split('').filter(item => !isNaN(item)).sort();
  let obj = {};
  for (let i = 0; i < newstr.length; i++) {
    if (Object.prototype.hasOwnProperty.call(obj, newstr[i])) {
      obj[newstr[i]] = obj[newstr[i]] + 1;
    } else {
      obj[newstr[i]] = 1;
    }
  }
  return obj;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers(''); 