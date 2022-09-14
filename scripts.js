// 1. Из заданного массива извечь все четные числа в виде нового массива. Для определения четности используйте оператор %
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = arr.filter(function(elem) {
  if (elem % 2 == 0) {
    return true;
  } 
});
console.log(result);

// 2.Из заданного массива извлечь все элементы под четными индексами в виде нового массива
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result1 = arr1.filter(function(elem, index) {
  if (index % 2 == 0) {
    return true;
  } 
});
console.log(result1);

// 3. Для выбранного диапазона от n до m найти все числа входящие в множество чисел Фибоначи
function range(n, m) {
    let arrFib = [];
    let first = 0;
    let next = 1;
  
    while (true) {
      if (first >= n) {
          arrFib.push(first);
      }
  
      let newNext = next;
      next = first + next;
      first = newNext;
  
      if (first >= m) {
        return arrFib;
      }
    }
  }
  
  let result2 = range(0, 2000);
  let resultTwo = range(100, 500);
  console.log(result2);
  console.log(resultTwo);