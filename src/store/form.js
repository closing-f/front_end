import {ws} from "./index"
import router from "../router";
export default {
    state: {
        starting_date:"",
        ending_date:"",
        start_room:-1,
        end_room:-1,
        roomList: [0,1,2,3],
        formList:[{roomId:1,
            turnTimes:3,
            requeirlist:[{startTime:1,endTime:1,startT:23,endT:25,consume:2,cost:2}],
        }],
        summaryList:[],
        showSDbutton:false,
        subInforlist:[{state:false,roomId:10000,roomT:25,roomM:"制冷"},{state:true,roomId:1,roomT:25,roomM:"制热"},{state:true,roomId:1,roomT:25,roomM:"制冷"}]

    },
    mutations:{
        setRoomList(state, roomList) {
            state.roomList = roomList;
        },
        setSubInforList(state,subInforList){
            state.subInforlist=subInforList;
        },
        setStartDate(state, starting_date) {
            state.starting_date = starting_date;
        },
        setEndDate(state, ending_date) {
            state.ending_date = ending_date;
        },
        setStartRoom(state,startRoom){
            state.start_room=startRoom;
        },
        setEndRoom(state,endRoom){
            state.end_room=endRoom;
        },
        setFormList(state, formList) {
            state.formList = formList;
        },
        setSummaryList(state, summaryList) {
            state.summaryList = summaryList;
        },
        setShowButton(state,show){
            state.showSDbutton=show;
        }
    },

    actions: {
        submitRequire({state}){
            alert(state.starting_date);
            ws.send(JSON.stringify({
                type:"FORM",
                ACK:1
            }));

        },
        requireSuccess({commit}){
            commit("setShowButton",true);
        },
        requireFalse(){
            alert("require error");
        },


        getSummary(){
            router.push("/summary")
        },
        getDetail(){
            router.push("/formall")
        },

    },
    namespaced: true,
};
