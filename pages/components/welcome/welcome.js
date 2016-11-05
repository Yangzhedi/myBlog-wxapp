
//获取应用实例
var app = getApp()
Page({
  data: {
    showData:''
  },
   onShow: function(){
       var that = this;
      console.log('welcome is show')
     wx.getStorage({
        key:'responseData',
        success:function(res){
         console.log(res.data);
         that.setData({
             showData:res.data
         })
     } 
});
    //   console.log(this.data.res)
  }
})
