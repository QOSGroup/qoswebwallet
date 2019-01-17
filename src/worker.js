// Worker.js
import QWeb from "qweb";

const qweb = new QWeb({ chainId: "capricorn-1000", baseUrl: "http://106.14.178.99:1317" });
// Post data to parent thread
self.postMessage({ foo: "foo" });

// Respond to message from parent thread
self.addEventListener("message", event => {
    const cmd = event.data.cmd
    console.log("worker.self::msg", event)
    if (cmd == "create.account"){
        console.log("qweb.worker", event, qweb)
        const account = qweb.newAccount()
        self.postMessage({ uid: event.data.uid, result: account });
    } 
});
