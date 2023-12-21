/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let j;
  str1 = str1.toUpperCase();str2 = str2.toUpperCase();
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  //console.log(arr1);
  for (let i = 0; i < arr1.length; i++) {
    const char = arr1[i];
    const ind = arr2.indexOf(char);
    //console.log(arr2);
    if (ind !== -1) {
      arr2.splice(ind, 1);
    } else {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
