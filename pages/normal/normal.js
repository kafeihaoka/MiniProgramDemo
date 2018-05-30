var WeCropper = require("../../lib/we-cropper/we-cropper.js");
var device = wx.getSystemInfoSync();

Page({
    data: {
        cropperOpt: {
            id: 'cropper',
            width: device.windowWidth,
            height: device.windowWidth,
            scale: 2.5,
            zoom: 8
        }
    },
    touchStart (e) {
        // console.log(this.wecropper)
        this.wecropper.touchStart(e)
    },
    touchMove (e) {
        this.wecropper.touchMove(e)
    },
    touchEnd (e) {
        this.wecropper.touchEnd(e)
    },
    getCropperImage () {
        this.wecropper.getCropperImage(function(src) {
            if (src) {
                wx.previewImage({
                    current: '', // 当前显示图片的http链接
                    urls: [src] // 需要预览的图片http链接列表
                })
            } else {
                console.log('获取图片地址失败，请稍后重试')
        }
    })
    },
    uploadTap () {
        console.log(1111)
        var self = this;
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success (res) {
                var src = res.tempFilePaths[0];

                self.wecropper.pushOrign(src)
            }
        })
    },
    onLoad (option) {
        var  cropperOpt  = this.data.cropperOpt;

        new WeCropper(cropperOpt)
            .on('ready', function (ctx) {
                console.log("wecropper is ready for work!")
            })
            .on('beforeImageLoad', function(ctx) {
                console.log('before picture loaded, i can do something')
                console.log("current canvas context:", ctx)
                wx.showToast({
                    title: '上传中',
                    icon: 'loading',
                    duration: 20000
                })
            })
            .on('imageLoad', function(ctx) {
                console.log("picture loaded")
                console.log("current canvas context:", ctx)
                wx.hideToast()
            })
    }
});
