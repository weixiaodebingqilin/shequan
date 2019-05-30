<template>
    <div class="A">
        As

        <Cs></Cs>
    </div>

</template>
<script>
import Cs from "./C";
export default {
    name: "As",
    components: {
        Cs
    },
    provide: {
        name: "A的provide，Aa"
    },
    inject: ["name"],
    mounted() {
        console.log("a的inject: ", this.name);
    }
};
</script> 

