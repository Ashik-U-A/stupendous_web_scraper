<template>
    <div class="modal-component">
        <span @click="close_modal">X</span>
        <component class="comp" :is="component_being_viewed" :data_props="component_props"></component>
    </div>
</template>

<script>
import DataProcessorFromTable from "../advanced/DataProcessorFromTable.vue";
export default {
    props: ["component_being_viewed", "component_props"],
    methods: {
        close_modal(){
            this.$root.$emit("close_modal");
        }
    },
    components: {
        DataProcessorFromTable
    }
}
</script>

<style scoped>
.modal-component{
    background: rgba(0,0,0,0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    display: grid;
    align-content: center;
    justify-content: center;
}
span{
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}
.comp{
    max-height: 80%;
    max-width: 80%;
}
</style>