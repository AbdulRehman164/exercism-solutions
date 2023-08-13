//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DNA_TO_RNA = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export const toRna = (dnaStrands) => {
  return dnaStrands
    .split('')
    .map((strand) => DNA_TO_RNA[strand])
    .join('');
};
