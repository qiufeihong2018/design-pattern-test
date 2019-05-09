class Park {
  constructor(ffreeCar, sfreeCar, tfreeCar, id, start, interval) {
    this.ffreeCar = ffreeCar
    this.sfreeCar = sfreeCar
    this.tfreeCar = tfreeCar
    this.id = id
    this.start = start
    this.interval = interval
  }
  watchCar() {
    alert(`第一层的空余车位是${this.ffreeCar}\n第二层的空余车位是${this.sfreeCar}\n第三层的空余车位是${this.tfreeCar}`)
  }
  distinguishCar() {
    alert(`该车车牌号是${this.id},开始停车时间是${this.start}`)
  }
  watchIdTime() {
    alert(`该车车牌号是${this.id},停车时长为${this.interval}`)
  }
}
const park = new Park(12, 43, 54, '1231r3454gfdf', '2019.1.1', '10h')
park.watchCar()
park.distinguishCar()
park.watchIdTime()
