class Staff{
    execute(){
        console.log('入职')
    }
}

class HR{
    constructor(staff){
        this.staff=staff
    }
    email(){
        console.log('offer给你了,来入职吧')
        this.staff.execute()
    }
}

class Boss{
    constructor(hr){
        this.hr=hr
    }
    decree(){
        console.log('来入职吧')
        this.hr.email()
    }
}

const staff=new Staff()
const hr=new HR(staff)
const boss=new Boss(hr)
boss.decree()

// 来入职吧
// offer给你了,来入职吧
// 入职