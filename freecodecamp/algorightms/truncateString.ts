function truncateString(str: string, num: number) {
  let ans = "";

  if (str.length <= num) return str;

  const sliced = str.slice(0, num);

  ans += sliced;
  ans += "...";

  return ans;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
