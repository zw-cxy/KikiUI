<template>
  <block>
    <view v-if="mode === 'flower'" class="ki-loading"></view>
    <view
      v-else
      class="ki-loading-primary text-lg"
      :class="color ? 'text-' + color : ''"
    >
      <view class="ki-loading-primary__dot"></view>
    </view>
  </block>
</template>

<script>
/**
 * 加载
 * @description
 * 
 */
export default {
  props: {
    mode: {
      type: String,
      default: 'circle'
    },
    color: {
      type: String,
      default: ''
    }
  },
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
