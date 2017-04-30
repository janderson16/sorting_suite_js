function bubbleSort(arr){
  var swapped = true;
  while(swapped) {
    swapped = false;
    for(var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]){
        var bigger = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = bigger;
        swapped = true;
      };
    };
  };
  return arr;
};
module.exports = bubbleSort;
