vue-multline是一个实现多行文字末尾展示省略号以及“展开”收起按钮的vue组件。

# 快速开始

```html
<vue-multline
    :line="3"
    :autoCollapse="true"
    endChars="..."
    :showExpandBtn="true"
>
    {{content}}
</vue-multline>
```

# 参数

| 名称 | 说明 | 参数类型| 默认值 |
| - | :-: | :-: | :-: |
| line | 展示的行数 | Number | 3 |
| autoCollapse | 是或否默认收起 | Boolean | true |
| endChars | 末尾符号 | String | ... |
| showExpandBtn | 是否显示展开按钮 | Boolean | true |
| expandBtnText | 展开按钮文字 | String | 展开 |
| showCollapseBtn | 是否显示收起按钮 | Boolean | true |
| collapseBtnText | 收起按钮文字 | String | 收起 |
| leftSpace | 左边补白，有时会出现左边遮挡住一般文字的情况，因此需要手动设置leftSpace进行调整 | String,css长度值，如5px，1rem | "" |
| rightSpace | 右边补白，有时会出现右边过于靠近边线与上面没对齐的情况，因此需要手动设置rightSpace进行调整 | String,css长度值，如5px，1rem | "" |
| bgColor | 末尾按钮背景色 | String,css颜色值，如#fff,rgba(0,0,0) | #fff |