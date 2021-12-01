function titleCase(str: string) {
  let ans: string[] = [];
  const strArray = str.split(" ");

  strArray.forEach((str, strArrayIdx) => {
    [...str].forEach((char, idx) => {
      if (ans[strArrayIdx] === undefined) ans[strArrayIdx] = "";

      if (idx === 0) ans[strArrayIdx] += char.toUpperCase();
      else ans[strArrayIdx] += char.toLowerCase();
    });
  });

  return ans.join(" ");
}

titleCase("I'm a little tea pot");
