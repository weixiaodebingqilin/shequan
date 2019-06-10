<template>
    <div class="popout"
         v-if="showpopt">
        <div class="popout-shade "
             @click="showpops"></div>
        <!-- 圈子权限 -->
        <div class="popout-scroll loadRight">
            <popout-data v-if="popoutData"
                         @close="cancel"></popout-data>
            <popout-set v-if="popoutSet"
                        @on-click="setItems"
                        @close="cancel"></popout-set>
            <popout-admin v-if="popoutAdmin || setIndex==1"
                          @close="cancel"></popout-admin>
            <popout-card v-if="popoutCard"
                         @close="cancel"></popout-card>
            <popout-addcard v-if="popoutAward"
                            @close="cancel"></popout-addcard>
        </div>
    </div>
</template>

<script>
import popoutData from "./componentChild/data"; //圈子数据（管理）
import popoutSet from "./componentChild/set"; //圈子设置
import popoutAdmin from "./componentChild/admin"; //圈子设置-管理员设置
import popoutCard from "./componentChild/card"; //打卡奖励
import popoutAddcard from "./componentChild/add-card"; //添加奖励
export default {
    name: "popout",
    components: {
        popoutData,
        popoutSet,
        popoutAdmin,
        popoutCard,
        popoutAddcard
    },
    props: {
        showpop: {
            type: Boolean,
            default: false
        },
        //圈子数据（管理）

        popoutData: {
            type: Boolean,
            default: false
        },
        //圈子设置
        popoutSet: {
            type: Boolean,
            default: false
        },
        //圈子设置-管理员设置
        popoutAdmin: {
            type: Boolean,
            default: false
        },
        //打卡奖励
        popoutCard: {
            type: Boolean,
            default: false
        },
        //添加奖励
        popoutAward: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showpopt: this.showpop,
            setIndex: -1
        };
    },
    methods: {
        showpops() {
            this.showpopt = !this.showpopt;
        },
        setItems(payload) {
            console.log(1, payload.index);
            this.setIndex = payload.index;
        },
        cancel() {
            this.showpops();
        }
    }
};
</script>



