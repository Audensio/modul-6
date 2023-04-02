Задание 1


function funcArr(arr){
  countEven = 0;
  countOdd = 0; 
  countOther = 0;
  for (let i = 0; i < arr.length; i++){
     if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        countOther++;
    } else {
        if (arr[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
}

console.log("Четных " + countEven);
console.log("Нечетных " + countOdd);
console.log("Других " + countOther);
}

funcArr([1, 45, 6 , 8, 10, 'ff'])