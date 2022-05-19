//take an array of integers and turn it into a string

const arr1 = [1,2,3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1,2,3];
const separator2 = " - ";
const expected2 = "1 - 2 - 3";

const arr3 = [1];
const separator3 = ", ";
const expected3 = "1";

function join(arr, separator){
    var output = ""
    for(var i = 0; i <arr.length; i++){
        if(i !== arr.length - 1){
            output += arr[i] + separator;
        }else{
            output += arr[i]
        }
    }
    return output;
}
console.log(join(arr2, separator2))



