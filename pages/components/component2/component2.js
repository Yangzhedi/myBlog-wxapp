Page({
    data: {
        imgUrls: [
        '../../../image/API.png',
        'http://www.uir.cn/upload/resources/image/2016/04/13/102287_1400x450.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        'http://www.uir.cn/upload/resources/image/2016/04/13/102287_1400x450.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        hidden1:true,
        chosen:''
    },
    changeIndicatorDots: function (e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeVertical: function (e) {
        this.setData({
            vertical: !this.data.vertical
        })
    },
    changeAutoplay: function (e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function (e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function (e) {
        this.setData({
            duration: e.detail.value
        })
    },
    bindViewTap: function() {
      console.log('222')
    },
    tap1:function(e){
      var obj = {}
      obj['hidden1'] = false 
      this.setData(obj)
    },
    mask1 : function(e) {
      var obj = {}
      obj['hidden1'] = true 
      this.setData(obj)
      wx.navigateTo({
        url: '../component1/component1'
      })
    },
    formSubmit: function(e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      wx.navigateTo({
        url: '../component1/component1'
      })
      console.log(this.data.chosen)
    },
    formReset: function(e) {
      console.log('form发生了reset事件，携带数据为：', e.detail.value)
      this.setData({
        chosen: ''
      })
    
    }
})

