App({
  globalData:{
    greeting: 'hello~'
  },
  onLaunch(options){
    console.log('APP - onLaunch', options);
  },
  onShow(options){
    console.log('APP - onShow', options);
  },
  onHide(){
    console.log('APP - onHide');
  },
  onError(error){
    console.log('APP - onError',error);
  }
})