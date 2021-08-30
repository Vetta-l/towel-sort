
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let rez = [];
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      let colInd = i % 2 === 0 ? j : (matrix[i].length - j - 1);
      rez.push(matrix[i][colInd]);
    }  
  }    
  if(!matrix){
    return [];
  }
  return rez;
}
