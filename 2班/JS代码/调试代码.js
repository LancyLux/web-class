// 扩展:code runner
// 左边打开运行和调试按钮，选择Node.js环境
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }
var arr = [55, 3, 89, 9, 11];
arr.sort();
console.log(arr); //[ 11, 3, 55, 89, 9 ]

arr.sort(rule);
function rule(num1, num2) {
  return num1 - num2; //升序排列
  // return num2-num1;//降序排列
}
console.log(arr); //[ 3, 9, 11, 55, 89 ]
