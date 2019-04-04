# mind-extract
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

思维导图生成器

## 功能描述
接收字符串数组，分析元素角色，建立树状数据结构，生成思维导图

## api设计
import ME from 'mind-extract';

### 将数组转为树状结构
```js
ME.convert(arr)
```

### 将树状结构生成思维导图
```js
ME.generate(target, class, tree)
```

### 将数组生成思维导图
```js
ME.convert(arr).generate(target, class)
```
