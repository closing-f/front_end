<template>
  <div id="uav_ui">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">Uav Data Acquisition</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#/login">Sample</b-nav-item>
          
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      
      </b-collapse>
    </b-navbar>
<br>
  <div class="row">
  <div class="col-sm-3">
    
      
      <div class="card">
      <div class="card-body">
        <h4 class="card-title">AoI time series diagram for each sensor (Todo)</h4>
        

      <div id='myChart'>
      </div>

        <!-- <div id="" ></div> -->
        <!-- <img src="https://s2.loli.net/2022/12/04/D9j2JYhgpao3tEB.png" class="img-fluid border-primary"  alt="..."> -->
       


      </div>
    </div>
  
    <br>
    <br>
    <br>
    
      <div class="card">
      <div class="card-body">
        <h4 class="card-title">Overall AoI time series diagram</h4>
        
     
        
        
        <!-- <img src="https://s2.loli.net/2022/12/04/YUfeg7rdq1FpNcS.png"  class="img-fluid border-primary"  alt="..."> -->
        <div id='averageChart' style="width: 100%; height: 300px">
          
    </div>
      </div>
    </div>
   
    
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Virtual UAV Map</h4>
        <!-- <img src="https://s2.loli.net/2022/12/08/L9nPoafYA6FTctB.png" class="img_uav" alt="..."> -->
        
        <!-- <img src="https://s2.loli.net/2022/12/03/l4Pw5UZhgyxH2t8.png" class="img-fluid border-primary"  alt="..."> -->
        <video class="col-sm-12" id="video1">
  <source src="./uav_test.mp4" type="video/mp4">
  <source src="/uav_test.ogg"  type="video/ogg">
</video>
        <!-- <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Q2WHGpGtKRI" allowfullscreen></iframe>
</div> -->
        <br>
        <br>
    <br>
    <br>
        <div class="row">
          <div class="col-sm-6"><button type="button" @click="playVid" class="btn btn-primary btn-lg btn-block">{{video_state}}</button>
</div>

          <div class="col-sm-6">
            <button type="button" @click="resetVid" class="btn btn-secondary btn-lg btn-block">Reset</button>
          </div>
        </div>
        
      </div>  
    </div>
  </div>
  <div class="col-sm-3">
    <div class="row-sm-6">
      <div class="card" style="width: 100%; height: 100%">
      <div class="card-body">
        <h4 class="card-title">Sensor data freshness diagram</h4>
        <div id="piechart" style="width: 100%; height: 300px"></div>
        <!-- <img src="https://s2.loli.net/2022/12/04/JLPQFX8YuwgBoim.png" class="img-fluid border-primary"  alt="..."> -->
       


      </div>
    </div>
    </div>
    <br>
    <br>
    <br>
    <div class="row-sm-6">
      <div class="card">
      <div class="card-body">
        <h4 class="card-title">Algorithm effect comparison diagram (Todo)</h4>
        
        <img src="https://s2.loli.net/2022/12/04/49HRFO5CLDeT8f6.png"  style="width: 100%; height: 300px" class="img-fluid border-primary"  alt="...">
     
      </div>
    </div>
    </div>
    
  </div>
