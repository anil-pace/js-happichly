//23. Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/

lists = [[1, 4, 5], [1, 3, 4], [2, 6]];


let x = lists.flat();
x.sort(function (a, b) { return a - b });
console.log(x); // [1,1,2,3,4,4,5,6]