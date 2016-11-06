//index.js
//获取应用实例
var app = getApp()
var searchData = [];
Page({
  data: {
    selectHide:false,
    inputValue:''
  },
  bindInput:function(e){
     this.setData({
       inputValue:e.detail.value
     })
  },
  setSearchStorage:function(){
    let data;
    let localStorageValue = [];
    searchData.push(this.data.inputValue)
    console.log(this.data.inputValue)
    console.log(searchData)
    wx.setStorage({
      key:"searchData",
      data:searchData
    });
    wx.navigateTo({
        url: '../../../index/index'
    })
    this.setData({
       inputValue:''
    })
    console.log(this.data.inputValue)
  },
  onLoad: function(options) {
    console.log('search is onload')
  },
})