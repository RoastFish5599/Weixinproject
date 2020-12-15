// pages/music/music.js
const myAudio = wx.createInnerAudioContext();
var appInstance = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    isplay: true,
    musicid: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log(data)
      that.setData({
        name: options.name,
        author: data.author
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let music = appInstance.globalData.music
    for(let i=0;i<music.length;i++)
    {
      if (music[i].name == this.data.name)
      {
        var musicsrc = music[i].src
        this.data.musicid = music[i].id
      }
    }
    myAudio.autoplay = true;
    console.log(musicsrc)
    myAudio.src = musicsrc
    myAudio.onPlay(() => {
      console.log('开始播放')
    })
    myAudio.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
    myAudio.play(()=>{
      console.log('播放')
    })
  },

  stopMusic: function() {
    let isplay = this.data.isplay
    console.log(isplay)
    if(isplay == true){
      this.setData({
        isplay:false
      })
      myAudio.pause()
    } else {
      this.setData({
        isplay:true
      })
      myAudio.play()
    }
  },

  lastMusic: function() {
    let id = this.data.musicid
    let music = appInstance.globalData.music
    if (id < music.length) {
      for(let i=0; i<music.length; i++) {
        if(music[i].id == id+1) {
          myAudio.src = music[i].src
          this.setData({
            name:music[i].name,
            author:music[i].author
          })
        }
        this.data.musicid++
      }
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
    myAudio.stop(()=>{
      console.log('暂停')
    })
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