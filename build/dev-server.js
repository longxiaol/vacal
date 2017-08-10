require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
app.get("/vacal",function(req,res){
	res.json({
		
		indeximg:[
		{id:1,src:'http://i7.m.vancl.com/wap/2017_7_27_15_48_48_7519_320x579.jpg'},	
		{id:2,src:'http://i2.m.vancl.com/wap/2017_7_27_15_49_14_2968_320x579.jpg'},
		{id:3,src:'http://i6.m.vancl.com/wap/2017_7_27_15_48_57_6447_320x579.jpg'},
		
		{id:4,src:'http://i4.m.vancl.com/wap/2017_7_27_15_49_26_4248_320x579.jpg'},
		{id:5,src:'http://i9.m.vancl.com/wap/2017_7_27_15_49_38_9920_320x579.jpg'},
		{id:6,src:'http://i2.m.vancl.com/wap/2017_7_27_15_49_48_2331_320x579.jpg'},
		{id:7,src:'http://i5.m.vancl.com/wap/2017_7_27_15_49_58_5655_320x579.jpg'},
		{id:8,src:'http://i4.m.vancl.com/wap/2017_7_27_15_50_12_4319_320x579.jpg'},
		{id:9,src:'http://mimages.vancl.com/wap/2017_7_27_15_50_30_909_320x579.jpg'},
		{id:10,src:'http://i5.m.vancl.com/wap/2017_7_27_15_50_40_5218_320x579.jpg'}
	],
recommend:[
	      {'id':1,'url':'http://p1.vanclimg.com/product/6/3/7/6375963/mid/6375963-1j201703071038403242.jpg','proName':'T恤'},
	      {'id':2,'url':'http://p4.vanclimg.com/product/6/3/7/6375718/mid/6375718-1j201704171547271221.jpg','proName':'短袖衬衫'},
	      {'id':3,'url':'http://p1.vanclimg.com/product/6/3/7/6375765/mid/6375765-1j201704141534436636.jpg','proName':'POLO'},
	      {'id':4,'url':'http://p4.vanclimg.com/product/6/3/7/6375466/mid/6375466-1j201703291442422570.jpg','proName':'吉国武'},
	      {'id':1,'url':'http://p4.vanclimg.com/product/6/3/7/6375687/mid/6375687-1j201702161003008614.jpg','proName':'牛津纺'},
	      {'id':2,'url':'http://p1.vanclimg.com/product/6/3/7/6373889/mid/6373889-1j201608231038149149.jpg','proName':'水柔棉'},
	      {'id':3,'url':'http://p4.vanclimg.com/product/6/3/7/6374309/mid/6374309-1j201608231152539580.jpg','proName':'休闲衬衫'},
	      {'id':4,'url':'http://p4.vanclimg.com/product/6/3/7/6375920/mid/6375920-1j201704071346168501.jpg','proName':'皮肤衣'},
	      {'id':1,'url':'http://p4.vanclimg.com/product/6/3/7/6375709/mid/6375709-1j201702221652020476.jpg','proName':'卫衣'},
	      {'id':2,'url':'http://p4.vanclimg.com/product/6/3/7/6377126/mid/6377126-1j201705091105231061.jpg','proName':'童装'},
	      {'id':3,'url':'http://p5.vanclimg.com/product/6/3/7/6375237/mid/6375237-1j201609181106554831.jpg','proName':'休闲裤'},
	      {'id':4,'url':'http://p3.vanclimg.com/product/6/3/7/6375663/mid/6375663-1201702221659421316.jpg','proName':'牛仔裤'},
	      {'id':3,'url':'http://p4.vanclimg.com/product/6/3/7/6375759/mid/6375759-1j201704131120322963.jpg','proName':'沙滩裤'},
	      {'id':2,'url':'http://p5.vanclimg.com/product/6/3/7/6375881/mid/6375881-1j201702281503335949.jpg','proName':'帆布鞋'},
	      {'id':4,'url':'http://p1.vanclimg.com/product/6/3/7/6375869/mid/6375869-1j201703301445582286.jpg','proName':'复古跑'}
	    ],
	    
	goodshow:[
	{
		id:1,
		name:'童装熊本熊',
		src1:'http://i1.m.vancl.com/q80/wap/2017_7_24_14_48_24_8386.jpg',
		src2:'http://i4.m.vancl.com/q80/wap/2017_7_21_12_57_44_463.jpg',
		src3:'http://i4.m.vancl.com/q80/wap/2017_7_21_12_58_33_2597.jpg',
		src4:'http://i2.m.vancl.com/q80/wap/2017_7_21_12_58_47_3951.jpg',
		src5:'http://i6.m.vancl.com/q80/wap/2017_7_21_12_59_4_3365.jpg',
		src6:'http://i5.m.vancl.com/q80/wap/2017_7_21_12_59_48_3916.jpg',
		src7:'http://i6.m.vancl.com/q80/wap/2017_7_21_13_0_1_7779.jpg',
		src8:'http://i4.m.vancl.com/q80/wap/2017_7_21_13_1_28_1357.jpg',
		src9:'http://i3.m.vancl.com/q80/wap/2017_7_21_13_1_44_9756.jpg',
		src10:'http://i5.m.vancl.com/q80/wap/2017_7_21_13_3_5_8230.jpg',
		src11:'http://i9.m.vancl.com/q80/wap/2017_7_21_13_3_25_5768.jpg',
		src12:'http://i4.m.vancl.com/q80/wap/2017_7_21_13_5_2_831.jpg',
		src13:'http://i1.m.vancl.com/q80/wap/2017_7_21_13_5_22_1052.jpg',
		src14:'http://i4.m.vancl.com/q80/wap/2017_7_21_13_5_47_1143.jpg',
		src15:'http://i6.m.vancl.com/q80/wap/2017_7_21_14_28_4_8904.jpg'
	},
	{
		id:2,
		name:'T恤熊本熊',
		src1:'http://i4.m.vancl.com/q80/wap/2017_7_18_16_4_56_4149.jpg',
		src2:'http://i1.m.vancl.com/q80/wap/2017_6_8_15_35_59_1610.jpg',
		src3:'http://i2.m.vancl.com/q80/wap/2017_7_4_16_50_20_8641.jpg',
		src4:'http://i5.m.vancl.com/q80/wap/2017_7_4_16_50_33_5535.jpg',
		src5:'http://i9.m.vancl.com/q80/wap/2017_6_8_15_38_7_3096.jpg',
		src6:'http://i5.m.vancl.com/q80/wap/2017_7_21_12_59_48_3916.jpg',
		src7:'http://i6.m.vancl.com/q80/wap/2017_7_21_13_0_1_7779.jpg',
		src8:'http://i4.m.vancl.com/q80/wap/2017_7_21_13_1_28_1357.jpg',
		src9:'http://i3.m.vancl.com/q80/wap/2017_7_21_13_1_44_9756.jpg',
		src10:'http://i5.m.vancl.com/q80/wap/2017_7_21_13_3_5_8230.jpg',
		src11:'http://i9.m.vancl.com/q80/wap/2017_7_21_13_3_25_5768.jpg',
		src12:'http://i4.m.vancl.com/q80/wap/2017_7_21_13_5_2_831.jpg',
		src13:'http://i1.m.vancl.com/q80/wap/2017_7_21_13_5_22_1052.jpg',
		src14:'http://i4.m.vancl.com/q80/wap/2017_7_21_13_5_47_1143.jpg',
		src15:'http://i6.m.vancl.com/q80/wap/2017_7_21_14_28_4_8904.jpg'
	},
	{
		id:3,
		name:'童装熊本熊',
		src1:'http://i1.m.vancl.com/q80/wap/2017_7_24_14_48_24_8386.jpg',
		src2:'http://i4.m.vancl.com/q80/wap/2017_7_21_12_57_44_463.jpg',
		src3:'http://i4.m.vancl.com/q80/wap/2017_7_21_12_58_33_2597.jpg',
		src4:'http://i2.m.vancl.com/q80/wap/2017_7_21_12_58_47_3951.jpg',
		src5:'http://i6.m.vancl.com/q80/wap/2017_7_21_12_59_4_3365.jpg',
		src6:'http://i5.m.vancl.com/q80/wap/2017_7_21_12_59_48_3916.jpg',
		src7:'http://i6.m.vancl.com/q80/wap/2017_7_21_13_0_1_7779.jpg',
		src8:'http://i4.m.vancl.com/q80/wap/2017_7_21_13_1_28_1357.jpg',
		src9:'http://i3.m.vancl.com/q80/wap/2017_7_21_13_1_44_9756.jpg',
		src10:'http://i5.m.vancl.com/q80/wap/2017_7_21_13_3_5_8230.jpg',
		src11:'http://i9.m.vancl.com/q80/wap/2017_7_21_13_3_25_5768.jpg',
		src12:'http://i4.m.vancl.com/q80/wap/2017_7_21_13_5_2_831.jpg',
		src13:'http://i1.m.vancl.com/q80/wap/2017_7_21_13_5_22_1052.jpg',
		src14:'http://i4.m.vancl.com/q80/wap/2017_7_21_13_5_47_1143.jpg',
		src15:'http://i6.m.vancl.com/q80/wap/2017_7_21_14_28_4_8904.jpg'
	}
	
	],
	
	details:[
			{
				id:1,
				check:true,
				url1:'http://i.vanclimg.com/640/q80/product/6/3/7/6378013/big/6378013-1j201707201626460629.jpg',
				url2:'http://i.vanclimg.com/640/q80/product/6/3/7/6378013/big/6378013-5201707201626460629.jpg',
				name:'童装T恤 熊本熊 T1 白色',
				price:78
			},
      {
        id:2,
        check:true,
        url1:'http://i.vanclimg.com/640/q80/product/6/3/7/6375986/big/6375986-1j201703081614368562.jpg',
        				url2:'http://i.vanclimg.com/640/q80/product/6/3/7/6375986/big/6375986-2201703081614368562.jpg',
        name:'凡客T恤 十二生肖 蛇 白色',
        price:98
      },
      {
        id:3,
        check:true,
        url1:'http://i.vanclimg.com/640/q80/product/6/3/7/6374862/big/6374862-1j201605240949159923.jpg',
        				url2:'http://i.vanclimg.com/640/q80/product/6/3/7/6374862/big/6374862-5201605240949159923.jpg',
        name:'凡客帆布鞋 女款 橘色',
        price:198
      },
      {
        id:4,
        check:true,
        'url1':'http://i.vanclimg.com/640/q80/product/6/3/7/6373888/big/6373888-1j201608231038151804.jpg',
        'url2':'http://i.vanclimg.com/640/q80/product/6/3/7/6373888/big/6373888-2201608231038151804.jpg',
        name:'凡客T恤 水柔棉 短袖圆领 男款 黑色',
        price:168
      },
      {
        id:5,
        check:true,
        'url1':'http://i.vanclimg.com/640/q80/product/6/3/7/6375667/big/6375667-1j201702221659471941.jpg',
        'url2':'http://i.vanclimg.com/640/q80/product/6/3/7/6375667/big/6375667-03201702221659421316.jpg',
        name:'牛仔 前开叉长裙 女款 蓝水牛',
        price:358
      }
    ]

	})
})
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
