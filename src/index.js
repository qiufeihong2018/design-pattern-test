class jquery {
  constructor(selector) {
    let slice = Array.prototype.slice //抽取当前数组中的一段元素组合成一个新数组。
    let dom = slice.call(document.querySelectorAll(selector)) //返回与指定的选择器匹配的文档中的元素列表，变成数组
    let len = dom ? dom.length : 0
    for (let i = 0; i < len; i++) {
      this[i] = dom[i]
    }
    this.length = len
    this.selector = selector || ''
  }
  append(node) {
    // ...
  }
  addClass(name) {
    // ...
  }
  html(data) {
    // ...
  }
  // 省略
}

window.$ = function (selector) {
  return new jquery(selector)
}

var p = $('p')
console.log(p)
console.log(p.append())
console.log(p.addClass())
