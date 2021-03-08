<template>
  <view
    class="ki-loadmore"
    :class="[{ 'ki-loadmore_line': !loading, 'ki-loadmore_dot': dot }]"
  >
    <text v-if="loading" class="ki-loading-primary text-lg">
      <text class="ki-loading-primary__dot"></text>
    </text>
    <text class="ki-loadmore__tips">{{ tipsText }}</text>
  </view>
</template>

<script>
/**
 * 加载更多
 * @description
 * @property {Boolean} loading 是否显示加载动画
 * @property {String} tips 文字内容
 * @property {Boolean} dot 是否显示圆点，加载完毕且显示圆点时不显示文字
 */

export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    tips: {
      type: String,
      default: ''
    },
    dot: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    tipsText() {
      if (this.loading) {
        return this.tips || '正在加载'
      } else {
        if (this.dot) {
          return ''
        } else {
          return this.tips || '没有更多了'
        }
      }
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">

</style>
