const EventEmitter = require('events').EventEmitter
// Car继承事件监听api
class Car extends EventEmitter {
  constructor(name) {
    super()
    this.name = name
  }
}

const car = new Car('aodi')
// 如要取this，那么就不要用箭头函数，否则作用域不同
car.on('open', function(){
  console.log(this.name, '在高速飞驰')
})

car.emit('open')
// aodi 在高速飞驰