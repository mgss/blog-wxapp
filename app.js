App({
  globalData:{
    greeting: [
      'Hello~',
      'Hola~',
      '您好~'
    ]
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