const app = getApp()

Page({
  data: {
    greeting : app.globalData.greeting
  },
  onLoad(){
    console.log('page - 页面加载');
  },
  onShow(){
    console.log('page - 页面显示');
  },
  onReady(){
    console.log('page - 页面首次渲染完毕');
  },
  onHide(){
    console.log('page - 页面隐藏');
  },
  onUnload(){
    console.log('page - 页面已卸载');
  }
})