//main.js
Page({
  data: {
     imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    searchToggle:true
  },
  onLoad: function () {
    this.setData({
      
    })
  },
  tap() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  goSearch(){
    wx.navigateTo({
      url: '../index/index'
    })
  },
  goP() {
    wx.navigateTo({
      url: '../picture/picture'
    })
  },
    goN() {
        wx.navigateTo({
            url: '../normal/normal'
        })
    },
  onPullDownRefresh:function(){
    wx.showToast({
      title: '上拉',
      duration: 1000,
      mask: true
    })
      console.log(1111)
  },
  onReachBottom: function () {
    wx.showLoading({
      title: 'loading',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  onPageScroll: function (obj) {
    if (obj.scrollTop>25){
      this.setData({
        searchToggle: false
      })
    }else{
      this.setData({
        searchToggle: true
      })
    }
  }
})