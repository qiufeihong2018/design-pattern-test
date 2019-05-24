// 主题，保存状态，状态变化之后触发所有的观察者对象
class Project {
  constructor() {
    this.state = 0
    this.observers = []
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
    this.notifyAllObservers()
  }
  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
  attach(observer) {
    this.observers.push(observer)
  }
}
// 观察者
class Observer {
  constructor(name, project) {
    this.name = name
    this.project = project
    this.project.attach(this)
  }
  update(){
    console.log(`${this.name},update,state:${this.project.getState()}`)
  }
}
// 测试
let p=new Project()

let qfh=new Observer('qfh',p)
let qfh1=new Observer('qfh1',p)
let qfh2=new Observer('qfh2',p)

// 更新state的值
p.setState(1)
p.setState(2)
p.setState(3)

