var str = 'zhangsan@163.com';
//substring(begin,end)方法：从begin开始，不包含end
console.log(str.substring(0, 8)); // zhangsan
console.log(str.substring(8)); //@163.com

//split()方法：将字符串转换为数组
var arr = str.split('@');
console.log(arr); // [ 'zhangsan', '163.com' ]
