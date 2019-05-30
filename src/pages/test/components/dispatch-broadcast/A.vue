<template>
    <div>
        <button @click="handleClick">broadcast 触发事件</button>
        <broadcastB></broadcastB>
    </div>

</template>
<script>
import Emitter from "./mixins/emitter.js";
import broadcastB from "./B";
export default {
    name: "broadcastA",
    mixins: [Emitter],
    components: { broadcastB },
    methods: {
        handleClick() {
            this.broadcast("broadcastB", "on-message", "Hello Vue.js");
        }
    }
};
</script>
