const Mock = require('better-mock/dist/mock.mp.js')
const Random = Mock.Random

Mock.mock('api/test', req => {
  return Mock.mock({
    // 占位符
    first: '@first',
    middle: '@first',
    last: '@last',
    full: '@first @middle @last',
    
    booleanVal: '@boolean',
    booleanRandom: '@boolean(2, 3, true)',
    
    naturalNum: '@natural',
    naturalMin: '@natural(100)',
    naturalMinMax: '@natural(100, 200)',
    
    int: '@integer',
    intMin: '@integer(-10000)',
    intMinMax: '@integer(-100, 100)',
    
    floatNum: '@float',
    floatMin: '@float(0)',
    floatMinMax: '@float(0, 10)',
    floatMinMaxMinMax: '@float(0, 10, 1, 2)',
    
    characterC: '@character',
    characterLower: '@character(lower)',
    characterUpper: Random.character('upper'),
    characterSymbol: Random.character('symbol'),
    
    stringD: Random.string(),
    stringLength: Random.string(6),
    stringMinMax: Random.string(6, 12),
    stringPoolLength: Random.string('lower', 8),
    stringPoolMinMax: Random.string('upper', 8, 16),
    stringPoolCustom: Random.string('壹贰叁肆伍陆柒捌玖拾', 3),
    
    rangeD: Random.range(10),
    rangeStartEnd: Random.range(3, 7),
    rangeStartEndStep: Random.range(1, 10, 4)
  })
})

Mock.mock('/login', req => {
  console.log(req.body)
  return {
    userInfo: {
      openid: '@string(lower, 32)',
      name: '',
      phoneNumber: '',
      gender: 0,
      birthday: ''
    }
  }
})
Mock.mock('/getPhoneNum', req => {
  console.log(req.body)
  return {
    phoneNum: '15617287602',
    sessionId: Random.string('upper', 20)
  }
})

Mock.mock('/getUserUnchecked', req => {
  console.log(req.body)
  return Mock.mock({
    'list|8': [{
      'id|+1#string': 100000,
      name: '@cname',
      gender: 1,
      birthday: '@date',
      phoneNumber: '@phone'
    }]
  })
})

Mock.mock('/getOrderList', req => {
  console.log(req.body)
  return Mock.mock({
    'list|8': [{
      cover: '@image(100x100,#234567)',
      itemName: '@cword(10,16)',
      id: '@string(number,24)',
      name: '@cname(3)',
      address: '@county(true)',
      phoneNumber: '@phone',
      createdDate: '@datetime'
    }]
  })
})