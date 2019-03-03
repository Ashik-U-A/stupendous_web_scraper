<template>
    <div class="data-processor-from-table">
        <table ref="the_table"></table>
    </div>
</template>

<script>
export default {
    props: ["data_props"],
    mounted: function(){
        let data_table = [];
        let table = this.$props.data_props.table;
        let rows = table.querySelectorAll("tr");
        for(let i=0;i<rows.length;i++){
            let row = rows[i];
            let d = [];
            let columns = row.querySelectorAll("td,th");
            for(let j=0;j<columns.length;j++){
                let column = columns[j];
                d.push( column.innerHTML );
            }
            data_table.push(d);
        }

        data_table.forEach(row =>{
            let r = document.createElement("tr");
            row.forEach(col=>{
                let c = document.createElement("td");
                c.innerHTML = col;
                r.appendChild(c);
            });
            this.$refs.the_table.appendChild(r);
        });
    }
}
</script>

<style scoped>
.data-processor-from-table{
    background: #fff;
    padding: 10px;
}
</style>