//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    music:[
      {
        id:1,
        name:'第一首歌',
        author:'coco',
        src:'http://ws.stream.qqmusic.qq.com/C400002Vo1xP3z9BVS.m4a?guid=5893333052&vkey=1B0121802AB04E1BA33706B1A28D2BB532D03D1518EA67CAA13EB0D8BC2BF3FFB47E0FA09AA331BBEC9DA50C376AFFAE3C0CBAA2F352D26F&uin=4910&fromtag=66'
      },
      {
        id:2,
        name:'第二首歌',
        author:'cici',
        src:'http://ws.stream.qqmusic.qq.com/C400002Vo1xP3z9BVS.m4a?guid=5893333052&vkey=1B0121802AB04E1BA33706B1A28D2BB532D03D1518EA67CAA13EB0D8BC2BF3FFB47E0FA09AA331BBEC9DA50C376AFFAE3C0CBAA2F352D26F&uin=4910&fromtag=66'
      },
      {
        id:3,
        name:'第三首歌',
        author:'cdcd',
        src:'http://ws.stream.qqmusic.qq.com/C400002Vo1xP3z9BVS.m4a?guid=5893333052&vkey=1B0121802AB04E1BA33706B1A28D2BB532D03D1518EA67CAA13EB0D8BC2BF3FFB47E0FA09AA331BBEC9DA50C376AFFAE3C0CBAA2F352D26F&uin=4910&fromtag=66'
      }
    ]
  }
})