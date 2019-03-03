<template>
  <div class="user-input-component">
    <input type="text" v-model="url" placeholder="Your Web Page URL">
    <button @click="handle_click">Get Webpage</button>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            url: ""
        };
    },
    methods: {
        handle_click(){
            this.$root.$emit("get-webpage-data", this.$data.url);
        }
    }
}
</script>

<style scoped>
.user-input-component {
  padding: 20px 40px;
  display: grid;
  grid-template-columns: auto max-content;
  font-size: 0;
  grid-auto-rows: min-content;
  align-content: center;
}
.user-input-component button {
  padding: 15px;
  border-radius: 0px 5px 5px 0px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #515151;
  border-top: 1px solid #919191;
  border-right: 1px solid #b6b6b6;
  border-bottom: 1px solid #eeeeee;
  border-left: 1px solid #bebebe;
  background: linear-gradient(to top, #c3c3c3, #eaeaea);
  cursor: pointer;
}
.user-input-component input {
  font-size: 0.8rem;
  font-weight: 600;
  color: #717171;
  background: #efefef;
  padding: 10px;
  border-radius: 5px 0px 0px 5px;
  border: none;
  border-top: 1px solid #a3a3a3;
  border-right: 1px solid #c8c8c8;
  border-left: 1px solid #c8c8c8;
  border-bottom: 1px solid #eeeeee;
  box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
}
</style>
