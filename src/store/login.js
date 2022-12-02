import {ws} from './index'
import router from "../router";

export default {
    state: {
        userID: '',
        roomID:'',
        adminName: '',
        adminPassword: '',
    },
    mutations: {
        setRoomId(state, roomId) {
            state.roomID = roomId;
        },
        setUserID(state, idCard) {
            state.userID = idCard;
        },
        setAdminName(state, adminName) {
            state.adminName = adminName;
        },
        setAdminPassword(state, password) {
            state.adminPassword = password;
        }

    },

    actions: {
        adminLogin({ state }) {
            ws.send(JSON.stringify({
                type:"LOGINADMIN",
                password:state.password
            }));

        },















        adminSuccess(){
            router.push('/config');
        },
        loginError(){
            alert("输入信息错误，请检查")
        }
    },
    namespaced: true,
};
