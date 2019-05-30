let prototype = {
    getPerson() {
        alert(`我是${this.name}，今年${this.age}`)
    },
    sayName() {
        alert('你是天边最美的云彩')
    }
}
// 根据原型创建对象
let qfh = Object.create(prototype)
qfh.name = 'qfh'
qfh.age = 23
qfh.getPerson()
qfh.sayName()

let lxl = Object.create(prototype)
lxl.name = 'lxl'
lxl.age = 234
lxl.getPerson()
lxl.sayName()