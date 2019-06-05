// 买家
class Buyer {
    constructor() {
        this.number = 0
    }
    setNum(num, m) {
        this.number = num
        if (m) {
            m.setSellerNum()
        }
    }
}
// 卖家
class Seller {
    constructor() {
        this.number = 0
    }
    setNum(num, m) {
        this.number = num
        if (m) {
            m.setBuyerNum()
        }
    }
}
// 中介者
class Medium {
    constructor(buyer, seller) {
        this.buyer = buyer
        this.seller = seller
    }
    setBuyerNum() {
        let number = this.seller.number
        this.buyer.setNum(number)
    }
    setSellerNum() {
        let number = this.buyer.number
        this.seller.setNum(number)
    }
}

// 测试
let buyer = new Buyer()
let seller = new Seller()
let medium = new Medium(buyer, seller)
buyer.setNum(9000000,medium)
console.log(`买家说出${seller.number}买这套房子`)
//买家说出9000000买这套房子

seller.setNum(10000000,medium)
console.log(`卖家说没有${buyer.number}不卖这套房子`)
// 卖家说没有10000000不卖这套房子


