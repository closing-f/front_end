<template>
  <div>
<!--    <ul>-->
<!--      <li-->
<!--        v-for="item of msgList"-->
<!--        : key="item.id"-->
<!--      >-->
<!--      <p>-->
<!--      <span>{{ item.user }}</span>-->
<!--      <span>{{ new Date(item.dateTime) }}</span>-->
<!--      </p>-->
<!--      <p>消息:{{ item.msg }}</p></li>-->
<!--    </ul>-->
    <input type="text" placeholder="请输入消息" v-model="msg"/>
    <button @click="handleSendBtnClick">发送</button>
  </div>
</template>
<script>
// import {useWebsocket} from "../hooks";

export default {
  name: "Home",
  data() {
    return {
      msg: "",
      username: '',
      msgList: [],
    }
  },
  mounted(){
    this.username = localStorage.getItem("username");
    if ( !this.username){
      this.$router.push( "/login " );
      return;
    }
  },
  methods: {
    handleSendBtnClick(){},
//     handleMessage(e){
//         const _msg_data=JSON.parse(e.data);
//       this.msgList.push(_msg_data);
// }
  }
}

</script>

