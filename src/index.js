class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    alert(`我是${this.name}`);
  }
  speak() {
    alert(`今年${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
  }
  study() {
    alert(`${this.name}在学习`);
  }
}
let qiu = new Student("qiu", 12, "1213vfzad");
qiu.eat();
alert(qiu.number);
qiu.speak();
qiu.study();
let wang = new Student("wang", 123, "232dfafd");
wang.eat();
alert(qiu.number);
wang.speak();
wang.study();
