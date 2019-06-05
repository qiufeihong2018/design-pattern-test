function Handler() {
    this.next = null;
    this.setNext = function(_handler) {
        this.next = _handler;
    };

    this.handleRequest = function(event) {

    }
};

//采购部
function rule139Handler(){}
rule139Handler.prototype = new Handler();
rule139Handler.prototype.handleRequest = function(event) {
     //处理权限最多1004139
    if (event===1004139){
        console.log('1004139匹配正确');
    } else {
        console.log('1004139匹配错误');
        if (this.next) {
            this.next.handleRequest(event);
        }
    }
};

//总经理
function rule136Handler (){}
rule136Handler.prototype = new Handler();
rule136Handler.prototype.handleRequest = function(event) {
     //处理权限最多1004136
    if (event === 1004136){
        console.log('1004136匹配正确');      
    } else {
        console.log('1004136匹配错误');       
        if (this.next) {
            this.next.handleRequest(event);
        }
    }
};


function Client() {
    var cgb = new rule139Handler();
    var zjl = new rule136Handler();
    cgb.setNext(zjl);
    
    cgb.handleRequest(1004137);
}

Client()

