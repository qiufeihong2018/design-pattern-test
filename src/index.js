const EventEmitter=require('events').EventEmitter

const event=new EventEmitter()
// 同一个事件上发生的两件事
event.on('click',res=>{
  console.log(`qfh${res}`)
}).on('click',res=>{
  console.log(`qfh2${res}`)
})

// 触发监听事件click
event.emit('click','加油')
// qfh加油
// qfh2加油