function pipe() {
  let result = arguments[1](arguments[0]);
  for (let i = 2; i < arguments.length; i++) {
    result = arguments[i](result)
  }
  return result;
}

function addOne(x) {
  return x + 1;
}

pipe(1, addOne);
pipe(1, addOne, addOne);