<template>
    <section class="spit-text">
        <div class="textarea-text">
            <textarea v-model="comment"
                      :maxlength="max"
                      @keydown.enter.ctrl="spit"
                      cols="30"
                      rows="10"></textarea>
            <p><span>{{comment.length}}</span> / {{max}}</p>
        </div>
        <dl>
            <dt @click="empty">取消评论</dt>
            <dd @click="spit">评论</dd>
        </dl>
    </section>
</template>
<script>
export default {
    name: "spit-text",
    data() {
        return {
            comment: "",
            max: 500
        };
    },
    methods: {
        // 取消评论
        empty() {
            this.comment = "";
        },
        spit() {
            if (!this.comment) return;
            this.$emit("spit", this.comment);
        }
    }
};
</script>

<style lang="less">
.spit-text {
    .textarea-text {
        position: relative;
        margin: 20px 0;
        > textarea {
            padding: 10px 90px 10px 20px;
            width: 100%;
		height:49px;
            max-height: 105px;
            box-sizing: border-box;
            line-height: 28px;
            font-size: 14px;
            color: rgba(51, 51, 51, 1);
            border-radius: 2px;
            border: 1px solid #DDDDDD;
            resize: none;
            background: #FCFCFC;
        }
        > p {
            position: absolute;
		line-height:28px;
            // top: 50%;
		bottom:10px;
            // transform: translateY(-50%);
            right: 20px;
            > span {
                color: #ff6c47;
            }
        }
    }
    > dl {
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        margin-top: 10px;
        > dt {
            height: 28px;
            font-size: 14px;
            color: #999999;
            line-height: 28px;
            margin-right: 20px;
        }
        > dd {
            width: 85px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            background: #5478eb;
            border-radius: 2px;
            cursor: pointer;
            color: #ffffff;
        }
    }
}
</style>

