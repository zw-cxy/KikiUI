<template>
  <view>
    <view class="doc-title-sub">文字大小</view>
    <view class="px-md">
      <view class="row bb-md align-center text-center">
        <view class="col-2">6xl-60</view>
        <view class="col-10">
          <view class="py-md">
            <text class="icon-check-circle-s text-6xl text-green"></text>
          </view>
        </view>
      </view>
      
      <view class="row bb-md align-center text-center">
        <view class="col-2">4xl-40</view>
        <view class="col-10">
          <view class="py-md">
            <text class="icon-check-circle-s text-4xl text-green"></text>
          </view>
        </view>
      </view>
      
      <view class="row bb-md align-center text-center">
        <view class="col-2">2xl-20</view>
        <view class="col-10">
          <view class="py-md">
            <text class="icon-check-circle-s text-2xl text-green"></text>
          </view>
        </view>
      </view>
      
      <view class="row bb-md align-center text-center">
        <view class="col-2">
          xl-18
        </view>
        <view class="col-10">
          <view class="py-md">
            <text class="text-xl text-bold text-positive">购买成功！</text>
          </view>
        </view>
      </view>
      
      <view class="row bb-md align-center text-center">
        <view class="col-2">lg-16</view>
        <view class="col-10">
          <view class="py-md">
            <text class="text-lg">页面标题</text>
          </view>
        </view>
      </view>
      
      <view class="row bb-md align-center text-center">
        <view class="col-2">md-14</view>
        <view class="col-10">
          <view class="py-md">
            <text class="text-md">默认字号，页面文本</text>
          </view>
        </view>
      </view>
      
      <view class="row bb-md align-center text-center">
        <view class="col-2">sm-12</view>
        <view class="col-10">
          <view class="py-md">
            <text class="text-sm text-grey">辅助说明，副标题等</text>
          </view>
        </view>
      </view>
      
      <view class="row bb-md align-center text-center">
        <view class="col-2">xs-10</view>
        <view class="col-10">
          <view class="py-md">
            <text class="text-xs text-blue-grey">标签文字，关注度低的文字</text>
          </view>
        </view>
      </view>
    </view>
    
    <view class="doc-title-sub">文字颜色</view>
    <view class="row mx-md text-center bb-thin">
      <view v-for="item in themeColorList" :key="item" :class="['col-4', 'py-xs', 'text-' + item]">{{ item }}</view>
    </view>
    <view class="row mx-md text-center">
      <view v-for="item in colorList" :key="item" :class="['col-4', 'py-xs', 'text-' + item]">{{ item }}</view>
    </view>
    
    <view class="doc-title-sub">文字对齐</view>
    <view class="m-md text-left">这是一段文字，这是一段文字。</view>
    <view class="m-md text-center">这是一段文字，这是一段文字。</view>
    <view class="m-md text-right">这是一段文字，这是一段文字。</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      themeColorList: [],
      colorList: []
    }
  },
  onLoad() {
    this.themeColorList = getApp().globalData.themeColorList
    this.colorList = getApp().globalData.colorList
  },
  methods: {
    imageLoad(e) {
      console.log(e)
    }
  }
}
</script>

<style scoped lang="scss">
.col-2 {
  font-family: consolas;
}
</style>
