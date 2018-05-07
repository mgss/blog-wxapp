const app = getApp()

Page({
  data: {
    entity: null
  },
  onLoad(options) {
    const id = options.id
    // 根据ID得到数据
    const entity = app.globalDate.stories.filter((item) => {
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