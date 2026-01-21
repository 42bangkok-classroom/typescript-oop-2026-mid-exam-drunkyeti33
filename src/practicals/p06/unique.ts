function getUniqueNumbers(arr1: number[], arr2: number[]){
  // Write your code below
  let numb = (arr1&&arr2)
  const unique = numb.filter((value,index) => numb.indexOf(value))
console.log(unique);
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

getUniqueNumbers(arr1,arr2)