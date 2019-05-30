<template>
    <div class="B">Bs
        <Cs></Cs>
    </div>
</template>
<script>
import Cs from "./C";
export default {
    name: "Bs",
    components: {
        Cs
    },
    inject: ["name"],
    mounted() {
        console.log("b的inject: ", this.name);
    }
};
</script>

