import Worker from "worker-loader!./Worker.js";

const worker = new Worker();
const count = (function(){
    const mark = {}
    return cmd => {
        return !mark[cmd] ? (mark[cmd] = 1) : ++mark[cmd];
    }
}())

const createCmd = (cmd) => {

    const uid = `${Date.now()}_${cmd}_${count(cmd)}`;
    return {
        cmd: cmd,
        uid: uid
    }
}

const QwebWorker = {
    createAccount(){
        return new Promise((resolve, reject)=>{
            const cmd = createCmd("create.account");

            worker.postMessage(cmd);
            worker.onmessage = (event) => {
                if (event.data.uid === cmd.uid) {
                    resolve(event.data.result);
                }
            }
        })
    }
}


export default Object.create(QwebWorker)