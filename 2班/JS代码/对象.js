var stu1 = {
  name: '张三',
  age: 18,
  sex: '男',
  sayHello: function () {
    console.log('你好，我是' + this.name);
  },
};
var stu2 = {
  name: '李四',
  age: 18,
  sex: '男',
  sayHello: function () {
    console.log('你好，我是' + this.name);
  },
};
stu.sayHello();
console.log(stu.age);

// 定义构造函数
function Student(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log('你好');
  };
}
var stu3 = new Student('王五', 18);
var stu4 = new Student('赵六', 18);
var stu5 = new Student('王二', 18);
stu3.sayHello();
console.log(stu4.name);
