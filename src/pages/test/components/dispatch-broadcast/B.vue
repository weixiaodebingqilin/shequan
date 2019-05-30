<template>
    <div>
        broadcast B
    </div>
</template>
<script>
export default {
    name: "broadcastB",
    created() {
        this.$on("on-message", this.showMessage);
    },
    methods: {
        showMessage(text) {
            console.log("broadcastB： ", text);
        }
    }
};
</script>
