function repeatStringNumTimes(str: string, num: number) {
  let ans = "";

  for (let i = 0; i < num; i++) {
    ans += str;
  }

  return ans;
}

repeatStringNumTimes("abc", 3);
