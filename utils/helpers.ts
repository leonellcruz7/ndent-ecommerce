export const capitalizeWords = (str: string) => {
  // Split the string into an array of words
  let words = str.split(" ");

  // Iterate through each word and capitalize the first letter
  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    // Capitalize the first letter of the word
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  // Join the words back into a string and return it
  return words.join(" ");
};
