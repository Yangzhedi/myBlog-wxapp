var app = getApp()
Page({
  data: {
    iconSize: [30],
    iconColor: ['green'],
    iconType: ['search'],
    motto: '欢迎登录WXapp',
    userInfo: {},
    hide:true
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    
    wx.login({
      success:function(res){
        if(res.code){
          console.log(res)
        }else{
          console.log("获取用户登录态失败！" + res.errMsg);
        }
      }
    });  
    app.getUserInfo(function(res){
      //更新数据
      that.setData({
        userInfo:res
      })
      console.log(res)
    })
  },
  hideOrShow:function(){
    this.setData({
      hide:!this.data.hide
    })
  }
})

