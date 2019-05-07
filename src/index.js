function loadImg(src) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject('error')
    }
    img.src = src
  })
}
let src = 'https://avatars1.githubusercontent.com/u/12479470?s=460&v=4'
let res = loadImg(src)
res.then(function (img) {
  alert(`img's height:${img.height}`)
  return img
}).then(function (img) {
  alert(`img's width:${img.width}`)
  return img
}).then(function(img){
  alert(img.src)
}).catch(function (ex) {
  alert(`errorrrrr${ex}`)
})
