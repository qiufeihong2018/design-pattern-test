class Adaptee{
  specificRequest(){
    return '美国插座'
  }
}
class Target{
  constructor(name){
    this.name=name
    this.adaptee=new Adaptee
  }
  request(){
    alert(`${this.name}-适配器-${this.adaptee.specificRequest()}`)
  }
}

let target=new Target('中国插头')

target.request()//中国插头-适配器-美国插座