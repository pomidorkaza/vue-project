<template>
    <div class="item">
        <h3>{{name}} #{{number}}</h3>
    </div>
</template>


<script>
export default {
     name: "ListItem",
    props: {
    name:String,
    number: Number
        }
}
</script>
<style scoped>

</style>