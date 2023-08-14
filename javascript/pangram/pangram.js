//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string) => {
  const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (const letter of LETTERS) {
    if (string.toLowerCase().split('').includes(letter) === false) return false;
  }

  return true;
};
