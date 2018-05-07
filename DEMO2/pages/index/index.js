import testDrive from '../../models/test-drive'
const app = getApp()
Page({
  data:{
    slides: null,
    entities: null,
  },
  testDrive,
  readMore (event) {
    wx.navigateTo({
      url: `/pages/vehicles/show?id=${ event.target.dataset.id }`,
    })
  },
  onLoad () {
    this.setData({
      slides: app.globalDate.slides,
      entities: app.globalDate.vehicles
    })
  }
})