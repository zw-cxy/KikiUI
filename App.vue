<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
    globalData: {
      themeColorList: [
        'primary',
        'secondary',
        'accent',
        'positive', 
        'negative',
        'info',
        'warning'
      ],
      colorList: [
        'red',
        'pink',
        'purple',
        'deep-purple',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'deep-orange',
        'brown',
        'grey',
        'blue-grey'
      ]
    }
	}
</script>

<style lang="scss">
@import "styles/index.scss";
.doc-title-sub {
  font-size: 30upx;
  margin: map-get(map-get($spacings, 'md'), 'x');
  padding-left: map-get(map-get($spacings, 'sm'), 'x');
  border-left: 3px solid $primary;
  background-color: #f7f7f7;
}
</style>
