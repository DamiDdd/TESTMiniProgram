// pages/index/index.js
// 演示获取全局变量
const app = getApp()
console.log(app.globalData.name)

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleGetUserInfo(event) {
    console.log("getUserInfo")
    console.log(event)
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
    console.log("refresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("end")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})