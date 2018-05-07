import helper from '../../libs/helper'
const app = getApp()

Page({
  data: {
    greeting : ''
  },
  tapGreeting(event){
    console.log(event);
    this.setData({
      greeting: helper.randItem(app.globalData.greeting)
    })
  },
  onLoad(){
    console.log('page - 页面加载');
    this.setData({
      greeting: helper.randItem(app.globalData.greeting)
    })
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
  },
  onPullDownRefresh() {
    console.log('页面下拉刷新');
    this.setData({
      greeting: helper.randItem(app.globalData.greeting)
    })
  },
  onReachBottom(){
    console.log('页面到底了');
  },
  onPageScroll(calculations){
    // console.log(calculations);
  }
})