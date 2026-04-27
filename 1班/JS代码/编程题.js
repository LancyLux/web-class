// 1.将数组中数字内容求和 var arr=[12,34,2,5,76];
var sum = 0;
var arr = [12, 34, 2, 5, 76];
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

// 2.var arr=[4,0,7,9,0,0,2,6,0,3,1,0];要求将数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组
var arr = [4, 0, 7, 9, 0, 0, 2, 6, 0, 3, 1, 0];
var newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != 0) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

// 4.数组最大值
var arr = [55, 3, 89, 9, 11];
var max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
