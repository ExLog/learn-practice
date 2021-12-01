function confirmEnding(str: string, target: string) {
  const targetLength = target.length;

  const endOfString = str.substr(-targetLength);

  return endOfString === target;
}

confirmEnding("Bastian", "n");
