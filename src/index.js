// 颜色状态
class State {
    constructor(color) {
        this.color = color
    }
    handle(content){
        console.log(`现在是${this.color}灯`)
        // 设置状态
        content.setState(this)
    }
}

// 主体
class Content {
    constructor() {
        this.state = null
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
    }
}
// 测试
let content = new Content()
const red = new State('red')
const yellow = new State('yellow')
const green = new State('green')

red.handle(content)
console.log(content.getState())

yellow.handle(content)
console.log(content.getState())

green.handle(content)
console.log(content.getState())