import {ws} from './index'

export default {
    state: {
        temperature:22,
        pattern:"cold",
        frequency:1000,
        success: false,
        error: false,

    },
    mutations:{
        setTemperature(state, temperature) {
            state.temperature = temperature;
        },
        setPattern(state, pattern) {
            state.pattern = pattern;
        },
        setFrequency(state, frequency) {
            state.frequency = frequency;
        },
        setSuccess(state, success) {
            state.success = success;
        },
        setError(state, error) {
            state.error = error;
        },

    },

    actions: {
        submitConfig({ state }) {
            ws.send(JSON.stringify({
                    type:"CONFIG",
                    ACK:1,
                    pattern:state.pattern,
                }));
            // ws.send(JSON.stringify({
            //     type:"CONFIG",
            //     pattern:state.pattern,
            //     temperature:state.temperature,
            //     frequency:state.frequency
            // }));
        },
        configError(){
            alert("输入信息错误，请检查")
        },
        configSuccess(){
            alert("配置成功")
        }



    },
    namespaced: true,
};
