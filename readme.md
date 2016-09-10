# node-location

[![Build Status](https://travis-ci.org/booxood/node-location.svg?branch=master)](https://travis-ci.org/booxood/node-location)

提供全球的国家、省/直辖市/州、市、县信息。

** 数据来自 QQ 的安装包**

## 安装

```
npm install node-location
```

## 使用

```javascript
const {
  location,
  country,
  state,
  city,
  region
} = require('node-location')
```

## 说明

每一个地址信息的包含字段：

- name

  地址名字

- code

  地址代码

- level

  层级

  - 1：国家
  - 2：省/直辖市/州
  - 3：市
  - 4：县

- country

  国家名字

- state （可选）

  省/直辖市/州名字

- city （可选）

  市名字

- region （可选）

  县名字

## License
MIT
