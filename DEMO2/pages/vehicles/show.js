const app = getApp()

Page({
  data:{
    entity: null
  },
  preview (event) {
    const slidesName = event.target.dataset.slides
    const index = event.target.dataset.index
    const slides = this.data.entity.meta[slidesName]
    const images = []

    // 获取当前点击图片所在合集
    slides.filter(item=>{
      images.push(item.image)
    })

    // 调用微信图片预览接口
    wx.previewImage({
      // current: 'String', // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: images,
      current: images[index]
    })
  },
  onLoad () {
    const id = 3
    // 根据ID得到数据
    const entity = app.globalDate.vehicles.filter((item)=>{
      return item.id == id
    })
    // 将查询到的数据放入变量
    this.setData({
      entity: entity[0]
    })
    // 根据查询的数据设置标题
    wx.setNavigationBarTitle({
      title: this.data.entity.header
    })

  }
})