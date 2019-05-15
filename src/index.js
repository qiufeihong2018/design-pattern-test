@testDec(false)
class Demo{

}
function testDec(isDec){
  return function(target){
    target.isDec=isDec
  }
}
alert(Demo.isDec)