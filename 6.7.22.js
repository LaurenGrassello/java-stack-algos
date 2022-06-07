//diagonal sum

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]

const expected1 = 2

//left to right diagonal: 1 + 5 + 9 = 15
//right to left diagonal: 3 + 5 + 9 = 17
//absolute difference = 2

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
]

const expected2 = 0

//left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
//right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
//absolute difference = 0


//given square matrix (2d array) of integers
//calculate the absolute difference between the sum of its diagonals


function diagonalDifference(sqrMatrix){
    let leftToRightSum = 0
    let rightToLeftSum = 0
    let i = 0
    let j = sqrMatrix.length - 1
    while(i< sqrMatrix.length){
        leftToRightSum += sqrMatrix[i][i]
        rightToLeftSum += sqrMatrix[i][j]
        i++
        j--
        
    }
    let difference = leftToRightSum - rightToLeftSum
    if(difference >= 0){
        return difference
    }else{
        return -difference
    }
}
console.log(diagonalDifference(squareMatrix1))
console.log(diagonalDifference(squareMatrix2))