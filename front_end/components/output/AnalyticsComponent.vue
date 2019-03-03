<template>
  <div class="analytics-component">
      <div class="tab-headers">
          <span class="tab active" @click="set_current_tab" component="SimpleStatsComponent">Summary Stats</span>
          <span class="tab" @click="set_current_tab" component="DataExtractorComponent">Extract Data</span>
      </div>
      <div class="tab-content">
          <keep-alive>
              <component :is="tab_being_viewed" :stats="stats" :web_data="web_data" :content="content"></component>
          </keep-alive>
      </div>
  </div>
</template>

<script>
import DataExtractorComponent from "./tab-level-components/DataExtractorComponent.vue";
import SimpleStatsComponent from "./tab-level-components/SimpleStatsComponent.vue";

export default {
    props: ["stats", "web_data", "content"],
    data: function(){
        return {
            tab_being_viewed: "SimpleStatsComponent"
        };
    },
    methods: {
        set_current_tab(event){
            let children = event.target.parentNode.children;
            for(let i = 0; i < children.length; i++){
                children[i].classList.remove("active");
            }
            event.target.classList.add("active");
            this.$data.tab_being_viewed = event.target.getAttribute("component");
        }
    },
    components: {
        DataExtractorComponent,
        SimpleStatsComponent
    },
    mounted: function(){
        let diemensions = document.querySelector(".analytics-component").getBoundingClientRect();
        let head_height = document.querySelector(".tab-headers").getBoundingClientRect().height;
        document.querySelector(".tab-content").style.height = (diemensions.height - head_height) + "px";
    }
}
</script>

<style scoped>
.analytics-component {
  display: block;
  overflow: hidden;
}
.tab-headers{
    display: block;
    border-bottom: 1px solid #aaa;
}
.tab{
    display: inline-block;
    max-width: 150px;
    min-width: 100px;
    font-weight: 600;
    color: #757575;
    font-size: 0.8rem;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    border: none;
}
.active{
    border-bottom: 3px solid #aaa;
}
.tab-content{
    overflow: hidden;
}
</style>
