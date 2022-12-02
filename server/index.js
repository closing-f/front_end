const WebSocket=require('ws');

;((Ws)=>{

    const server= new Ws.Server({port:8000});
    const init=()=>{
        bindEvent();
    }
    init();
    function bindEvent(){
        server.on('open',handleOpen);
        server.on('close',handleClose);
        server.on('error',handleError);
        server.on('connection',handleConnection);
    }

    function handleOpen(){
        console.log('Websocket Open');
    }
    function handleClose(){
        console.log('Websocket Close');
    }
    function handleError(){
        console.log('Websocket Error');
    }
    function handleConnection(ws){
        console.log('Websocket Connection');
        ws.on('message',handleMessage);
    }

    function handleMessage(msg){
        server.clients.forEach((c)=>{
            c.send(msg);
            console.log("send success")
        });
    }

})(WebSocket);