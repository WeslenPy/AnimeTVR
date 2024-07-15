var _0x3f4187 = (function () {
    var _0x523309 = true
    return function (_0x29083d, _0x1f2169) {
      var _0x3b9e96 = _0x523309
        ? function () {
            if (_0x1f2169) {
              var _0x3a4cd3 = _0x1f2169.apply(_0x29083d, arguments)
              return (_0x1f2169 = null), _0x3a4cd3
            }
          }
        : function () {}
      return (_0x523309 = false), _0x3b9e96
    }
  })(),
  _0x8f8566 = _0x3f4187(this, function () {
    var _0x1aba02 = function () {
      var _0x40645d = _0x1aba02
        .constructor('return /" + this + "/')()
        .constructor('^([^ ]+( +[^ ]+)+)+[^ ]}')
      return !_0x40645d.test(_0x8f8566)
    }
    return _0x1aba02()
  })
_0x8f8566()
var _0x11f959 = (function () {
  var _0x757b32 = true
  return function (_0x440643, _0xf5271e) {
    var _0x3b1359 = _0x757b32
      ? function () {
          if (_0xf5271e) {
            var _0x366918 = _0xf5271e.apply(_0x440643, arguments)
            return (_0xf5271e = null), _0x366918
          }
        }
      : function () {}
    return (_0x757b32 = false), _0x3b1359
  }
})()
;(function () {
  _0x11f959(this, function () {
    var _0xc759af = new RegExp('function *\\( *\\)'),
      _0x36da69 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
    var _0x4649ab = _0x199630('init')
    !_0xc759af.test(_0x4649ab + 'chain') || !_0x36da69.test(_0x4649ab + 'input')
      ? _0x4649ab('0')
      : _0x199630()
  })()
})()
setInterval(function () {
  _0x199630()
}, 4000)
var _0x2becef = (function () {
    var _0x1aae15 = true
    return function (_0x5a938c, _0x14928a) {
      var _0x194be3 = _0x1aae15
        ? function () {
            if (_0x14928a) {
              var _0x361410 = _0x14928a.apply(_0x5a938c, arguments)
              return (_0x14928a = null), _0x361410
            }
          }
        : function () {}
      return (_0x1aae15 = false), _0x194be3
    }
  })(),
  _0x4c7a6e = _0x2becef(this, function () {
    var _0x142a6c
    try {
      var _0x5b94f5 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x142a6c = _0x5b94f5()
    } catch (_0x48d88f) {
      _0x142a6c = window
    }
    var _0x44934e = (_0x142a6c.console = _0x142a6c.console || {})
    var _0x223080 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (var _0x52d8df = 0; _0x52d8df < _0x223080.length; _0x52d8df++) {
      var _0x46f555 = _0x2becef.constructor.prototype.bind(_0x2becef)
      var _0xe8785c = _0x223080[_0x52d8df]
      var _0x4f56a0 = _0x44934e[_0xe8785c] || _0x46f555
      _0x46f555['__proto__'] = _0x2becef.bind(_0x2becef)
      _0x46f555.toString = _0x4f56a0.toString.bind(_0x4f56a0)
      _0x44934e[_0xe8785c] = _0x46f555
    }
  })
