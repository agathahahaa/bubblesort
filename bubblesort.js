function bubbleSort(arr) {
    var len = arr.length;

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            
            if (arr[j] > arr[j + 1]) {

                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

var arrayToSort = [64, 34, 25, 12, 22, 11, 90];
var sortedArray = bubbleSort(arrayToSort);

console.log("Array Sebelum Diurutkan:", arrayToSort);
console.log("Array Setelah Diurutkan:", sortedArray);
