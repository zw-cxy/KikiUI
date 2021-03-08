<template>
  <view>
    <view class="doc-title-sub">加载更多</view>
    
    <view class="ki-loadmore">
      <text class="ki-loading-primary text-lg">
        <text class="ki-loading-primary__dot"></text>
      </text>
      <text class="ki-loadmore__tips">正在加载</text>
    </view>
    
    <view class="ki-loadmore ki-loadmore_line">
      <text class="ki-loadmore__tips">暂无数据</text>
    </view>
    
    <view class="ki-loadmore ki-loadmore_line ki-loadmore_dot">
      <text class="ki-loadmore__tips"></text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'KiLoadmore',
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">

</style>
