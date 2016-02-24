<script>
    export default {
        props: ['dados']
    }
</script>
<style>

</style>
<template>
    <div class="well" >
        <h3>{{ dados.name }}</h3>
        <p>{{ dados.city }} / {{ dados.state }}</p>
    </div>
</template>