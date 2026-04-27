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

// 3.求取数组最大值
var arr = [55, 3, 89, 9, 11];
var max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

// 6.编写一个isLeapYear()函数，该函数的参数是一个年份数字，利用isLeapYear()函数判断年份是否为闰年，如果年份是闰年，则返回值为true，否则返回值为false。

// 普通闰年：公历年份是4的倍数，且不是100的倍数的
function isLeapYear(year) {
  if (year % 4 == 0 && year % 100 != 0) {
    return true;
  }
  return false;
}
var judge = (year) => {
  if (year % 4 == 0 && year % 100 != 0) {
    return true;
  }
  return false;
};
var judge2 = (year) => year % 4 == 0 && year % 100 != 0;

console.log(judge2(2025));
