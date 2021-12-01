function findElement(arr: Array<number>, func: Function) {
  let num: number | undefined = 0;

  for (const el of arr) {
    if (func(el)) {
      num = el;
      break;
    }
  }

  if (!num) num = undefined;

  return num;
}

findElement([1, 3, 5, 3, 9, 10], function (num: number) {
  return num % 2 === 0;
});
