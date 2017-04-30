const assert = require('chai').assert
const bubbleSort = require('../bubble_sort')

describe("Using bubble sort algorithm", function(){
  it("can sort an array of numbers", function(){
    var unsortedArray = [1,9,2,3,12,7]
    var sortedArray = [1,2,3,7,9,12]
    var result = bubbleSort(unsortedArray);
    assert.deepEqual(result, sortedArray);
  });
});
