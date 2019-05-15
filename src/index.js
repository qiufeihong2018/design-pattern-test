function readonly(target,name,descriptor){
  descriptor.writable=false
  return descriptor
}
class People{
  constructor(name,age){
    this.name=name
    this.age=age
  }

  @readonly
  getName(){
    alert(`${this.name}是我的名字,${this.age}是我的年龄`)
  }
}
let people=new People('qfh',123)
people.getName()//qfh是我的名字,123是我的年龄
people.getName=function(){
  alert('update')
}
//Uncaught TypeError: Cannot assign to read only property 'getName' of object '#<People>'