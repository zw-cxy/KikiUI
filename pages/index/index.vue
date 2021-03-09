<template>
  <view>
    <view class="">
      <view v-for="item in list" :key="item.title">
        <view class="text-lg text-bold p-md">{{ item.title }}</view>
        <navigator v-for="item in item.list" :key="item.title" :url="item.url" class="p-md py-xs">{{ item.title }}</navigator>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        title: '组件',
        list: [{
            title: '加载',
            url: '/kiki-ui/examples/loading'
          },
          {
            title: '加载更多',
            url: '/kiki-ui/examples/loadmore'
          }
        ]
      }]
    }
  },
  onLoad() {
    uni.request({
      url: 'api/test',
      success: res => {
        console.log(res)
      }
    })
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

    to {
      transform: rotate(359deg);
    }
  }
</style>
