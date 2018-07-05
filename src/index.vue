<template>
    <p
        ref="text"
        class='m-multline'
        :style="styleContainer"
    >
        <slot></slot>
        <span
            v-if="!isLessLine"
            class="end"
            :style="styleEnd"
        >
            <span v-if="collapse" class="end-chars">{{endChars}}</span>
            <span
                v-if="collapse && showExpandBtn"
                class="end-btn"
                @click="handleExpand"
            >{{expandBtnText}}</span>
            <span
                v-else-if="!collapse && showCollapseBtn"
                class="end-btn"
                @click="handleCollapse"
            >{{collapseBtnText}}</span>
        </span>
    </p>
</template>
<script>
export default {
    props: {
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
        },
        leftSpace: {
            type: String,
            default: ''
        },
        rightSpace: {
            type: String,
            default: ''
        },
        bgColor: {
            type: String,
            default: '#fff'
        }

    },
    data () {
        return {
            collapse: true,
            isLessLine: false,
        }
    },
    computed: {
        styleContainer () {
            return {
                overflow: this.collapse ? 'hidden' : ''
            }
        },
        styleEnd () {
            return {
                background: this.bgColor,
                paddingLeft: this.leftSpace,
                paddingRight: this.rightSpace
            }
        }
    },
    created () {
        this.collapse = this.autoCollapse;
    },
    mounted () {
        this.init();
    },
    updated () {
        // 有可能在父组件中更改了样式，所以updated时需要重新执行一遍
        this.init();
    },
    methods: {
        init () {
            const textEle = this.$refs.text;
            const textStyle = getComputedStyle(textEle);
            const fontSize = Number.parseFloat(textStyle.fontSize.replace('px', ''), 10);
            // 各个浏览器对line-height默认值normal实现不同，一般在字体的1.0到1.2倍之间，这里采用1.2倍
            const lineHeight = textStyle.lineHeight === 'normal' ? fontSize * 1.2
                : Number.parseFloat(textStyle.lineHeight.replace('px', ''), 10);

            textEle.style.height = '';
            const autoHeight = Number.parseFloat(textStyle.height.replace('px', ''), 10);
            // 若文字内容不足设定行数，直接不展示末尾按钮
            if (autoHeight < lineHeight * this.line) {
                this.isLessLine = true;
                return;
            }
            // 在收起状态才需要设置height
            if (this.collapse) {
                textEle.style.height = lineHeight * this.line + 'px';
            }

            // 将内联样式中的position清除，然后当前的position是不是static，如果是，则设置为relative
            textEle.style.position = '';
            if (textStyle.position === 'static') {
                textEle.style.position = 'relative';
            }
        },
        // 展开
        handleExpand () {
            this.collapse = false;
            this.height = '';
        },
        // 收起
        handleCollapse () {
            this.collapse = true;
        }
    }
}
</script>
<style>
.m-multline {

}
.m-multline .end {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #576B95;
}
</style>

