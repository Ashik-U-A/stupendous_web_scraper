<template>
  <div class="home">
    <user-input-component class="uic"></user-input-component>
    <analytics-component class="ac" :stats="stats" :web_data="web_data" :content="content"></analytics-component>
    <modal-component :component_props="content.modal_component_props" :component_being_viewed="content.modal_component_being_viewed" v-show="content.modal_visible"></modal-component>
  </div>
</template>

<script>
import UserInputComponent from "./input/UserInputComponent.vue";
import AnalyticsComponent from "./output/AnalyticsComponent.vue";
import ModalComponent from "./output/ModalComponent.vue";
export default {
  props: ["stats", "web_data", "content"],
  components: {
    AnalyticsComponent,
    UserInputComponent,
    ModalComponent
  },
  methods: {
    
  }
};
</script>

<style scoped>
.home {
  background-image: url("../images/noise.png");
  background-repeat: repeat;
  height: 100%;
}
.uic {
  height: 20%;
}
.ac {
  height: 80%;
}
</style>
<style>
.home * {
  font-family: "Roboto";
}
</style>

