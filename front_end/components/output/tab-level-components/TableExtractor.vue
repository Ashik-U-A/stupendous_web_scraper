<template>
    <div class="table-extractor">
        <h2>Table Information</h2>
        <div class="content">
            <div class="number">
                <span>{{table_list.length}}</span>
                <label>Tables Found</label>
            </div>
            <div ref="table_list" class="table-list">
                <div class="table-item" v-for="(item, index) in table_list">
                    <label>Table #{{index + 1}}</label>
                    <button class="show_btn" @click="show_hide_table($event, item)">Show</button>
                    <button @click="open_data_processor(item)">Open in Data Processor</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["table_list"],
    watch: {
        table_list: function(){
            
        }
    },
    methods: {
        open_data_processor(table_item){
            this.$root.$emit("open_modal",{a : "DataProcessorFromTable", b: {table: table_item}});
        },
        show_hide_table(event, table_item){
            let btn = event.target;
            if(btn.classList.contains("showing")){
                btn.classList.remove("showing");
                btn.innerHTML = "Show";
                table_item.style.border = "";
                this.$emit("scroll_from_element", table_item);
            }
            else{
                btn.classList.add("showing");
                btn.innerHTML = "Hide";
                table_item.style.border = "8px solid red";
                let {x , y} = table_item.getBoundingClientRect();
                this.$emit("scroll_to_element", {x, y, table: table_item});
            }
        }
    }
};
</script>

<style scoped>
.table-extractor{
    background: #fff;
    padding: 10px;
}
.content{
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: min-content;
}
.number{
    display: grid;
    grid-gap: 10px;
    text-align: center;
    border-right: 1px solid #aaa;
}
.number span{
    font-size: 4rem;
    font-weight: 200;
    color: #333;
}
.number label{
    font-size: 1rem;
    font-weight: 600;
    color: #777;
}
h2{
    margin: -10px -10px 0 -10px;
    padding: 10px;
    border-bottom: 1px solid #aaa;
    font-size: 1.3rem;
    font-weight: 200;
    color: #444;
}
.table-list{
    display: grid;
    grid-gap: 5px;
    grid-auto-rows: min-content;
    align-content: center;
    align-items: center;
}
.table-item{
    display: grid;
    grid-template-columns: 1fr min-content 1fr;
    grid-gap: 10px;
    text-align: center;
    align-content: center;
    align-items: center;
}
.show_btn{
    padding: 10px;
}
</style>