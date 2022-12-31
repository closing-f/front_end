<template>
  <div id="piechart"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'form',
  data () {
      return {
        // 实时数据数组
          time_step:1,
          date: [1,2,3,4,5,6,7,8,9,10],
          sensor1: [],
          sensor2: [],
          sensor3: [],
          sensor4:[],
          sensor5:[],
          pie_option : {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Medium freshness data' },
        { value: 735, name: 'low freshness data' },
        { value: 580, name: 'high freshness data' },
        
      ]
    }
  ]
},
          // 折线图echarts初始化选项
          
          
      }
  },
  mounted () {
      this.pieChart = echarts.init(document.getElementById('piechart'), 'light');	// 初始化echarts, theme为light
      
      this.pieChart.setOption(this.pie_option);	// echarts设置初始化选项
      setInterval(this.add_piedata, 1000);	// 每三秒更新实时数据到折线图
     
  },
  methods: {
    // 获取当前时间
     
      // 添加实时数据
      add_piedata : function() {
        // 从接口获取数据并添加到数组
          
        
        
        // 重新将数组赋值给echarts选项
        
        this.pie_option.series[0].data[0].value = (Math.random() * 100).toFixed(3);
        this.pie_option.series[0].data[1].value = (Math.random() * 100).toFixed(3);
        this.pie_option.series[0].data[2].value = (Math.random() * 100).toFixed(3);
      
        
        this.pieChart.setOption(this.pie_option);
          
      }
  }
}
</script>

<style>
#piechart{
width: 100%;
height: 500px;
margin: 0 auto;
}
</style>
