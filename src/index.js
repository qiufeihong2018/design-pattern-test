class Person {
  constructor(name) {
    this.name = name;
  }
}
class A extends Person {
  constructor(name) {
    super(name)
    this.name=name
  }
  getName() {
    alert(`我是a${this.name}`)
  }
}
class B extends Person {
  constructor(name) {
    super(name)
    this.name=name
  }
  getName() {
    alert(`我是b${this.name}`)
  }
}

const a = new A('a')
a.getName()

const b = new B('b')
b.getName()