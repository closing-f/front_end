import Vue from "vue";
import Vuex from "vuex";
import form from "./form";
import login from "./login";
import mainConfig from "./mainconfig"
import {useWebsocket} from "../hooks";

Vue.use(Vuex);
export const ws=useWebsocket();
export default new Vuex.Store({
    modules: {
        form,
        login,
        mainConfig,
    }
});