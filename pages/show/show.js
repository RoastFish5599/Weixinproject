// pages/show/show.js
import * as echarts from '../../ec-canvas/echarts';
function initChart(canvas, width, height) {
  //初始化echarts实例
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  //指定图表的配置项和数据
  var option = {
    title: {
      text:'Echarts示例'
    },
    legend: {
      data: ['销量','单价'],
      left: 'right'  
    },
    //横坐标
    xAxis: {
      position: 'bottom',
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: {
        onZero: true
      }
    },
    //纵坐标
    yAxis: {
      inverse: false,
      type: 'value'
    },
    series: [
      {
        name: '销量',
        data: [5, 20, 36, 8, 10, 20, 24],
        type: 'bar'   //图表类型
      },
      {
        name: '单价',
        data: [15, 2, 26, 18, 20, 12, 14],
        type: 'bar'   //图表类型
      },
      {
        radius: 35,
        center: ['65%',80],
        data: [
          { name: 'X', value: 52 },
          { name: 'Y', value: 54 },
          { name: 'Z', value: 42 }
        ],
        type: 'pie'   //图表类型
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart,
    },
    test: {
      layLoad: true
    },
    xlist: [],
    ylist1: [],
    ylist2: [],
    ylist3: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //进行数据的初始化
    /**
     * 调用云函数
     */
    var that = this
    let xlist = ["菠萝","葡萄","柚子","苹果"]
    let goodNum=[23,13,16,30]
    let goodPrice=[2,6,1,3]
    //实现echarts的动态赋值
    that.getOption(xlist,goodNum,goodPrice); 
  },

  //获取图表参数
  getOption: function(xlist,ylist1,ylist2) {
    this.setData({
      xlist:xlist,
      ylist1:ylist1,
      ylist2:ylist2
    })
    this.initTestChart(this.data.xlist, this.data.ylist1, this.data.ylist2)
  },

  //初始化图表
  initTestChart: function(xlist,ylist1,ylist2) {
    this.myEcharts = this.selectComponent('#mychart')
    this.myEcharts.init((canvas,width,height) => {
      const chart = echarts.init(canvas,null,{
        width: width,
        height: height
      })
      this.setOption(chart,xlist,ylist1,ylist2)
      this.chart = chart;
      return chart;
    });
  },

  //设置图标参数
  setOption: function(chart,xlist,ylist1,ylist2) {
    var option = {
      title: {
        text: '商品销售表格'
      },
      legend: {
        data: ['商品数量', '商品价格'],
        left: 'right'
      },
      xAxis: {
        type: 'category',
        data: xlist
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name:'商品数量',
          data: ylist1,
          type:'line'
        },
        {
          name:'商品价格',
          data: ylist2,
          type: 'line'
        }
      ]
    };
    chart.setOption(option);
  },


})