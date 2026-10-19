class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for(let i = 0; i < nums.length; i++) { // first counter
            for(let j = i+1; j < nums.length; j++) { // second counter
                if(nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
}
