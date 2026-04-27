var arr = [55, 3, 89, 9, 11];
arr.sort(rule);
function rule(num1, num2) {
  return num1 - num2; //升序排列
  // return num2 - num1; //降序排列
}
console.log(arr); //[ 11, 3, 55, 89, 9 ]

var arr2 = [1, 2, 3, 9, 11, 8];
// 想要在9前面新增三个元素4,5,6，并且删掉数字1
arr2.splice(0, 1); //删除1
console.log(arr2); //[ 2, 3, 9, 11, 8 ]
arr2.splice(2, 0, 4, 5, 6); //新增4,5,6
console.log(arr2); //[ 2, 3, 4, 5, 6, 9, 11, 8 ]
