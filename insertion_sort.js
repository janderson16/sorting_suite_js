function insertionSort(unsorted){
  var howLong = unsorted.length;
  for(var i = 1; i < howLong; i++){
    var current = unsorted[i];
    for(var j = i - 1; j >= 0 && (unsorted[j] > current); j--){
      unsorted[j + 1] = unsorted[j];
    };
    unsorted[j + 1] = current;
  };
  return unsorted
};
module.exports = insertionSort;
