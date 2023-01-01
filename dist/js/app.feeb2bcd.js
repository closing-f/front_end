(function(e){function t(t){for(var a,o,n=t[0],l=t[1],d=t[2],u=0,m=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(m.length)m.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,n=1;n<s.length;n++){var l=s[n];0!==i[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var d=0;d<n.length;d++)t(n[d]);var c=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"45ab":function(e,t,s){e.exports=s.p+"media/uav_test.f15e80d0.mp4"},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-overlay",{attrs:{show:!e.isConnect,rounded:"sm"}},[s("router-view")],1)],1)},r=[],o={name:"App",data(){return{isConnect:!0}},mounted(){}},n=o,l=s("2877"),d=Object(l["a"])(n,i,r,!1,null,null,null),c=d.exports,u=s("8c4f"),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"uav_ui"}},[s("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[s("b-navbar-brand",{attrs:{href:"#"}},[e._v("Uav Data Acquisition")]),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{href:"#/login"}},[e._v("Sample")])],1)],1)],1),s("br"),s("div",{staticClass:"row"},[e._m(0),s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v("Virtual UAV Map")]),e._m(1),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"button"},on:{click:e.playVid}},[e._v(e._s(e.video_state))])]),s("div",{staticClass:"col-sm-6"},[s("button",{staticClass:"btn btn-secondary btn-lg btn-block",attrs:{type:"button"},on:{click:e.resetVid}},[e._v("Reset")])])])])])]),e._m(2)])],1)},h=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-3"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v("AoI time series diagram for each sensor (Todo)")]),s("div",{attrs:{id:"myChart"}})])]),s("br"),s("br"),s("br"),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v("Overall AoI time series diagram")]),s("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"averageChart"}})])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("video",{staticClass:"col-sm-12",attrs:{id:"video1"}},[a("source",{attrs:{src:s("45ab"),type:"video/mp4"}}),a("source",{attrs:{src:"/uav_test.ogg",type:"video/ogg"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-sm-3"},[s("div",{staticClass:"row-sm-6"},[s("div",{staticClass:"card",staticStyle:{width:"100%",height:"100%"}},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v("Sensor data freshness diagram")]),s("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"piechart"}})])])]),s("br"),s("br"),s("br"),s("div",{staticClass:"row-sm-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v("Algorithm effect comparison diagram (Todo)")]),s("img",{staticClass:"img-fluid border-primary",staticStyle:{width:"100%",height:"300px"},attrs:{src:"https://s2.loli.net/2022/12/04/49HRFO5CLDeT8f6.png",alt:"..."}})])])])])}],p=(s("14d9"),s("313e")),v=s.n(p),f={name:"login",data(){return{start_pause:!0,video_state:"Start",time_step:1,average_time_step:1,average_date:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],date:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],sensor1:[],sensor2:[],sensor3:[],sensor4:[],average_sensor:[],sensor_excel:[[1,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5],[1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,2,3,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,10,0,0,0,0,0],[1,2,3,2,1.25,1.5,1.75,2,2.25,2.5,2.5,2.5,2.5,2.5,2.75,3,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,.25,.5,.75,1,1.25]],pie_excel:[[0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,4,4,3,3,3,3,3,3,4,4,4,4,3,3,3],[4,4,4,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0]],echartsOption:{title:{nameTextStyle:{fontStyle:"oblique"}},backgroundColor:"#FFFAF0",legend:{data:["Sensor1","Sensor2","Sensor3","Sensor4"]},xAxis:{name:"Time",nameTextStyle:{fontWeight:600,fontSize:18},type:"category",boundaryGap:!1,data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},yAxis:{name:"AoI ",nameTextStyle:{fontWeight:600,fontSize:18},type:"value",min:0,max:12,interval:2,scale:!0},tooltip:{trigger:"axis"},grid:{right:140},series:[{name:"Sensor1",type:"line",symbol:"emptyCircle",smooth:!0,labelLayout:{moveOverlap:"shiftY"},emphasis:{focus:"series"},data:this.sensor1},{name:"Sensor2",type:"line",symbol:"rect",smooth:!0,labelLayout:{moveOverlap:"shiftY"},emphasis:{focus:"series"},data:this.sensor2},{name:"Sensor3",type:"line",symbol:"triangle",smooth:!0,labelLayout:{moveOverlap:"shiftY"},emphasis:{focus:"series"},data:this.sensor3},{name:"Sensor4",type:"line",symbol:"pin",smooth:!0,labelLayout:{moveOverlap:"shiftY"},emphasis:{focus:"series"},data:this.sensor4}]},average_option:{title:{nameTextStyle:{fontStyle:"oblique"}},axisPointer:{animation:!1},backgroundColor:"#FFFAF0",legend:{data:["SensorAverage"]},xAxis:{name:"Time",nameTextStyle:{fontWeight:600,fontSize:18},type:"category",boundaryGap:!1,data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},yAxis:{name:"AoI ",nameTextStyle:{fontWeight:600,fontSize:18},type:"value",min:0,max:6,interval:2,scale:!0},tooltip:{trigger:"axis"},grid:{right:140},series:[{name:"SensorAverage",type:"line",symbol:"emptyCircle",animation:!0,animationEasing:"linear",smooth:!0,labelLayout:{moveOverlap:"shiftY"},emphasis:{focus:"series"},data:this.average_sensor}]},pie_option:{tooltip:{trigger:"item"},legend:{top:"5%",left:"center"},backgroundColor:"#FFFAF0",series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:3},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:20,fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"Medium freshness"},{value:735,name:"low freshness"},{value:580,name:"high freshness"}]}]}}},mounted(){this.myChart=v.a.init(document.getElementById("myChart"),"vintage"),this.myChart.setOption(this.echartsOption),setInterval(this.addData,1e3),this.averageChart=v.a.init(document.getElementById("averageChart"),"vintage"),this.averageChart.setOption(this.average_option),setInterval(this.addAverageData,1e3),this.pieChart=v.a.init(document.getElementById("piechart"),"vintage"),this.pieChart.setOption(this.pie_option),setInterval(this.add_piedata,3e3),window.onresize=()=>{this.resize_windows()}},methods:{resize_windows:function(){this.myChart.resize(),this.averageChart.resize(),this.pieChart.resize()},playVid:function(){var e=document.getElementById("video1");1==this.start_pause?(e.play(),this.video_state="Pause",this.start_pause=!1):(e.pause(),this.video_state="Start",this.start_pause=!0)},resetVid:function(){document.getElementById("video1").load();var e=document.getElementById("video1");e.pause()},addData:function(){var e=document.getElementById("video1"),t=e.currentTime,s=parseInt(t),a=.3;s<30&&s>.5&&(this.sensor1.push((this.sensor_excel[0][s]+Math.random()*a).toFixed(3)),this.sensor2.push((this.sensor_excel[1][s]+.5+Math.random()*a).toFixed(3)),this.sensor3.push((this.sensor_excel[2][s]+1+Math.random()*a).toFixed(3)),this.sensor4.push((this.sensor_excel[3][s]+1.5+Math.random()*a).toFixed(3))),this.echartsOption.xAxis.data=this.date,this.echartsOption.series[0].data=this.sensor1,this.echartsOption.series[1].data=this.sensor2,this.echartsOption.series[2].data=this.sensor3,this.echartsOption.series[3].data=this.sensor4,this.myChart.setOption(this.echartsOption)},addAverageData:function(){var e=document.getElementById("video1"),t=e.currentTime,s=parseInt(t),a=0;s<30&&s>.5&&this.average_sensor.push((this.sensor_excel[4][s]+Math.random()*a).toFixed(3)),this.average_option.xAxis.data=this.average_date,this.average_option.series[0].data=this.average_sensor,this.averageChart.setOption(this.average_option)},add_piedata:function(){var e=document.getElementById("video1"),t=e.currentTime,s=parseInt(t),a=0;s<30&&s>.5&&(this.pie_option.series[0].data[0].value=(this.pie_excel[0][s]+Math.random()*a).toFixed(3),this.pie_option.series[0].data[1].value=(this.pie_excel[1][s]+Math.random()*a).toFixed(3),this.pie_option.series[0].data[2].value=(this.pie_excel[2][s]+Math.random()*a).toFixed(3)),this.pieChart.setOption(this.pie_option)}}},g=f,b=(s("76fc"),Object(l["a"])(g,m,h,!1,null,null,null)),y=b.exports,_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"piechart"}})},C=[],S={name:"form",data(){return{time_step:1,date:[1,2,3,4,5,6,7,8,9,10],sensor1:[],sensor2:[],sensor3:[],sensor4:[],sensor5:[],pie_option:{tooltip:{trigger:"item"},legend:{top:"5%",left:"center"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:40,fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"Medium freshness data"},{value:735,name:"low freshness data"},{value:580,name:"high freshness data"}]}]}}},mounted(){this.pieChart=v.a.init(document.getElementById("piechart"),"light"),this.pieChart.setOption(this.pie_option),setInterval(this.add_piedata,1e3)},methods:{add_piedata:function(){this.pie_option.series[0].data[0].value=(100*Math.random()).toFixed(3),this.pie_option.series[0].data[1].value=(100*Math.random()).toFixed(3),this.pie_option.series[0].data[2].value=(100*Math.random()).toFixed(3),this.pieChart.setOption(this.pie_option)}}},x=S,O=(s("ac1c"),Object(l["a"])(x,_,C,!1,null,null,null)),w=O.exports;a["default"].use(u["a"]);var I=new u["a"]({routes:[{path:"/",component:y},{path:"/login",name:"login",component:y},{path:"/form",name:"form",component:w}]}),F=s("2f62"),A={state:{starting_date:"",ending_date:"",start_room:-1,end_room:-1,roomList:[0,1,2,3],formList:[{roomId:1,turnTimes:3,requeirlist:[{startTime:1,endTime:1,startT:23,endT:25,consume:2,cost:2}]}],summaryList:[],showSDbutton:!1,subInforlist:[{state:!1,roomId:1e4,roomT:25,roomM:"制冷"},{state:!0,roomId:1,roomT:25,roomM:"制热"},{state:!0,roomId:1,roomT:25,roomM:"制冷"}]},mutations:{setRoomList(e,t){e.roomList=t},setSubInforList(e,t){e.subInforlist=t},setStartDate(e,t){e.starting_date=t},setEndDate(e,t){e.ending_date=t},setStartRoom(e,t){e.start_room=t},setEndRoom(e,t){e.end_room=t},setFormList(e,t){e.formList=t},setSummaryList(e,t){e.summaryList=t},setShowButton(e,t){e.showSDbutton=t}},actions:{submitRequire({state:e}){alert(e.starting_date),k.send(JSON.stringify({type:"FORM",ACK:1}))},requireSuccess({commit:e}){e("setShowButton",!0)},requireFalse(){alert("require error")},getSummary(){I.push("/summary")},getDetail(){I.push("/formall")}},namespaced:!0},E={state:{userID:"",roomID:"",adminName:"",adminPassword:""},mutations:{setRoomId(e,t){e.roomID=t},setUserID(e,t){e.userID=t},setAdminName(e,t){e.adminName=t},setAdminPassword(e,t){e.adminPassword=t}},actions:{adminLogin({state:e}){k.send(JSON.stringify({type:"LOGINADMIN",password:e.password}))},adminSuccess(){I.push("/config")},loginError(){alert("输入信息错误，请检查")}},namespaced:!0},L={state:{temperature:22,pattern:"cold",frequency:1e3,success:!1,error:!1},mutations:{setTemperature(e,t){e.temperature=t},setPattern(e,t){e.pattern=t},setFrequency(e,t){e.frequency=t},setSuccess(e,t){e.success=t},setError(e,t){e.error=t}},actions:{submitConfig({state:e}){k.send(JSON.stringify({type:"CONFIG",ACK:1,pattern:e.pattern}))},configError(){alert("输入信息错误，请检查")},configSuccess(){alert("配置成功")}},namespaced:!0};const M="ws://localhost:8000";function T(){const e=new WebSocket(M),t=()=>{s()};function s(){e.addEventListener("open",a,!1),e.addEventListener("close",i,!1),e.addEventListener("error",r,!1),e.addEventListener("message",o,!1)}function a(e){console.log("Websocket vue open",e)}function i(e){console.log("Websocket close",e)}function r(e){console.log("Websocket Error",e)}function o(e){let t=JSON.parse(e.data),s=t["type"];switch(s){case"LOGINADMIN":console.log("LOGINADMIN"),n(t);break;case"CONFIG":console.log("CONFIG"),l(t);break;case"FORM":console.log("FORM"),d(t);break;default:console.log("default")}}function n(e){0===e["ACK"]?N.dispatch("login/loginError"):(N.dispatch("login/adminSuccess"),console.log("success login admin"))}function l(e){0===e["ACK"]?N.dispatch("mainConfig/configError"):N.dispatch("mainConfig/configSuccess")}function d(e){0===e["ACK"]?N.dispatch("form/requireFalse"):N.dispatch("form/requireSuccess")}return t(),e}var D=T;a["default"].use(F["a"]);const k=D();var N=new F["a"].Store({modules:{form:A,login:E,mainConfig:L}}),q=s("2819"),P=s.n(q),j=s("5f5b"),z=s("b1e0");s("f9e3"),s("2dd8");a["default"].use(P.a),a["default"].use(j["a"]),a["default"].use(z["a"]),a["default"].config.productionTip=!1,new a["default"]({router:I,store:N,render:e=>e(c)}).$mount("#app")},"76fc":function(e,t,s){"use strict";s("8c70")},"8b64":function(e,t,s){},"8c70":function(e,t,s){},ac1c:function(e,t,s){"use strict";s("8b64")}});
//# sourceMappingURL=app.feeb2bcd.js.map