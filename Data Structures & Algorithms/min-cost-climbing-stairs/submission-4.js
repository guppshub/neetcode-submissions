class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        var min_cost = [...cost, 0];

        for(var i = cost.length-3; i>=0; i--){
            min_cost[i] = min_cost[i] + Math.min(min_cost[i+1], min_cost[i+2]);
        }

        return Math.min(min_cost[0], min_cost[1]);
    }
}
