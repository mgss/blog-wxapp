const app = getApp()
Page({
  data: {
    entities: null,
    currentVid: null,
    currentVideo: null,
  },
  player (event) {
    // 如果当前播放视频不为空，则让它停止播放
    if (this.data.currentVid !== null) {
      this.data.currentVideo.pause()
    }

    // 获取当前点击id的视频对象，并让其开始播放
    const currentVideo = wx.createVideoContext(`${ event.target.dataset.vid }`)
    currentVideo.play()

    // 将当前视频和视频ID保存为全局状态
    this.setData({
      currentVideo,
      currentVid: event.target.dataset.vid
    })
  },
  // readMore(event) {
  //   wx.navigateTo({
  //     url: `/pages/vehicles/show?id=${event.target.dataset.id}`,
  //   })
  // },
  onLoad() {
    this.setData({
      entities: app.globalDate.stories,
    })
  }
})