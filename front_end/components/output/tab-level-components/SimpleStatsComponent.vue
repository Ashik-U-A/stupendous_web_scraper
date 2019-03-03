<template>
    <div class="simple-stats-component" ref="stat_container">
        <Stat v-for="(value, key) in stats" :key="key" :label="key" :value="value"></Stat>
    </div>
</template>

<script>
import Stat from "./Stat.vue";
export default {
    props: ["stats"],
    components: {
        Stat
    }
}
</script>

<style scoped>
.simple-stats-component{
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
}
</style>