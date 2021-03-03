var Mockjs = require('mockjs')
const { Random }= Mockjs;
const phonePrefix = ['132', '135', '189']
const index = Math.floor(Math.random() * phonePrefix.length)
var phone = phonePrefix[index] + Mockjs.mock(/\d{8}/)
const addressesMock = function (app) {
    app.get('/api3/addresses', function(req, res) {
      var data = Mockjs.mock({
        // 属性 list 的值是一个数组，其中元素的数量从 1 到 10 个都有可能，随机
        'list|1-10': [{
          'id|+1': 0,
          "accept_name": Random.cname(),
          "mobile": phone,
          "province_name": Random.province(),
          "area": Mockjs.mock(/\d{6}/),
          "city": Mockjs.mock(/\d{6}/),
          "sex": parseInt(Random.boolean()),
          "district": {
            "districts": Random.province()+Random.city()+Random.county(),
            "area": Random.county(),
            "city": Random.city(),
            "province": Random.province()
          },
          "street": "有一间公寓八栋",
          "inner": false,
          "lat": "",
          "door_number": "AB1234",
          "is_default": parseInt(Random.boolean()),
          "province": Mockjs.mock(/\d{6}/),
          "area_name":Random.county(),
          "city_name": Random.city(),
          "poiname": ""
        }]
      })
      res.json(data);
    })
  }
  
  module.exports = addressesMock;

