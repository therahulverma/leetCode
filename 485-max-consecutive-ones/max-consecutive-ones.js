/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currMax = 0;
    let max = 0;

    for (let i=0;i<nums.length;i++){
        if(nums[i]===1){
            currMax++;
        }else{
            max = Math.max(currMax,max);
            console.log(max);
            currMax = 0;
        }
    }

    return Math.max(max,currMax);
};