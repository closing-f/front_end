<template>
  <div>
    <b-overlay :show="!isConnect" rounded="sm">
    <!-- 路由匹配到的组件将显示在这里 -->
    <router-view></router-view>
    </b-overlay>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      isConnect: true,
    }
  },

  mounted() {

  }
};
</script>

<style></style>
