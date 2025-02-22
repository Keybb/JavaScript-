/**
 * Description placeholder
 *
 * @param {array} arr
 * @param {boolean} method
 * @returns {array}
 */
function sort(arr, isdown = false) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (isdown) {
        if (arr[j] < arr[i]) {
          var t = arr[j];
          arr[j] = arr[i];
          arr[i] = t;
        }
      } else {
        if (arr[j] > arr[i]) {
          var t = arr[j];
          arr[j] = arr[i];
          arr[i] = t;
        }
      }
    }
  }
  return arr;
}
console.log(sort([3, 5, 9, 6, 1, 2, 4], false));
