<template>
  <view ref="ref" class="test-container">
    <text>{{message}}</text>
    <button @click="addMsg">点击</button>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex';
  var key = 0;
  export default {

    data() {
      return {
        message: 1
      }
    },

    computed: {

    },

    methods: {

      addMsg() {
        this.message++
      }

    },

    beforeCreate() {
      console.group('beforeCreate 组件创建之前状态===============》');
      console.log("el     : ", this.$el);
      console.log("data   : ", this.$data);
      console.log("message: ", this.message)
    },

    onLoad() {
      console.group('onLoad 状态===============》');
      console.log("el     : ", this.$el);
      console.log("data   : ", this.$data);
      console.log("message: ", this.message)
    },

    onShow() {
      console.group('onShow 状态===============》');
      console.log("el     : ", this.$el);
      console.log("data   : ", this.$data);
      console.log("message: ", this.message)
    },

    onReady() {
      console.group('onReady 状态===============》');
      console.log("el     : ", this.$el);
      console.log("data   : ", this.$data);
      console.log("message: ", this.message)
    },

    onUnload() {
      console.group('onUnload 状态===============》');
      console.log("el     : ", this.$el);
      console.log("data   : ", this.$data);
      console.log("message: ", this.message)
    },


    created() {
      console.group('created 组件创建完毕状态===============》');
      console.log("el     : ", this.$el);
      console.log("data   : ", this.$data);
      console.log("message: ", this.message);
    },

    beforeMount() {
      console.group('beforeMount 组件挂载之前状态===============》');
      console.log("el     : ", (this.$el));
      console.log("data   : ", this.$data);
      console.log("message: ", this.message);
    },

    mounted() {
      console.group('mounted 组件挂载完毕状态===============》');
      console.log("el     : ", this.$el);
      console.log("data   : ", this.$data);
      console.log("message: ", this.message);
    },

    beforeUpdate() {
      console.group('beforeUpdate 组件更新之前状态===============》');
      console.log("el     : ", this.$el);
      console.log("data   : ", this.$data);
      console.log("message: ", this.message);
    },

    updated() {
      console.group('updated 组件更新完毕状态===============》');
      console.log("el     : ", this.$el);
      console.log("data   : ", this.$data);
      console.log("message: ", this.message);
    },

    beforeDestroy() {
      console.group('beforeDestroy 组件销毁之前状态===============》');
      console.log("el     : ", this.$el);
      console.log("data   : ", this.$data);
      console.log("message: ", this.message);
    },

    destroyed() {
      console.group('destroyed 组件销毁完毕状态===============》');
      console.log("el     : ", this.$el);
      console.log("data   : ", this.$data);
      console.log("message: ", this.message)
    }

  }
</script>

<style lang="scss">
  .test-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0upx 40upx;

    button {
      margin-top: 100upx;
    }
  }
</style>
