function add(num1, num2) {
  return num1 + num2;
}
// 匿名函数
var sum = function (num1, num2) {
  return num1 + num2;
};
// 箭头函数：() => {}
var sum2 = (num1, num2) => {
  return num1 + num2;
};
var sum3 = (num1, num2) => num1 + num2;

// 编写一个isLeapYear()函数，该函数的参数是一个年份数字，利用isLeapYear()函数判断年份是否为闰年，如果年份是闰年，则返回值为true，否则返回值为false。
// 普通闰年：公历年份是4的倍数，且不是100的倍数的年份，是闰年。

function isLeapYear(year) {
  if (year % 4 == 0 && year % 100 != 0) {
    return true;
  }
  return false;
}
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false
