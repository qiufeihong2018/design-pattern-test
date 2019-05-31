// 暂时备份
class TmpBackup {
    constructor(content) {
        this.content = content
    }
    getContent() {
        return this.content
    }
}

// 备份列表
class Memento {
    constructor() {
        this.list = []
    }
    add(tmpBackup) {
        this.list.push(tmpBackup)
    }
    get(index) {
        return this.list[index]
    }
}

// 编辑器
class Editor {
    constructor() {
        this.content = null
    }
    setContent(content) {
        this.content = content
    }
    getContent() {
        return this.content
    }
    // 保存
    saveContentToTmpBackup() {
        return new TmpBackup(this.content)
    }
    // 撤销
    getContentFromTmpBackup(tmpBackup) {
        this.content = tmpBackup.getContent()
    }
}

// 测试
let editor=new Editor()
let memento=new Memento()
// 先填内容
editor.setContent('aaaa')
// 再将内容暂时保存
let tmp=editor.saveContentToTmpBackup()
// 最后将内容保存进备忘录
memento.add(tmp)
editor.setContent('bbbb')
editor.setContent('cccc')
editor.setContent('dddd')
editor.setContent('eeee')
editor.setContent('ffff')
editor.setContent('gggg')

console.log(editor.getContent())
// 撤销到第一条
editor.getContentFromTmpBackup(memento.get(0))
console.log(editor.getContent())
