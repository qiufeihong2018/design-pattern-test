class Star {
  constructor(name) {
    this.name = name
    this.call = this.call(name)
  }
  play() {
    console.log(`${this.name}演出真好看`)
  }
  call() {
    console.log(`我可以邀请${this.name}来演出吗`)
  }
}
class ProxyStar {
  constructor(name) {
    this.star = new Star(name)
  }
  play() {
    this.star.play()
  }
}
// 测试
let proxyStar=new ProxyStar('zhuliye')
proxyStar.play()

// 我可以邀请zhuliye来演出吗
// zhuliye演出真好看