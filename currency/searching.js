const linearSearching = (array, element)=> {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      return i;
    }
  }
  return null;
}

const binarySearching =(sortedArray, element)=>{

    let low = 0
    let high = sortedArray.length-1
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(sortedArray[mid]===element){
            return mid
        }else if( sortedArray[mid] > element){
            high = mid -1
        }else{
            low = mid+1
        }

    }
    return null
}

let arrayLinear = [12, 34, 45, 50, 70];
let binaryArray =[2,3,4,5,6,7,8,9]
// console.log(linearSearching(arrayLinear, 50));
console.log(binarySearching(binaryArray, 5));