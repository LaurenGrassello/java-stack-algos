// Output: 3
// Explanation: The answer is "abc", with the length of 3.

/**
 * @param {string} s
 * @return {number}
 */
Input: s = "abcabcbb"
var lengthOfLongestSubstring = function (s) {
    let newString = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] != s[i] + 1) {
            newString.push(s[i])
        } else {
            return newString.length
        }
    }

};
