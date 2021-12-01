function largestOfFour(arr: Array<Array<number>>): Array<number> {
  const ans: Array<number> = [];

  arr.forEach((numberArr, idx) => {
    numberArr.forEach((num) => {
      if (ans[idx] === undefined) ans[idx] = num;

      if (num > ans[idx]) ans[idx] = num;
    });
  });

  return ans;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
