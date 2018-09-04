vue-multline是一个实现多行文字末尾展示省略号以及展开收起按钮的vue组件。

> demo: https://wustlcq.github.io/vue-multline/

# 快速开始

```
npm install --save vue-multline
```

```html
<vue-multline
    :text="text"
    :line="3"
    :autoCollapse="true"
    :endChars="..."
    :showExpandBtn="true"
/>
```

# 参数

| 名称 | 说明 | 参数类型| 默认值 |
| - | :-: | :-: | :-: |
| text | 文本内容 | String | - |
| line | 展示的行数 | Number | 3 |
| autoCollapse | 是或否默认收起 | Boolean | true |
| endChars | 末尾符号 | String | ... |
| showExpandBtn | 是否显示展开按钮 | Boolean | true |
| expandBtnText | 展开按钮文字 | String | 展开 |
| showCollapseBtn | 是否显示收起按钮 | Boolean | true |
| collapseBtnText | 收起按钮文字 | String | 收起 |