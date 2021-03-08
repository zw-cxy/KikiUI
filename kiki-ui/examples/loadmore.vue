<template>
  <view>
    <view class="doc-title-sub">加载更多</view>

    <ki-loadmore :loading="true"></ki-loadmore>
    <ki-loadmore :loading="false"></ki-loadmore>
    <ki-loadmore :loading="false" :dot="true"></ki-loadmore>
  </view>
</template>

<script>
export default {
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
