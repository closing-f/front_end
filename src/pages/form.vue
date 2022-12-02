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
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
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

    <b-card bg-variant="light">
      <b-form-group label-cols-lg="2" label="Form Infomation" label-size="lg" label-class="font-weight-bold pt-0" class="mb-0">
        <b-form-group label-cols-sm="2" label="开始日期" label-align-sm="left" label-for="sd">
          <b-form-datepicker id="sd" v-model="starting_date" class="mb-2"></b-form-datepicker>
<!--          <p>Value: '{{ starting_date }}'</p>-->
        </b-form-group>
        <b-form-group label-cols-sm="2" label="结束日期" label-align-sm="left" label-for="ed">
          <b-form-datepicker id="ed" v-model="ending_date" class="mb-2"></b-form-datepicker>

        </b-form-group>
        <b-form-group label-cols-sm="2" label="开始房间号" label-align-sm="left" label-for="sr">
          <b-form-select id='sr' v-model="start_room" :options="roomList"></b-form-select>

        </b-form-group>
        <b-form-group label-cols-sm="2" label="结束房间号" label-align-sm="left" label-for="er">
          <b-form-select id='er' v-model="end_room
" :options="roomList"></b-form-select>
        </b-form-group>
        <b-row>
          <b-col>
            <b-button variant="outline-success" size="lg" @click="submitRequire">Submit</b-button>
          </b-col>
          <b-col>
            <b-button variant="outline-primary" size="lg" @click="getSummary" v-if="showSDbutton">Summary</b-button>
          </b-col>
          <b-col>
            <b-button variant="outline-info" size="lg" @click="getDetail" v-if="showSDbutton" >Details</b-button>
          </b-col>
        </b-row>
      </b-form-group>
    </b-card></div>


</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: 'form',
  computed: {
    ...mapState("form", [
      "starting_date",
      "ending_date",
      "start_room",
      "end_room",
      "roomList",
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
