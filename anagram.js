var anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let charCount = new Array(26).fill(0);

  for (let i = 0; i < str1.length; i++) {
    charCount[str1.charCodeAt(i) - 97]++;
    charCount[str2.charCodeAt(i) - 97]--;
  }

  return charCount.every((val) => val === 0);
};

console.log(anagram("car", "rac"));
