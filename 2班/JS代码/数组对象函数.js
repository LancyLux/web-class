var arr = [55, 3, 89, 9, 11];
// push方法新增一个元素
arr.push(99);
console.log(arr); // [ 55, 3, 89, 9, 11, 99 ]

console.log(arr.join('-'));

arr.sort(rule);
//不设定rule排序规则：[ 11, 3, 55, 89, 9, 99 ]
// 设定rule规则：[ 3, 9, 11, 55, 89, 99 ]
function rule(num1, num2) {
  return num1 - num2; //升序排列
}
console.log(arr);

// 字符串
var str = '12345667@163.com';
var arr = str.split('@');
console.log(arr); // [ '12345667', '163.com' ]
var email = arr[1].substring(0, 4); //[begin,end)
console.log(email); // 163
