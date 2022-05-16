// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


var nums = [2,7,11,15]
var target = 9

for(var i = 0; i <nums.length; i++){
    if(nums[i] + nums[i + 1] == target){
        console.log(i, i+1)
    }
}