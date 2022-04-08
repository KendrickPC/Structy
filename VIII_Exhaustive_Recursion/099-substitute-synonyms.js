/*
Write a function, substitutingSynonyms, that takes in a sentence and an object as arguments.
The object contains words as keys whose values are arrays containing synonyms.
The function should return an array containing all possible sentences that can be
formed by substituting words of the sentence with their synonyms.

You may return the possible sentences in any order, as long as you return all of them.
*/


const substituteSynonyms = (sentence, synonyms) => {
  return sentence;
};

const sentence = "follow the yellow brick road";
const synonyms = {
  follow: ["chase", "pursue"],
  yellow: ["gold", "amber", "lemon"],
};

console.log(substituteSynonyms(sentence, synonyms));
// [
//   'chase the gold brick road',
//   'chase the amber brick road',
//   'chase the lemon brick road',
//   'pursue the gold brick road',
//   'pursue the amber brick road',
//   'pursue the lemon brick road'
// ]










module.exports = {
  substituteSynonyms
};