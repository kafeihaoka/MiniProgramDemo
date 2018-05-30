// pages/picture/picture.js
Page({
  data:{
    addblur:0,
    oldEffect:0,
    addretro:0,
    addBeati:0,
    picArray:[],
  },
  takephoto:function(){
    var self = this;
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        self.setData({
            picArray:res.tempFilePaths
        });
        console.log(res);
      }
    })
  },
  addblur:function(){
    var self = this;
    self.setData({
      addblur:1
    });
  },
  originpic:function(){
     var self = this;
    self.setData({
      addblur:0,
      oldEffect:0,
      addretro:0,
      addBeati:0
    });
  },
  addOld:function(){
    var self = this;
    self.setData({
      oldEffect:1
    });
  },
  addretro:function(){
    var self = this;
    self.setData({
      addretro:1
    });
  },
  addBeati:function(){
     var self = this;
    self.setData({
      addBeati:1
    });
  }
})