//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    src: "https://apd-859da502b611eb4d0cb74f2ac10660b8.v.smtcdns.com/mv.music.tc.qq.com/Alzr-O51WJsoFkL7YZZntNFH_0AFZYCrKqv6B6ZCR1x8/7D10050657DBA8DD99D8EFD98E0F756966121B7552CB5C36E36A23E222F3339CA91B5EB9DCA7764CD495D8124C0BC8F4ZZqqmusic_default/qmmv_0b6byaaakaaaqmam6ntbjfpfjqaaaxaaabka.f9844.mp4?fname=qmmv_0b6byaaakaaaqmam6ntbjfpfjqaaaxaaabka.f9844.mp4",
    channelName: '',
    userInfo: {},
    musicList: [
      {
        name:'第一首歌',
        author:'coco'
      },
      {
        name:'第二首歌',
        author:'cici'
      },
      {
        name:'第三首歌',
        author:'cdcd'
      }
    ],
    images: [
      {
        url:'/pages/images/1.jpg'
      },
      {
        url:'/pages/images/2.jpg'
      },
      {
        url:'/pages/images/3.jpg'
      }
    ]
  },
  goToMusic: function(event) {
    console.log(event)
    let name = event.currentTarget.dataset.musicname
    let author = event.currentTarget.dataset.musicauthor
    var that = this
    that.channelName = name
    wx:wx.navigateTo({
      url: '/pages/music/music?name=' + name,
      events: {
        acceptDataFromOpenedPage: function(data) {
          console.log(data)
        }
      },
      success: (result) => {
        result.eventChannel.emit('acceptDataFromOpenerPage',{"name":name,"author":author})
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  }
})
