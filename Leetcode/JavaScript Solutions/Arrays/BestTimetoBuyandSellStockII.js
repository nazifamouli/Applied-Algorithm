/*

LeetCode Problem 122. Best Time to Buy and Sell Stock II
Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
Written by: Mostofa Adib Shakib
Language: JavaScript

*/


var maxProfit = function(prices) {
    var ans = 0;

    for(var i = 1; i < prices.length; i++){
        if ( prices[i] - prices[i-1] > 0){
            ans += prices[i] - prices[i-1];
        }
    }
    return ans;
};