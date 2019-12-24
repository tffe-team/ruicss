# rui
> 简介

rui为css前端框架 目前仅用于自己项目组，使用sass作为语法糖

> 目录介绍

|--sass  为源码目录
|----lib  为类库源文件
|----usage 为用例代码（如何使用参考这个目录）
|-css 为编译后的代码  
|-demo 为用例展示页
|-font 为字体文件  


> 文档地址  

https://tffe-team.github.io/#/ruicss/docs/overview

> start
```
$ npm install ruicss --save-dev
//重置样式
@charset "utf-8";
/**
 * 框架全局base定义
 */

// base
$base: (
    // 适配：class名前缀 
    prefix: 'rui',          
    responsive-type:        normal,
    font-size-root:         100px,
    // 适配：用于做元素随屏幕大小而变化的情况
    font-size-root-scaling: 31.25vw,
    font-size:            14px,
    // 基准字号，随root改变而变
    font-size-baseline:   .14rem,
    // font-family
    font-family:          #{"Helvetica Neue", Helvetica, STHeiTi, sans-serif},
    //font-path
    font-path:            "~ruicss/sass/font/",
    // lin-height
    line-height:          1.5,
    // 默认文档背景色
    doc-bgcolor:          #fafafa,
    // 默认边框色
    border-color:         #ccc,
    // 默认次级边框色
    sub-border-color:     #ddd,
    // 默认背景颜色
    bgcolor:              #fafafa,
    // 默认文本颜色
    color:                #212121,
    // 默认次级文本颜色
    sub-color:            #666,
    // 默认边框色
    disabled-border-color:#ccc,
    // 默认文档颜色
    disabled-bgcolor:     #e0e0e0,
    // 默认禁用文本颜色
    disabled-color:       #bbb,
    // 高亮色
    light-color:          #FE0053,
    // 价格颜色
    price-color:          #f60,
    // 默认链接色
    link-color:           #508CF0,
    // 链接经过色
    link-hover-color:     #6298F2
);
@import "~ruicss/sass/index.scss";
```

