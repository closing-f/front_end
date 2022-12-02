<template>
  <div class="container-fluid">
        <b-jumbotron>
          <template v-slot:header>分布式温控系统</template>
          <template v-slot:lead>
            响应节能，绿色环保
          </template>
          <hr class="my-4">
        </b-jumbotron>

          <b-tabs content-class="mt-3">
            <b-tab variant="primary" title="管理员" active>
              <b-card bg-variant="light">
                <div>
                  <form>
                    <div class="form-group">
                      <b-form-input id="input-1" placeholder="请输入用户名" v-model="adminName" ></b-form-input>
                      <small id="adminNameHelpBlock" class="form-text text-muted">
                        用户名只包含字母与数字,且不小于6位
                      </small>
                      <br>
                      <b-form-input id="input-1" placeholder="请输入密码" v-model="adminPassword" ></b-form-input>
                      <small id="passwordHelpBlock" class="form-text text-muted">
                        密码长度为6-18位
                      </small>
                    </div>
                  </form>
                </div>
                <b-button variant="primary" @click="handleAdminButtonClick">   管理员登录</b-button>
              </b-card>
            </b-tab>
            <b-tab title="普通用户">
              <b-card bg-variant="light">
                <div>
                  <form>
                    <div class="form-group">
                      <b-form-input id="input-1" placeholder="请输入房间号" v-model="roomID" ></b-form-input>
                      <small id="userNameHelpBlock" class="form-text text-muted">
                        房间号只包含数字
                      </small>
                      <br>
                      <b-form-input id="input-1" placeholder="请输入身份证号" v-model="userID" ></b-form-input>
                      <small id="userPasswordHelpBlock" class="form-text text-muted">
                        身份证号为。。。位
                      </small>
                    </div>
                  </form>
                </div>
                <b-button variant="primary" @click="handleUserButtonClick"> 普通用户登录</b-button>
              </b-card>

            </b-tab>

          </b-tabs>
        </div>


</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: 'Login',
  computed:{
      ...mapState("login", [
        "userID",
        "roomID",

        "adminName",
        "adminPassword",

        "adminLoading",
        "userLoading",
        "passwordError"
      ]),
      userID: {
        get() {
          return this.$store.state.login.userID;
        },
        set(value) {
          this.$store.commit("login/setUserID", value);
        }
      },
      adminPassword: {
        get() {
          return this.$store.state.login.adminPassword;
        },
        set(value) {
          this.$store.commit("login/setAdminPassword", value);
        }
      },
      roomID: {
        get() {
          return this.$store.state.login.roomID;
        },
        set(value) {
          this.$store.commit("login/setRoomId", value);
        }
      },
      adminName: {
        get() {
          return this.$store.state.login.adminName;
        },
        set(value) {
          this.$store.commit("login/setAdminName", value);
        }
      }
    },
  // watch:{
  //   adminLoading:function (val, oldVal) {
  //     if(val===true&&oldVal===false){
  //       this.adminLoading=false;
  //       this.$router.push('/config')
  //     }
  //   },
  //   passwordError:function (val, oldVal){
  //     if(val===true&&oldVal===false){
  //       alert('User name or password error');
  //       this.$store.commit("login/setPasswordError",false);
  //     }
  //   }
  // },
  methods: {
    ...mapActions("login", ["adminLogin"]),
    handleAdminButtonClick() {
         const admin_name =this.$store.state.login.adminName;
        if (admin_name.length < 6) {
          alert('用户名不小于6位');
          return;
        }
        this.$store.dispatch("login/adminLogin");
      },
    handleUserButtonClick() {
      const user_name = this.userID.trim();
      if (user_name.length < 6) {
        alert('用户名不小于6位');
        // return;
      }

    },
  }
}
</script>
