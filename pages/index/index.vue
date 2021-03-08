<template>
  <view>
    <view class="nav-list">
      <view v-for="item in list" :key="item.title" class="nav-list-sub">
        <view class="nav-list-sub-title">{{ item.title }}</view>
        <navigator v-for="item in item.list" :key="item.title" :url="item.url">{{ item.title }}</navigator>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        title: 'Basic',
        list: [{
            title: 'Text',
            url: '../basic/text'
          },
          {
            title: 'Image',
            url: '../basic/image'
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
