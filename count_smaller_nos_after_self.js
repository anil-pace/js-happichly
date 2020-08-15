//315. Count of Smaller Numbers After Self
// https://leetcode.com/problems/count-of-smaller-numbers-after-self/

var countSmaller = function (arr) {
    var countArr = [];
    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                count++;
            }
        }
        countArr.push(count);
    }
    return countArr;
};

var arr = [5, 2, 6, 1];
console.log(countSmaller(arr));