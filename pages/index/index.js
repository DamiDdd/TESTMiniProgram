// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '曲豆豆',
    age: 20,
    members: [
      {id:1,name:'1a'},
      {id:2,name:'2b'},
      {id:3,name:'3c'},
    ],
    count:0
  },
  handleBtnClickAdd(){
    this.setData({
      count: this.data.count + 1,
    })
    console.log(this.data.count)
  },
  handleBtnClickMinus() {
    this.setData({
      count: this.data.count - 1,
    })
    console.log(this.data.count)
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