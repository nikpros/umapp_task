/**
 * Varinats connect libraries
 * 
 * import 'vue'
 * import 'bootstrap/dist/css/bootstrap.min.css'
 * import Vue from 'vue'
 * window.Vue = require('vue')
 */
import Vue from 'vue'
import './js/common'
import './assets/styl/main.styl'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App.vue'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowLeft, faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)


// Vue init
new Vue({
    el: '#app',
    store,
    render: h => h(App)
})