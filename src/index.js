// 明星
let Star = {
  name: 'zhuliye',
  age: '12',
  height: '167',
  weight: '90',
  price: 1230000,
  phone: 'star_12355553333'
}
// 经纪人
let agent = new Proxy(Star, {
  get: function (target, key) {
    if (key === 'phone') {
      // 返回经纪人电话
      return 'agent_12355557666'
    }
    if (key === 'price') {
      // 经纪人报价
      return 2000000
    }
    return target[key]
  },
  set: function (target, key, val) {
    if (key === 'cusPrice') {
      if (val < 1000000) {
        throw new Error('too low')
      } else {
        target[key] = val
        return true
      }
    }
  }
})
// 测试
// console.log(agent.name)
// console.log(agent.age)
// console.log(agent.weight)
// console.log(agent.price)
// console.log(agent.phone)
// agent.cusPrice=400000
// console.log(agent.cusPrice)
// zhuliye
//   12
//   90
//   2000000
//   agent_12355557666
// Uncaught Error: too low



// console.log(agent.name)
// console.log(agent.age)
// console.log(agent.weight)
// console.log(agent.price)
// console.log(agent.phone)
// agent.cusPrice=4000000
// console.log(agent.cusPrice)
// zhuliye
// 12
//  90
//  2000000
//  agent_12355557666
//  4000000