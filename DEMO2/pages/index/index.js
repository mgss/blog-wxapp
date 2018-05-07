const app = getApp()
Page({
  data:{
    slides: null,
    entities: null,
  },
  onLoad(){
    this.setData({
      slides: app.globalDate.slides,
      entities: app.globalDate.vehicles
    })
  }
})