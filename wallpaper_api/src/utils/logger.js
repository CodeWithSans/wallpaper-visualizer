function getTime(){
    return new Date().toLocaleTimeString();
}
function info(message){
    console.log(`[${getTime()}]ℹ️ ${message}`);
}
function success(message){
     console.log(`[${getTime()}]️ ✅ ${message}`);
}
function error(message){
     console.error(`[${getTime()}] ❌ ${message}`);
}
export {info, success, error};