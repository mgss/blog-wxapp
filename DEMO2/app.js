App({
  globalDate:{
    slides:[1,2,3] 
  },
  onLaunch(){
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success: (res) => {
        // success
        Object.assign(this.globalDate, res.data)
        const currentPages = getCurrentPages()
        if (currentPages.length !== 0) {
          currentPages[currentPages.length - 1].onLoad()
        }
      },
    })
  }
})
