const assert = require('chai').assert
const insertionSort = require('../insertion_sort')

describe("Using insertion sort algorithm", function(){
  it("can sort an array of numbers", function(){
    var unsortedArray = [1,9,2,3,12,7]
    var sortedArray = [1,2,3,7,9,12]
    var result = insertionSort(unsortedArray);
    assert.deepEqual(result, sortedArray);
  });
});
