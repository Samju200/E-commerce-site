function bubbleSort(array) {
  let isSwapped = true;
  while (isSwapped) {
    isSwapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSwapped = true;
      }
    }
  }
  return array;
}

function insertSort(array) {
  let currentItem, j;
  for (let i = 1; i < array.length; i++) {
    currentItem = array[i];
    j = i - 1;
    while (j >= 0 && array[j] > currentItem) {
      array[j + 1] = array[j];
      j--
    }
    array[j + 1] = currentItem;
  }
  return array;
}

let unsortedArray = [8, 1, 6, 9, 4];
let newArray =[2,0,2,1,1,0]
console.log(bubbleSort(newArray));
console.log(insertSort(newArray));
