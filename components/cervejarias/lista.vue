<script>
    import VcCervejaria from './card.vue'
    export default {
        data(){
            return {
                cervejarias: []
            }
        },
        components: {
            VcCervejaria
        },
        ready() {
            this.$http.get('/cervejarias.json').then( (req) =>
               this.cervejarias = req.data
            );
        }
    }
</script>
<template>
    <h3>Componentes de cervejarias!</h3>
    <vc-cervejaria
            v-bind:dados="cervejaria"
            v-for="cervejaria in cervejarias"></vc-cervejaria>
</template>