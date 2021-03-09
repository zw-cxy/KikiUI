## todo

### 深色模式适配

#### css

只能自动适配，不能手动设定。
- 通过媒体查询 `prefers-color-scheme: dark` 切换暗色模式
- 暗色模式时，更改css自定义变量值

```css
body {
  --text-primary: #000;
}
@media (prefers-color-scheme: dark) {
  body {
    --text-primary: #fff;
  }
}
.text-primary {
  color: var(--text-primary);
}
```

#### 小程序

[微信官方适配指南](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html)

获取主题模式，`wx.getSystemInfoSync()`。[文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfoSync.html)

监听系统主题改变，`wx.onThemeChange()`。[文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html)

#### web

[微信官方适配指南](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/DarkMode.html)

#### js控制切换

- js无法更改prefers-color-scheme
- js可以监听prefers-color-scheme的变化
- 要实现手动切换且实现较为简单需要能更改根元素的属性来应用一组全新的css变量，uni-app没有合适的办法，该功能暂时放弃。
