var student1 = {
  name: '张三',
  age: 18,
  sex: '男',
  sayHello: function () {
    console.log('你好，我是' + this.name);
  },
};
student.sayHello(); //你好，我是张三

var student2 = {
  name: '李四',
  age: 18,
  sex: '男',
  sayHello: function () {
    console.log('你好，我是' + this.name);
  },
};

function Student(name1, age1, sex1) {
  this.name = name1;
  this.age = age1;
  this.sex = sex1;
  this.sayHello = function () {
    console.log('你好，我是' + this.name);
  };
}
var stu3 = new Student('王五', 18, '男');
var stu4 = new Student('赵六', 18, '男');
