const Vue = require('vue')
const Resource = require('vue-resource')

const VcCervejarias = require('./components/cervejarias/lista.vue')

Vue.use(Resource)

new Vue({
    el: 'body',
    components:{
        'vc-cervejarias': VcCervejarias
    }
})