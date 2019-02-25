module.exports = function check(str, bracketsConfig) {
  let st = str.slice(), arr = [];

  const isAnyPairExist = (str1, a) =>{
    for(let i = 0; i < a.length; i++) {
      if (str1.indexOf(a[i]) >= 0) {
        return true;
      }
    }
    return false;
  }

  for(let i = 0; i < bracketsConfig.length; i++) {
    arr.push(bracketsConfig[i].join(''));
  }
  
  while (isAnyPairExist(st, arr)) {
    arr.forEach((pair) => {
      st = st.replace(pair, '');
    })
  }
    
  return st.length === 0;
  
}
