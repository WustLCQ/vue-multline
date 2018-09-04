<template>
    <div ref="box" class='m-multline' :style="styleContainer">
        <p ref="text" class="text">{{content}}</p>
        <span
            v-if="hasDeleteWords && collapse && showExpandBtn"
            class="end"
            @click="handleExpand"
        >{{expandBtnText}}</span>
        <span
            v-else-if="hasDeleteWords &&!collapse && showCollapseBtn"
            class="end"
            @click="handleCollapse"
        >{{collapseBtnText}}</span>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        line: {
            type: Number,
            default: 3
        },
        autoCollapse: {
            type: Boolean,
            default: true
        },
        endChars: {
            type: String,
            default: '...'
        },
        showExpandBtn: {
            type: Boolean,
            default: true
        },
        expandBtnText: {
            type: String,
            default: '展开'
        },
        showCollapseBtn: {
            type: Boolean,
            default: true
        },
        collapseBtnText: {
            type: String,
            default: '收起'
        }
    },
    data () {
        return {
            collapse: true,
            hasDeleteWords: false,
            content: this.text
        }
    },
    computed: {
        styleContainer () {
            return {
                overflow: this.collapse ? 'hidden' : ''
            }
        }
    },
    created () {
        this.collapse = this.autoCollapse;
    },
    mounted () {
        this.init();
    },
    methods: {
        init () {
            const textEle = this.$refs.text;
            let textStyle = getComputedStyle(textEle);
            const fontSize = Number.parseFloat(textStyle.fontSize.replace('px', ''), 10);
            // 各个浏览器对line-height默认值normal实现不同，一般在字体的1.0到1.2倍之间，这里采用1.2倍
            const lineHeight = textStyle.lineHeight === 'normal' ? fontSize * 1.2
                : Number.parseFloat(textStyle.lineHeight.replace('px', ''), 10);

            textEle.style.height = '';
            let autoHeight = Number.parseFloat(textStyle.height.replace('px', ''), 10);
            // 若文字内容不足设定行数，直接不展示末尾按钮
            if (autoHeight < lineHeight * this.line) {
                return;
            }
            this.hasDeleteWords = true;
            const deleteEndWords = () => {
                this.content = this.content.substr(0, this.content.length - 1);
                this.$nextTick(() => {
                    textStyle = getComputedStyle(textEle);
                    textEle.style.height = '';
                    autoHeight = Number.parseFloat(textStyle.height.replace('px', ''), 10);
                    if (autoHeight > lineHeight * this.line) {
                        deleteEndWords();
                    } else {
                        // 最后一行末尾少2个字符
                        this.content = this.content.substr(0, this.content.length - 3) + this.endChars;
                    }
                });
            }
            deleteEndWords();
            // 在收起状态才需要设置height
            if (this.collapse) {
                textEle.style.height = lineHeight * this.line + 'px';
            }
        },
        // 展开
        handleExpand () {
            this.collapse = false;
            this.height = '';
            this.content = this.text;
        },
        // 收起
        handleCollapse () {
            this.collapse = true;
            this.init();
        }
    }
}
</script>
<style>
.m-multline {
    position: relative;
}
.m-multline .text {
    margin: 0;
    padding: 0;
}
.m-multline .end {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #576B95;
}
</style>
