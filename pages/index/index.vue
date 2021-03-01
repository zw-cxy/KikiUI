<template>
	<view>
		<view class="nav-list">
      <view v-for="item in list" class="nav-list-sub">
        <view class="nav-list-sub-title">{{ item.title }}</view>
        <navigator v-for="item in item.list" :url="item.url">{{ item.title }}</navigator>
      </view>
    </view>
	</view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { 
          title: 'Basic',
          list: [
            { title: 'Image', url: '../basic/image' }
          ]
        }
      ]
    }
  },
  onLoad() {

  },
  methods: {

  }
}
</script>

<style>
.spin {
  animation: spin 1s infinite !important;
}
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
}
</style>
