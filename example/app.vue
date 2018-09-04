<template>
    <div id="app" class="m-container">
        <vue-multline
            :class="positionChange ? 'm-position' : ''"
            :text="`这是一个实现多行文字末尾显示省略号外加可以展开详情的vue组件。
            这是一个实现多行文字末尾显示省略号外加可以展开详情的vue组件。
            这是一个实现多行文字末尾显示省略号外加可以展开详情的vue组件。
            这是一个实现多行文字末尾显示省略号外加可以展开详情的vue组件。`"
        >
        </vue-multline>
    </div>
</template>
<script>
import VueMultline from '../src/index.vue';
export default {
    components: {
        VueMultline
    },
    data () {
        return {
            positionChange: false
        }
    },
    created () {
        setTimeout(() => {
            this.positionChange = true;
        }, 2000);
    }
}
</script>
<style>
.m-container {
    line-height: 1.2;
}
.m-position {
    position: relative;
}
</style>