</div>
</div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'login',
  data(){
    return {
      start_pause:true,
      video_state:"Start",
      time_step:1,
      average_time_step:1,
      average_date:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
          date: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
          sensor1: [],
          sensor2: [],
          sensor3: [],
          sensor4:[],
         
          average_sensor:[],
          sensor_excel:[
            [1,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,],
            [1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [1,2,3,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,10,0,0,0,0,0,],
            [1,2,3,2,1.25,1.5,1.75,2,2.25,2.5,2.5,2.5,2.5,2.5,2.75,3,0.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,0.25,0.5,0.75,1,1.25,],
          ],
          pie_excel:[
            [0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,4,4,3,3,3,3,3,3,4,4,4,4,3,3,3,],
            [4,4,4,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,],
            [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,],

          ],
          // 折线图echarts初始化选项
          echartsOption: {
            title:{
                nameTextStyle:{
                    fontStyle :'oblique',
                },  
            },
            backgroundColor: '#FFFAF0',
              legend: {
                  data: ['Sensor1', 'Sensor2','Sensor3','Sensor4'],
              },
              xAxis: {
                  name: 'Time',
                  nameTextStyle: {
                      fontWeight: 600,
                      fontSize: 18
                  },
                  
                  type: 'category',
                  
                boundaryGap: false,
                data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
              },
              yAxis: {
                  name: 'AoI ',
                  nameTextStyle: {
                      fontWeight: 600,
                      fontSize: 18
                  },
                  
                  type: 'value',
                  min: 0,
	max: 12,
	interval: 2,
                  scale: true,
                  
              },
              
              tooltip: {
                  trigger: 'axis',
              },
              grid: {
                right: 140
                },
              series: [
                  {
                      name:'Sensor1',
                      type:'line',
                      symbol: 'emptyCircle',
                      smooth:true,
                       labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                      data: this.sensor1,	// 绑定实时数据数组
                  },
                  {
                      name:'Sensor2',
                      type:'line',
                      symbol: 'rect',
                        smooth:true,
                       labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                      data: this.sensor2,	// 绑定实时数据数组
                  },
                  {
                      name:'Sensor3',
                      type:'line',
                      symbol: 'triangle',
                      smooth:true,
                       labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                      data: this.sensor3,	// 绑定实时数据数组
                  },
                  {
                      name:'Sensor4',
                      type:'line',
                      symbol: 'pin',
                      smooth:true,
                       labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                      data: this.sensor4,	// 绑定实时数据数组
                  },
                  
              ]
          },
          average_option: {
            title:{
                nameTextStyle:{
                    fontStyle :'oblique',
                },
                
            },
            axisPointer: {
      animation: false
    },
    backgroundColor: '#FFFAF0',
              legend: {
                  data: ['SensorAverage'],
              },
              xAxis: {
                  name: 'Time',
                  nameTextStyle: {
                      fontWeight: 600,
                      fontSize: 18
                  },
                 
                  type: 'category',
                  
                boundaryGap: false,
                data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
              },
              yAxis: {
                  name: 'AoI ',
                  nameTextStyle: {
                      fontWeight: 600,
                      fontSize: 18
                  },
             
                  type: 'value',
                  min: 0,
	max: 6,
	interval: 2,
                  scale: true,
                  
                  
              },
              
              tooltip: {
                  trigger: 'axis',
              },
              grid: {
                right: 140
                },
              series: [
                  {
                    
                      name:'SensorAverage',
                      type:'line',
                      symbol: 'emptyCircle',
                      animation:true,
                      animationEasing :'linear',
                      smooth:true,
                       labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                      data: this.average_sensor,	// 绑定实时数据数组
                  },
                  
              ]
          },
          pie_option : {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  backgroundColor: '#FFFAF0',
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 3
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Medium freshness' },
        { value: 735, name: 'low freshness' },
        { value: 580, name: 'high freshness' },
        
      ]
    }
  ]
},

      
    }
  },
  mounted () {
      this.myChart = echarts.init(document.getElementById('myChart'), 'vintage');	// 初始化echarts, theme为light
      
      this.myChart.setOption(this.echartsOption);	// echarts设置初始化选项
      setInterval(this.addData, 1000);	// 每三秒更新实时数据到折线图
      
      this.averageChart = echarts.init(document.getElementById('averageChart'), 'vintage');	// 初始化echarts, theme为light
      
      this.averageChart.setOption(this.average_option);	// echarts设置初始化选项
      setInterval(this.addAverageData, 1000);	// 每三秒更新实时数据到折线图
      this.pieChart = echarts.init(document.getElementById('piechart'),'vintage' );	// 初始化echarts, theme为light
      
      this.pieChart.setOption(this.pie_option);	// echarts设置初始化选项
      setInterval(this.add_piedata, 3000);	// 每三秒更新实时数据到折线图
      
      window.onresize = ()=>{
        this.resize_windows();
      }
    
      
     
  },