_0x4c7a6e()
angular
  .module('app', [
    'ionic',
    'app.controllers',
    'app.services',
    'jett.ionic.filter.bar',
  ])
  .config([
    '$ionicConfigProvider',
    '$sceProvider',
    '$compileProvider',
    '$stateProvider',
    '$urlRouterProvider',
    function (_0x597314, _0x3a354e, _0x437b52, _0x292e43, _0x27cbc7) {
      _0x3a354e.enabled(false)
      _0x597314.scrolling.jsScrolling(false)
      _0x437b52.debugInfoEnabled(false)
      _0x292e43
        .state('noticias', {
          url: '/noticias',
          templateUrl: 'templates/noticias.html',
          controller: 'noticiasCtrl',
        })
        .state('animes', {
          url: '/animes/:letra',
          templateUrl: 'templates/animes.html',
          controller: 'animesCtrl',
        })
        .state('animeinfo', {
          url: '/animeinfo/:id',
          templateUrl: 'templates/animeinfo.html',
          controller: 'animeinfoCtrl',
        })
        .state('animescategoria', {
          url: '/animescategoria/:cat',
          templateUrl: 'templates/animescategoria.html',
          controller: 'animescategoriaCtrl',
        })
        .state('letras', {
          url: '/letras/',
          templateUrl: 'templates/letras.html',
          controller: 'letrasCtrl',
        })
        .state('suporte', {
          url: '/suporte/',
          templateUrl: 'templates/suporte.html',
          controller: 'suporteCtrl',
        })
        .state('faq', {
          url: '/faq/',
          templateUrl: 'templates/faq.html',
          controller: 'faqCtrl',
        })
        .state('categorias', {
          url: '/categorias/:pag',
          templateUrl: 'templates/categorias.html',
          controller: 'categoriasCtrl',
        })
        .state('lancamentos', {
          cache: false,
          url: '/lancamentos/',
          templateUrl: 'templates/lancamentos.html',
          controller: 'lancamentosCtrl',
        })
        .state('populares', {
          url: '/populares/',
          templateUrl: 'templates/populares.html',
          controller: 'popularesCtrl',
        })
        .state('favoritos', {
          cache: false,
          url: '/favoritos/',
          templateUrl: 'templates/favoritos.html',
          controller: 'favoritosCtrl',
        })
        .state('assistidos', {
          cache: false,
          url: '/assistidos/',
          templateUrl: 'templates/assistidos.html',
          controller: 'assistidosCtrl',
        })
        .state('pesquisar', {
          url: '/pesquisar/',
          templateUrl: 'templates/pesquisar.html',
          controller: 'pesquisarCtrl',
        })
        .state('dublados', {
          url: '/dublados/',
          templateUrl: 'templates/dublados.html',
          controller: 'dubladosCtrl',
        })
        .state('episodios', {
          cache: false,
          url: '/episodios/:id',
          templateUrl: 'templates/episodios.html',
          controller: 'episodiosCtrl',
        })
      _0x27cbc7.otherwise('/lancamentos/')
    },
  ])
  .run([
    '$ionicPlatform',
    '$http',
    '$rootScope',
    function (_0x1a0a43, _0x27d24f, _0x1a8b6c) {
      _0x1a0a43.ready(function () {
        ionic.Platform.fullScreen()
        function _0x2d4b55(_0xe88672) {}
        function _0x10d1f3(_0x296398) {}
        function _0x37b51b(_0x1bc4cb) {
          var _0x506ca9 = ''
          _0x1bc4cb = btoa(_0x1bc4cb)
          _0x1bc4cb = btoa(_0x1bc4cb)
          for (i = 0; i < _0x1bc4cb.length; i++) {
            var _0x3f6317 = _0x1bc4cb.charCodeAt(i),
              _0x1fe6c9 = _0x3f6317 ^ 126
            _0x506ca9 = _0x506ca9 + String.fromCharCode(_0x1fe6c9)
          }
          _0x506ca9 = btoa(_0x506ca9)
          return _0x506ca9
        }
        window.ga.startTrackerWithId('UA-8778422-5')
        window.ga.setAppVersion('7.2')
        window.ga.setUserId(device.uuid)
        var _0x42fdcc = device
        window.plugins.OneSignal.startInit(
          'bc13a05c-bb72-4e4c-b5a8-41fb597e6516',
          '937659541419'
        ).endInit()
        window.plugins.OneSignal.getPermissionSubscriptionState(function (
          _0xa140dc
        ) {
          _0x42fdcc.userid = _0xa140dc.subscriptionStatus.userId
          _0x42fdcc.hijode = 'putatolo'
          window.sessionStorage.setItem(
            'user',
            _0x37b51b(JSON.stringify(_0x42fdcc))
          )
          window.plugins.OneSignal.sendTag('versao', 'meuanimetv73')
          _0x27d24f
            .get(
              'https://atv2.net/meuanimetv-74.php?config&userid=' +
                _0xa140dc.subscriptionStatus.userId
            )
            .then(function (_0x9b9223) {
              window.sessionStorage.setItem('ad', _0x9b9223.data.ad)
              window.sessionStorage.setItem(
                'interstitial',
                _0x9b9223.data.interstitial
              )
              window.sessionStorage.setItem('admax', _0x9b9223.data.admax)
              window.sessionStorage.setItem('msg', _0x9b9223.data.msg)
              _0x1a8b6c.msg = _0x9b9223.data.msg
              if (_0x9b9223.data.alerta != 'null') {
                alert(_0x9b9223.data.alerta)
              }
              if (_0x9b9223.data.mode == 'update') {
                window.open(_0x9b9223.data.update, '_system')
              }
              if (_0x9b9223.data.ad === 'admob') {
                window.admob.interstitial.load({
                  id: {
                    android: window.sessionStorage.getItem('interstitial'),
                  },
                })
              } else {
                if (_0x9b9223.data.ad === 'lovin') {
                  function _0x2bada1() {
                    cordova.exec(
                      _0x2d4b55,
                      _0x10d1f3,
                      'ZenPlugin',
                      'loadDeal',
                      []
                    )
                  }
                  _0x2bada1()
                } else {
                  if (_0x9b9223.data.ad === 'vungle') {
                    function _0x5785f2() {
                      cordova.exec(
                        _0x2d4b55,
                        _0x10d1f3,
                        'ZenPlugin',
                        'loadDealVungle',
                        []
                      )
                    }
                    _0x5785f2()
                  } else {
                    if (_0x9b9223.data.ad === 'odeal') {
                      function _0xfd1895() {
                        cordova.exec(
                          _0x2d4b55,
                          _0x10d1f3,
                          'ZenDealPlugin',
                          'loadDeal',
                          []
                        )
                      }
                      _0xfd1895()
                    } else {
                      if (_0x9b9223.data.ad === 'unity') {
                        function _0x5845f0() {
                          cordova.exec(
                            _0x2d4b55,
                            _0x10d1f3,
                            'ZenPlugin',
                            'loadDealUnity',
                            []
                          )
                        }
                        _0x5845f0()
                      }
                    }
                  }
                }
              }
            })
        })
        window.cordova &&
          window.cordova.plugins &&
          window.cordova.plugins.Keyboard &&
          (cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true),
          cordova.plugins.Keyboard.disableScroll(true))
      })
    },
  ])
function _0x199630(_0x264609) {
  function _0x43a2ee(_0x293e05) {
    if (typeof _0x293e05 === 'string') {
      return function (_0xc07944) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x293e05 / _0x293e05).length !== 1 || _0x293e05 % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x43a2ee(++_0x293e05)
  }
  try {
    if (_0x264609) {
      return _0x43a2ee
    } else {
      false
    }
  } catch (_0x33cfee) {}
}
