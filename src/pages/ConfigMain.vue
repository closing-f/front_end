<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">菜单栏</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#/config">主机配置</b-nav-item>
          <b-nav-item href="#/form">获取报表</b-nav-item>
          <b-nav-item href="#/subinfor">获取从控机信息</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submitConfig">Search</b-button>
          </b-nav-form>

<!--          <b-nav-item-dropdown text="Lang" right>-->
<!--            <b-dropdown-item href="#">EN</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">ES</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">RU</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">FA</b-dropdown-item>-->
<!--          </b-nav-item-dropdown>-->

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#/">Profile</b-dropdown-item>
            <b-dropdown-item href="#/">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
<!--    <label>请选择工作模式</label>-->
<!--    <br>-->
<!--    <div class="custom-control custom-radio">-->
<!--      <input type="radio" id="customRadio1" name="customRadio" value="0" @click="handleModel" checked class="custom-control-input">-->
<!--      <label class="custom-control-label" for="customRadio1">制冷模式</label>-->
<!--    </div>-->
<!--    <div class="custom-control custom-radio">-->
<!--      <input type="radio" id="customRadio2" name="customRadio" value="1" class="custom-control-input">-->
<!--      <label class="custom-control-label" for="customRadio2">制热模式</label>-->
<!--    </div>-->
    <br>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">工作模式选择</label>
      </div>
      <select class="custom-select" v-model=pattern id="inputGroupSelect01">
        <option selected value="cold">制冷模式</option>
        <option value="warm">制热模式</option>
      </select>
    </div>
    <br>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">工作温度调整</label>
      </div>
      <input type="number" v-model="temperature" class="form-control" id="fnge">
    </div>
    <br>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">工作频率调整</label>
      </div>
      <input type="number" v-model="frequency" class="form-control" id="inputfrequecy">
    </div>
    <br>

    <button type="button" class="btn btn-primary btn-lg btn-block">重置</button>
    <button type="button" @click="submitConfig" class="btn btn-secondary btn-lg btn-block">提交</button>
    <br>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: 'ConfigMain',
  computed:{
    ...mapState("mainConfig", [
      "temperature",
      "pattern",
      "frequency",
      "success",
      "error",
    ]),
    temperature: {
      get() {
        return this.$store.state.mainConfig.temperature;
      },
      set(value) {
        this.$store.commit("mainConfig/setTemperature", value);
      }
    },
    pattern: {
      get() {
        return this.$store.state.mainConfig.pattern;
      },
      set(value) {
        this.$store.commit("mainConfig/setPattern", value);
      }
    },
    frequency: {
      get() {
        return this.$store.state.mainConfig.frequency;
      },
      set(value) {
        this.$store.commit("mainConfig/setFrequency", value);
      }
    }
  },
  // watch:{
  //   success:function() {
  //       // this.$store.commit("mainConfig/setSuccess");
  //      // this.$store.commit("mainConfig/setSuccess",false);
  //         alert(this.$store.state.mainConfig.pattern);
  //     },
  //   error:function(){
  //     if(this.$store.state.mainConfig.error===true){
  //       this.$store.commit("mainConfig/setError",false);
  //       alert('config error');
  //     }
  //   }
  // },
  methods: {
    ...mapActions("mainConfig", ["submitConfig"])
 },
}
</script>
