<script>
    export default {
        data(){
            return {
                cervejarias: []
            }
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
    <div v-for="cervejaria in cervejarias">
        <h3>{{ cervejaria.name }}</h3>
    </div>
</template>