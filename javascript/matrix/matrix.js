//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  // '1 2 \n 3 4'
  get rows() {
    return this.matrix
      .split('\n')
      .map((a) => a.split(' ').map((v) => Number(v)));
  }

  get columns() {}
}
