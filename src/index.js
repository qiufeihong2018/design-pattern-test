import StateMachine from 'javascript-state-machine'
import $ from 'jquery'
var fsm=new StateMachine({
    init:'收藏',
    transitions:[{
        name:'handleStore',
        from:'收藏',
        to:'取消收藏'
    },{
        name:'handleDelStore',
        from:'取消收藏',
        to:'收藏'
    }],
    methods: {
        onHandleStore:()=>{
            alert('收藏成功')
            updateTxt()
        },
        onHandleDelStore:()=>{
            alert('取消收藏成功')
            updateTxt()        
        }
    }
})

let btn=$('#btn')
// 按钮点击
btn.click(function(){
    fsm.is('收藏')?fsm.handleStore():fsm.handleDelStore()
})

// 按钮文字更新

function updateTxt(){
    btn.text(fsm.state)
}

// 初始化
updateTxt()

// methods中的onHandleStore与transitions中的handleStore要对应且首字母大写，表示监听该方法