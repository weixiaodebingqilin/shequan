<template>
    <div class="dk-switch"
         @click="iconClick">
        <div class="dk-switch-icon">
            <slot name="icon">
                <em :class="{active: beIcon}"></em>
            </slot>
        </div>
        <p class="dk-switch-text">
            <slot name="text"></slot>
        </p>

    </div>
</template>
<script>
export default {
    name: "dk-switch",
    props: {
        likeIcon: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            beIcon: this.likeIcon
        };
    },
    methods: {
        iconClick() {
            this.beIcon = !this.beIcon;
            this.$emit("click", this.beIcon);
        }
    }
};
</script>
<style lang="less">
@bgclor: rgba(84, 120, 235, 1);
.dk-switch {
  height: 20px;
  display: flex;
  cursor: pointer;
  .dk-switch-icon {
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    > em {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      position: relative;
      border: 1px solid @bgclor;
      &::after {
        content: "";
        width: 0;
        height: 0;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        background: @bgclor;
      }
      &.active::after {
        transition: all 0.2s ease-out;
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>


