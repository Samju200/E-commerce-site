function getSum(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + getSum(n - 1);
  }
}
console.log(getSum(4));
