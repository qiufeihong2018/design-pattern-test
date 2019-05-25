const fs = require('fs')
const readLine = require('readline')
const rl = readLine.createInterface({
  input: fs.createReadStream('../static/interview.docx')
})
let totalLine = 0
rl.on('line', function (line) {
  let llen = line.length
  console.log(llen)
  totalLine += llen
})
rl.on('close', function () {
  console.log(totalLine)
})
// 128
// 93
// 109
// 103
// 151
// 82
// 225
// 129
// 52
// 6
// 93
// 105
// 31
// 270
// 137
// 170
// ……