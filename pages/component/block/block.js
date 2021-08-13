// pages/componets/block/block.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myProperty: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bap() {
      console.log(this.myProperty)
    },
    toPath(even) {
      var $this = this;
      const { path } = even.currentTarget.dataset || {}
      wx.switchTab({ url: path })
    }
  }
})
