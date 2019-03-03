<template>
    <div class="stat">
        <span>{{value === undefined ? "NIL" : value}}</span>
        <label>{{label}}</label>
    </div>
</template>

<script>
export default {
    props: ["label", "value"]
}
</script>

<style scoped>
.stat{
    display: grid;
    padding: 10px;
    background: rgba(255,255,255,0.9);
    box-shadow: 0px 1px 3px rgba(0,0,0,0.3);
    text-align: center;
}
.stat span{
    font-size: 2.5rem;
    font-weight: 200;
    color: #333;
    padding: 10px;
}
.stat label{
    font-size: 0.9rem;
    font-weight: 600;
    color: #717171;
    text-transform: uppercase;
}
</style>