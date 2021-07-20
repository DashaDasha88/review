function multiplyBy (num) {
  return function (x) {
    return x * num;
  }
}

const triple = multiplyBy(3);

triple(6);
triple(8);
triple(10);