function countNumbers(str) {
  let newstr = str.split('').filter(item => !isNaN(item));
  let obj = {};
  for (let i = 0; i < newstr.length; i++) {
    if (newstr[i] in obj) {
      obj[newstr[i]]++;
    } else {
      obj[newstr[i]] = 1;
    }
  }
  return JSON.stringify(obj);
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers(''); 