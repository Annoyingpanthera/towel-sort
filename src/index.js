
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
      return [];
    }
    const flattened = [];
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        flattened.push(...matrix[i]);
      } else {
        flattened.push(...matrix[i].reverse());
      }
    }
    return flattened;
  }
