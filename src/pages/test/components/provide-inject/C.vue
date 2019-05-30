<template>
    <div class="Cs">Cs</div>
</template>
<script>
export default {
    name: "Cs",
    inject: ["name"],
    mounted() {
        console.log("c的inject: ", this.name);
    }
};
</script>

