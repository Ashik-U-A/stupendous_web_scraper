<template>
    <div class="data-extractor-component">
        <div class="extractor-section">
            <TableExtractor :table_list="table_list" 
                @scroll_to_element="scroll_to_element" 
                @scroll_from_element="scroll_from_element"></TableExtractor>
        </div>
        <iframe class="webpage-rendering-section" ref="renderer" :src="content.url" @load="upadate_everything">
            
        </iframe>
    </div>
</template>

<script>
import TableExtractor from "./TableExtractor.vue";
export default {
    props: ["web_data", "content"],
    data: function(){
        return {
            table_list: []
        };
    },
    mounted: function(){
        
    },
    updated: function(){
        
    },
    methods: {
        upadate_everything(){
            let list = this.$refs.renderer.contentWindow.document.body.querySelectorAll("table");
            this.$data.table_list = list;
        },
        scroll_to_element({x,y, table_item}){
            this.$refs.renderer.contentWindow.scrollTo(x,y);
            table_item.style.animation = "blink 0.7s infinite alternate";
        },
        scroll_from_element(table_item){
            table_item.style.animation = "";
        }
    },
    components: {
        TableExtractor
    }
};
</script>

<style scoped>
.data-extractor-component{
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
}
.webpage-rendering-section{
    width: 100%;
    height: 100%;
    overflow: auto;
}
.extractor-section{
    padding: 10px;
    display: grid;
    grid-gap: 10px;
    grid-auto-rows: min-content;
}

@keyframes blink{
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
}
</style>