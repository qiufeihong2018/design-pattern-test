class Car {
  drive() {
   alert('车能开')
  }
}
class Decorator {
  constructor(car){
    this.car=car
  }
  drive() {
    this.car.drive()
    this.sing(car)
  }
  sing(car){
    alert('加一个音箱，来唱歌')
  }
}
let car=new Car()
car.drive()
alert('----')
let user=new Decorator(car)
user.drive()