methods: {
  
    resize_windows: function(){
      
        // 第六步，执行echarts自带的resize方法，即可做到让echarts图表自适应
        this.myChart.resize();
        this.averageChart.resize();
        this.pieChart.resize();
        // 如果有多个echarts，就在这里执行多个echarts实例的resize方法,不过一般要做组件化开发，即一个.vue文件只会放置一个echarts实例
        /*
        this.myChart2.resize();
        this.myChart3.resize();
        ......
        */

    },
     playVid:function()
    { 
      // document.getElementById("video1").load()
  var myVideo=document.getElementById("video1"); 
  if(this.start_pause==true){
    myVideo.play(); 
  this.video_state="Pause"
  this.start_pause=false;
  }
  else{
    myVideo.pause(); 
  this.video_state="Start"
  this.start_pause=true;
  }
  
    },
    resetVid:function()
    { 
      document.getElementById("video1").load()
  var myVideo=document.getElementById("video1"); 
  myVideo.pause(); 
    },
    addData : function() {
        // 从接口获取数据并添加到数组
        var myVideo=document.getElementById("video1"); 
        var value=myVideo.currentTime;
        var time=parseInt(value);
        var random_value=0.3;
        // var time_step=this.time_step;
        if(time<30&&time>0.5){
          this.sensor1.push((this.sensor_excel[0][time]+Math.random()*random_value).toFixed(3));
        this.sensor2.push((this.sensor_excel[1][time]+0.5+Math.random()*random_value).toFixed(3));
        this.sensor3.push((this.sensor_excel[2][time]+1+Math.random()*random_value).toFixed(3));
        this.sensor4.push((this.sensor_excel[3][time]+1.5+Math.random()*random_value).toFixed(3));
        
        }
        

        
        // if(time_step>30){
        //     this.sensor1.shift();
        //     this.sensor2.shift();
        //     this.sensor3.shift();
        //     this.sensor4.shift();
            
        //     this.date.push(time_step);
        //     this.date.shift();
        // }
        
        // this.time_step=this.time_step+1;
        
        // 重新将数组赋值给echarts选项
        this.echartsOption.xAxis.data = this.date;
        this.echartsOption.series[0].data = this.sensor1;
        this.echartsOption.series[1].data = this.sensor2;
        this.echartsOption.series[2].data = this.sensor3;
        this.echartsOption.series[3].data = this.sensor4;
     
        
        this.myChart.setOption(this.echartsOption);
          
      },
    addAverageData : function() {
        // 从接口获取数据并添加到数组
          
        var myVideo=document.getElementById("video1"); 
        var value=myVideo.currentTime;
        var time=parseInt(value);
        var random_value=0
        // var time_step=this.time_step;
        if(time<30&&time>0.5){
          this.average_sensor.push((this.sensor_excel[4][time]+Math.random()*random_value).toFixed(3));
        
        }
        
        
        

        // var time_step=this.average_time_step
        // if(time_step>30){
            
        //     this.average_sensor.shift();

        //     this.average_date.push(time_step);
        //     this.average_date.shift();
        // }
        
        // this.average_time_step=this.average_time_step+1;
        
        // 重新将数组赋值给echarts选项
        this.average_option.xAxis.data = this.average_date;
        this.average_option.series[0].data = this.average_sensor;
      
        
        this.averageChart.setOption(this.average_option);
          
      },
      add_piedata : function() {
        // 从接口获取数据并添加到数组
          
        var myVideo=document.getElementById("video1"); 
        var value=myVideo.currentTime;
        var time=parseInt(value);
        var random_value=0;
        // var time_step=this.time_step;
        if(time<30&&time>0.5){
          this.pie_option.series[0].data[0].value = (this.pie_excel[0][time]+Math.random() * random_value).toFixed(3);
        this.pie_option.series[0].data[1].value = (this.pie_excel[1][time]+Math.random() * random_value).toFixed(3);
        this.pie_option.series[0].data[2].value = (this.pie_excel[2][time]+Math.random() * random_value).toFixed(3);
        
        }
        
        // 重新将数组赋值给echarts选项
        
       
      
        
        this.pieChart.setOption(this.pie_option);
          
      }
   
  }
}
</script>
<style>
#myChart {
  width: 100%;
height: 300px;
margin: 0 auto;
};

#averageChart {
  width: 100%;
height: 300px;
margin: 0 auto;
}
</style>