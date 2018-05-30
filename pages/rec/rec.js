// pages/rec/rec.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:"",
    vedioSrc:"",
    cameraChangeTag:"back",
    hiddenTag:"true",
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (wx.createCameraContext()) {
      // this.cameraContext = wx.createCameraContext('myCamera')
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示  
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    };

    this.audioCtx = wx.createAudioContext('myAudio');
  },

  takePhoto() {
      this.setData({
          hiddenTag: false
      });
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath,
            hiddenTag: true
        })
      }
    })
  },

  openPhotoAlbum(){
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
          this.setData({
              src:tempFilePaths[0],
              hiddenTag: true
          })
      }
    })
  },

    openVedio(){
        this.setData({
            hiddenTag: false
        });
        this.audioCtx.play();
        const ctx = wx.createCameraContext();
        ctx.startRecord ({
            success: (res) => {
            this.setData({
                vedioSrc: res.tempVideoPath
            })
        }
        })
    },
    stopVedio(){
        this.setData({
            hiddenTag: true
        });
        this.audioCtx.pause();
        const ctx = wx.createCameraContext();
        ctx.stopRecord  ({
            success: (res) => {
            this.setData({
                vedioSrc: res.tempVideoPath
            })
        }
        })
    },
    changeDevicePosition(){
        if(this.data.cameraChangeTag==="back"){
            this.setData({
                cameraChangeTag: "front"
            })
        }else{
            this.setData({
                cameraChangeTag: "back"
            })
        }
    },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})