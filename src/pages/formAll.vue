<template>

  <div class="container">

    <div class="form-inline row">
      <h2 class="pr-5">详细报表
      </h2>
      <button class="btn btn-primary mr-5" @click="returnSum">报表总结</button>

      <button class="btn btn-secondary mr-5" @click="returnForm" href="#/form">返回报表请求</button>
    </div>
    <table class="table table-hover">
      <thead>
      <tr>
        <th>房间号</th>
        <th>从控机开关机的次数</th>
      </tr>
      </thead>
      <tbody>
      <tr class="table-light" v-for="data in formList" :key="data.id">
        <td>{{data.id}}</td>
        <td>Doe</td>
        <table  class="table table-hover">
          <thead>
          <tr>
            <th>起止时间</th>
            <th>温度变化</th>
            <th>风量消耗</th>
            <th>控请求所需费用</th>
          </tr>
          </thead>
          <tbody>
          <tr class="table-info" v-for="data in datalist" :key="data.id">
            <td>5.26-5.27</td>
            <td>25-26</td>
            <td>john@example.com</td>
            <td>25元</td>
          </tr>
          </tbody>
        </table>
      </tr>

<!--      <tr>-->
<!--        <td>Mary</td>-->
<!--        <td>Moe</td>-->
<!--        <td>mary@example.com</td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td>July</td>-->
<!--        <td>Dooley</td>-->
<!--        <td>july@example.com</td>-->
<!--      </tr>-->
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: 'form',
  computed: {
    ...mapState("form", [
      "formList",
      "showSDbutton",
    ]),
    starting_date: {
      get() {
        return this.$store.state.form.starting_date;
      },
      set(value) {
        this.$store.commit("form/setStartDate", value);
      }
    },
    ending_date: {
      get() {
        return this.$store.state.form.ending_date;
      },
      set(value) {
        this.$store.commit("form/setEndDate", value);
      }
    },
    start_room: {
      get() {
        return this.$store.state.form.start_room;
      },
      set(value) {
        this.$store.commit("form/setStartRoom", value);
      }
    },
    end_room: {
      get() {
        return this.$store.state.form.end_room;
      },
      set(value) {
        this.$store.commit("form/setEndRoom", value);
      }
    }
  },

  methods: {
    ...mapActions("form", ["getDetail","getSummary","submitRequire"]),


  },
}
</script>