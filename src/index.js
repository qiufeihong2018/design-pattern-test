const fs = require('fs')
const readStream = fs.createReadStream('../static/interview.docx')

let total = 0
readStream.on('data', function (data) {
  // 打印每一行长度
  console.log(data.length)
  total += data.length
})
readStream.on('end', function () {
  // 打印总共长度
  console.log(total)
})

// 65536
// 65536
// 65536
// 65536
// 65536
// 65536
// 65536
// 65536
// 65536
// 65536
// 65536
// 65536
// 65536
// 48221
// 900189