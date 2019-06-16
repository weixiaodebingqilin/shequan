<template>
    <div>

        <!-- item: 具名; param: slot传递出去的值 -->
        <slot name="item"
              v-bind="{param}"></slot>
        <!-- 调用的时候建议使用  {v-slot:xxx}2.6以后的写法 而非slot="xxx"  -->
        <!-- vnode -->
        <!-- <VNode :vnodes="slotScopeItem({value: 'vue'})" /> -->
    </div>
</template>
<script>
export default {
    name: 'test',
    components: {
        // VNode: {
        //     functional: true,
        //     render: (h, ctx) => ctx.props.vnodes
        // }
    },
    props: {
        typeName: {
            // typeName的校验
            validator: function (value) {
                return ['success', 'warning', 'danger'].includes(value);
            }
        },
        list: {
            type: Array,
            // 对象或数组默认值必须从一个工厂函数获取
            // default(){
            //     return []
            // }

            default: () => []
        },
        onfunctions: {
            type: Function,
            default: () => { }
        }

    },
    data() {
        return {
            param: 'sss',
            mywat: {
                name: 'hu',
                age: 18
            },
            mydeep: {
                one: {
                    target: 0
                }
            }
        }
    },
    watch: {
        param: function (val, oldVal) {

        },
        'mywat.name': function (val, oldVal) {

        },
        mydeep: {
            handler: function (val, oldVal) {

            },
            deep: true
        }
    }
}
</script>

