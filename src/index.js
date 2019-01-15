import QWeb from 'qweb'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import main from './components/main.vue'

Vue.use(ElementUI)

console.log('===== Test =====')
console.log("QWeb", QWeb);


window.onload = ()=>{
    var mainComponent = Vue.extend(main)
    var mainDiv = new mainComponent({
        propsData: { type: 'primary' }
    })

    mainDiv.$mount();

    document.body.appendChild(mainDiv.$el)
}
