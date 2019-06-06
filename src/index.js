// 获取事件
const event = require('../initData/alarm')
// 获取规则
const rule = require('../initData/rule')

// 高级事件
let advanceEvent = {
    alarmList: [],
    expireAt: '',
    trace: [],
    adEvent: [
        [],
        []
    ]
}

advanceEvent.alarmList = rule

// 职责链模式
function Handler() {
    this.next = null;
    this.setNext = function (_handler) {
        this.next = _handler;
    };

    this.handleRequest = function (event) {

    }
};

//rule139Handler
function rule139Handler() {}
rule139Handler.prototype = new Handler();
rule139Handler.prototype.handleRequest = function (event) {
    if (event.signatureId == '1004139') {
        console.log('1004139匹配正确');

        advanceEvent.trace.push(event)
        event.nextRule = '1004136'
        let length = advanceEvent.adEvent[0].length

        if (advanceEvent.adEvent[0].length === 0) {
            advanceEvent.adEvent[0].push(event)
            return
        } else if (advanceEvent.adEvent[0][length - 1].signatureId == event.signatureId && advanceEvent.adEvent[0][length - 1].nextRule !== 'null') {
            advanceEvent.adEvent[0][length - 1] = event
            return
        } else if (event.signatureId !== advanceEvent.adEvent[0][length - 1].signatureId && advanceEvent.adEvent[0][length - 1].nextRule == event.signatureId) {
            advanceEvent.adEvent[0].push(event)
            return
        } else {
            advanceEvent.adEvent[1].push(event)
            return
        }
    } else {
        console.log('1004139匹配错误');
        if (this.next) {
            this.next.handleRequest(event);
        }
    }
};

//rule136Handler
function rule136Handler() {}
rule136Handler.prototype = new Handler();
rule136Handler.prototype.handleRequest = function (event) {
    if (event.signatureId == '1004136') {
        console.log('1004136匹配正确');

        advanceEvent.trace.push(event)

        event.nextRule = 'null'
        let length = advanceEvent.adEvent[0].length

        if (advanceEvent.adEvent[0].length === 0) {
            advanceEvent.adEvent[0].push(event)
            return
        } else if (advanceEvent.adEvent[0][length - 1].signatureId == event.signatureId && advanceEvent.adEvent[0][length - 1].nextRule !== 'null') {
            advanceEvent.adEvent[0][length - 1] = event
            return
        } else if (event.signatureId !== advanceEvent.adEvent[0][length - 1].signatureId && advanceEvent.adEvent[0][length - 1].nextRule == event.signatureId) {
            advanceEvent.adEvent[0].push(event)
            return
        } else {
            advanceEvent.adEvent[1].push(event)
            return
        }
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
    for (let i in event) {
        console.log(event[i])
        cgb.handleRequest(event[i]);
    }
}

Client()
console.log(advanceEvent)