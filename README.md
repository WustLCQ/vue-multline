vue-multline是一个实现多行文字末尾展示省略号以及展开收起按钮的vue组件。

> demo: https://wustlcq.github.io/vue-multline/

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
| leftSpace | 左边补白 | String,css长度值，如5px，1rem | "" |
| rightSpace | 左边补白 | String,css长度值，如5px，1rem | "" |
| bgColor | 末尾按钮背景色 | String,css颜色值，如#fff,rgba(0,0,0) | #fff |

由于末位的...以及展开收起按钮采用的是绝对定位方式，有时候会出现...遮挡住一部分文字以及按钮与上一行文字不对齐的情况，此时需要通过*leftSpace*与*rightSpace*修正