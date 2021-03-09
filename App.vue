<script>
export default {
  onLaunch: function() {
    console.log('App Launch')
    if (window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { 
      console.log('dark')
    } else {
      console.log('light')
    }
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  },
  globalData: {
    colorList: [
      'red',
      'orange',
      'yellow',
      'green',
      'light-green',
      'brand',
      'blue',
      'indigo',
      'purple',
      'white',
      'link',
      'link-active',
      'textgreen',
    ]
  }
}
</script>

<style lang="scss">
@import "kiki-ui/styles/index.scss";
.doc-title-sub {
  font-size: 30upx;
  margin: map-get(map-get($spacings, 'md'), 'x');
  padding-left: map-get(map-get($spacings, 'sm'), 'x');
  border-left: 3px solid $brand;
}
</style>
