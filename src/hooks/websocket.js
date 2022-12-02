import { WS_ADDRESS } from '../configs'

import store from '../store';
function useWebsocket(){
    const ws =new WebSocket(WS_ADDRESS);
    const init=()=>{
        bindEvent();
    }
    function bindEvent(){
        ws.addEventListener('open',handleOpen,false);
        ws.addEventListener('close',handleClose,false);
        ws.addEventListener('error',handleError,false);
        ws.addEventListener('message',handleMessage,false);
    }
    function handleOpen(e){
        console.log('Websocket vue open',e);
    }
    function handleClose(e){
        console.log('Websocket close',e);
    }
    function handleError(e){
        console.log('Websocket Error',e);
    }
    function handleMessage(e){
        let message = JSON.parse(e.data);
        let op=message["type"]
        switch (op){
            case "LOGINADMIN":
                console.log('LOGINADMIN');
                AdminLogin(message);
                break;
            case "CONFIG":
                console.log('CONFIG');
                mainConfig(message);
                break;
            case "FORM":
                console.log('FORM');
                getForm(message);
                break;
            default:
                console.log("default");
        }

    }

    function AdminLogin(message){
        if(message["ACK"]===0){
            store.dispatch("login/loginError")
        }else {
            store.dispatch("login/adminSuccess");
            console.log("success login admin");
        }
    }
    function mainConfig(message){
        if(message["ACK"]===0){
            store.dispatch("mainConfig/configError");
        }else {
            store.dispatch("mainConfig/configSuccess");
        }
    }
    function getForm(message){
        if(message["ACK"]===0){
            store.dispatch("form/requireFalse");
        }else {
            store.dispatch("form/requireSuccess");
        }
    }
    init();
    return ws;

}
export default useWebsocket;