import QWeb from 'qweb'
import QWebWorker from './QWebWorker'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import main from './components/main.vue'

Vue.use(ElementUI)
Vue.prototype.bus = new Vue();

console.log('===== Test =====')
console.log(Worker)

window.qweb = new QWeb({ chainId: 'capricorn-1000', baseUrl: 'http://106.14.178.99:1317' })
// window.qwebWorker = new Worker();
window.QWebWorker = QWebWorker

window.onload = ()=>{

    // const newAccount = qweb.newAccount()
    // QWebWorker.createAccount().then((account)=>console.log('qweb.worker', account))

    // qweb.account.get(newAccount.address).then(res => {
    //     console.log('address', res.data);
    // });

    var mainComponent = Vue.extend(main)
    var mainDiv = new mainComponent({
        propsData: { type: 'primary' }
    })

    mainDiv.$mount();

    document.body.appendChild(mainDiv.$el)
}
