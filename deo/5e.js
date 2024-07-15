var _0x131d9b = (function () {
    var _0x4ba559 = true
    return function (_0x4b2c73, _0x17e91b) {
      var _0x18ad00 = _0x4ba559
        ? function () {
            if (_0x17e91b) {
              var _0x443943 = _0x17e91b.apply(_0x4b2c73, arguments)
              return (_0x17e91b = null), _0x443943
            }
          }
        : function () {}
      return (_0x4ba559 = false), _0x18ad00
    }
  })()
  var _0x12de0a = _0x131d9b(this, function () {
    var _0x4b6325 = function () {
      var _0x45c6f5 = _0x4b6325
        .constructor('return /" + this + "/')()
        .constructor('^([^ ]+( +[^ ]+)+)+[^ ]}')
      return !_0x45c6f5.test(_0x12de0a)
    }
    return _0x4b6325()
  })
  _0x12de0a()
  var _0x3bc072 = (function () {
    var _0x135495 = true
    return function (_0x8f40fe, _0xd2fd10) {
      var _0x39988a = _0x135495
        ? function () {
            if (_0xd2fd10) {
              var _0x542aa6 = _0xd2fd10.apply(_0x8f40fe, arguments)
              return (_0xd2fd10 = null), _0x542aa6
            }
          }
        : function () {}
      return (_0x135495 = false), _0x39988a
    }
  })()
  ;(function () {
    _0x3bc072(this, function () {
      var _0x111214 = new RegExp('function *\\( *\\)')
      var _0x3457dc = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
        _0x41b37d = _0x320066('init')
      !_0x111214.test(_0x41b37d + 'chain') || !_0x3457dc.test(_0x41b37d + 'input')
        ? _0x41b37d('0')
        : _0x320066()
    })()
  })()
  setInterval(function () {
    _0x320066()
  }, 4000)
  var _0x465d69 = (function () {
      var _0x396892 = true
      return function (_0x2a7d88, _0x141c8f) {
        var _0xcbd0db = _0x396892
          ? function () {
              if (_0x141c8f) {
                var _0x477621 = _0x141c8f.apply(_0x2a7d88, arguments)
                return (_0x141c8f = null), _0x477621
              }
            }
          : function () {}
        return (_0x396892 = false), _0xcbd0db
      }
    })(),
    _0xcc055c = _0x465d69(this, function () {
      var _0x3d897b
      try {
        var _0x3b3f2e = Function(
          'return (function() {}.constructor("return this")( ));'
        )
        _0x3d897b = _0x3b3f2e()
      } catch (_0x49032e) {
        _0x3d897b = window
      }
      var _0x219ee3 = (_0x3d897b.console = _0x3d897b.console || {})
      var _0x33a869 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
      for (var _0xcadb99 = 0; _0xcadb99 < _0x33a869.length; _0xcadb99++) {
        var _0x52b97d = _0x465d69.constructor.prototype.bind(_0x465d69)
        var _0x1d5e68 = _0x33a869[_0xcadb99]
        var _0x56f6ba = _0x219ee3[_0x1d5e68] || _0x52b97d
        _0x52b97d['__proto__'] = _0x465d69.bind(_0x465d69)
        _0x52b97d.toString = _0x56f6ba.toString.bind(_0x56f6ba)
        _0x219ee3[_0x1d5e68] = _0x52b97d
      }
    })
  _0xcc055c()
  angular
    .module('app.controllers', [])
    .controller('faqCtrl', [
      '$scope',
      '$http',
      'LoadingService',
      function (_0x2f0a16, _0x3d8783, _0x4af955) {
        _0x4af955.show()
        _0x3d8783
          .get('https://atv2.net/meuanimetv-74.php?faq')
          .then(function (_0x479870) {
            _0x2f0a16.faq = _0x479870.data
          })
        _0x4af955.hide()
      },
    ])
    .controller('suporteCtrl', [
      '$scope',
      '$http',
      'LoadingService',
      function (_0x43f8f6, _0x57f940, _0x10c293) {
        _0x10c293.show()
        _0x57f940
          .get('https://atv2.net/meuanimetv-74.php?suporte')
          .then(function (_0x56a13) {
            _0x43f8f6.suporte = _0x56a13.data
          })
        _0x43f8f6.opensys = function () {
          try {
            window.plugins.OneSignal.getPermissionSubscriptionState(function (
              _0x627cdf
            ) {
              window.open(
                'https://atv2.net/removeads.php?userid=' +
                  _0x627cdf.subscriptionStatus.userId,
                '_system'
              )
            })
          } catch (_0x3de972) {
            alert(_0x3de972)
          }
        }
        _0x10c293.hide()
      },
    ])
    .controller('popularesCtrl', [
      '$scope',
      '$http',
      'LoadingService',
      function (_0x4a7fc0, _0x4d16fd, _0x1ee5c7) {
        _0x1ee5c7.show()
        _0x4d16fd
          .get('https://atv2.net/meuanimetv-74.php?populares')
          .then(function (_0x4dea37) {
            _0x4a7fc0.populares = _0x4dea37.data
            _0x1ee5c7.hide()
          })
      },
    ])
    .controller('noticiasCtrl', [
      '$scope',
      '$http',
      'LoadingService',
      function (_0x48e82a, _0x1a0f47, _0x3e447c) {
        _0x3e447c.show()
        _0x1a0f47
          .get('https://atv2.net/meuanimetv-74.php?noticias')
          .then(function (_0x3857c0) {
            _0x48e82a.noticias = _0x3857c0.data
          })
        _0x3e447c.hide()
      },
    ])
    .controller('lancamentosCtrl', [
      '$scope',
      '$http',
      'LoadingService',
      '$rootScope',
      function (_0x3b418f, _0x557944, _0x4f9d67, _0x3d8fbd) {
        _0x3b418f.msg = _0x3d8fbd.msg
        _0x4f9d67.show()
        _0x557944.get('https://atv2.net/meuanimetv-74.php?latest').then(
          function (_0xfc7c2f) {
            _0x3b418f.ultimos = _0xfc7c2f.data
          },
          function (_0x30db94) {
            alert(
              'Ocorreu um erro ao carregar os lancamentos, feche o app, limpe os dados e tente novamente.'
            )
          }
        )
        _0x4f9d67.hide()
        _0x3b418f.sair = function () {
          ionic.Platform.exitApp()
        }
      },
    ])
    .controller('dubladosCtrl', [
      '$scope',
      '$http',
      'LoadingService',
      '$ionicFilterBar',
      function (_0x1b692c, _0x4d977f, _0x20a3e4, _0x4413b2) {
        _0x20a3e4.show()
        _0x4d977f
          .get('https://atv2.net/meuanimetv-74.php?categoria=dublado')
          .then(
            function (_0x2bc365) {
              _0x1b692c.animes = _0x2bc365.data
              var _0x1f8ff8
              _0x1b692c.showFilterBar = function () {
                var _0x2e709c = {
                  items: _0x1b692c.animes,
                  filterProperties: ['category_name'],
                  update: function (_0x12391e) {
                    _0x1b692c.animes = _0x12391e
                  },
                }
                _0x1f8ff8 = _0x4413b2.show(_0x2e709c)
              }
              _0x20a3e4.hide()
            },
            function (_0x575fd7) {
              alert('Erro ao carregar! Verifique sua conexao com a internet.')
            }
          )
      },
    ])
    .controller('animesCtrl', [
      '$scope',
      '$http',
      'LoadingService',
      '$ionicFilterBar',
      '$stateParams',
      function (_0x24ab5c, _0x5c9625, _0x309bd7, _0x49b1fb, _0x5290a5) {
        _0x309bd7.show()
        _0x5c9625
          .get('https://atv2.net/meuanimetv-74.php?letra=' + _0x5290a5.letra)
          .then(
            function (_0x571f42) {
              _0x24ab5c.animes = _0x571f42.data
              var _0x2dea8f
              _0x24ab5c.showFilterBar = function () {
                var _0x37d328 = {
                  items: _0x24ab5c.animes,
                  filterProperties: ['category_name'],
                  update: function (_0x8e8bd5) {
                    _0x24ab5c.animes = _0x8e8bd5
                  },
                }
                _0x2dea8f = _0x49b1fb.show(_0x37d328)
              }
              _0x309bd7.hide()
            },
            function (_0x5f1047) {
              alert('Erro ao carregar! Verifique sua conexao com a internet.')
            }
          )
      },
    ])
    .controller('animescategoriaCtrl', [
      '$scope',
      '$http',
      'LoadingService',
      '$ionicFilterBar',
      '$stateParams',
      function (_0x1edb16, _0x4ad89f, _0x5993d4, _0x4ae735, _0x38fce5) {
        _0x5993d4.show()
        _0x4ad89f
          .get('https://atv2.net/meuanimetv-74.php?categoria=' + _0x38fce5.cat)
          .then(
            function (_0x3032b3) {
              _0x1edb16.animes = _0x3032b3.data
              var _0xdd31d4
              _0x1edb16.showFilterBar = function () {
                var _0x5a2806 = {
                  items: _0x1edb16.animes,
                  filterProperties: ['category_name'],
                  update: function (_0x485114) {
                    _0x1edb16.animes = _0x485114
                  },
                }
                _0xdd31d4 = _0x4ae735.show(_0x5a2806)
              }
              _0x5993d4.hide()
            },
            function (_0x306c42) {
              alert('Erro ao carregar! Verifique sua conexao com a internet.')
            }
          )
      },
    ])
    .controller('animeinfoCtrl', [
      '$scope',
      '$http',
      'LoadingService',
      '$ionicFilterBar',
      '$stateParams',
      'favoritosApi',
      function (
        _0x2af146,
        _0x3b8797,
        _0x17ada7,
        _0xaf074b,
        _0x504771,
        _0x3de78a
      ) {
        _0x17ada7.show()
        _0x2af146.toggle = true
        var _0x50f2ef
        for (
          var _0x5a9510 = 0;
          _0x5a9510 < _0x3de78a.getFavoritos().length;
          _0x5a9510++
        ) {
          if (
            angular.equals(_0x3de78a.getFavoritos()[_0x5a9510].id, _0x504771.id)
          ) {
            _0x2af146.toggle = false
            break
          } else {
            _0x2af146.toggle = true
          }
        }
        _0x3b8797
          .get('https://atv2.net/meuanimetv-74.php?info=' + _0x504771.id)
          .then(
            function (_0x5d2ab3) {
              _0x2af146.animeinfo = _0x5d2ab3.data
              window.ga.trackEvent(
                'AnimeInfo',
                _0x2af146.animeinfo[0].category_name
              )
            },
            function (_0x2b8bbb) {
              alert('Erro ao carregar! Verifique sua conexao com a internet.')
            }
          )
        _0x3b8797
          .get('https://atv2.net/meuanimetv-74.php?cat_id=' + _0x504771.id)
          .then(
            function (_0x2fe75c) {
              _0x2af146.animes = _0x2fe75c.data
              var _0x265ca6
              _0x2af146.showFilterBar = function () {
                var _0x208120 = {
                  items: _0x2af146.animes,
                  filterProperties: ['title'],
                  update: function (_0x2dee71) {
                    _0x2af146.animes = _0x2dee71
                  },
                }
                _0x265ca6 = _0xaf074b.show(_0x208120)
              }
              _0x17ada7.hide()
            },
            function (_0x31d674) {
              alert('Erro ao carregar! Verifique sua conexao com a internet.')
            }
          )
        _0x2af146.favoritar = function (_0x249e79, _0x57c201) {
          for (
            var _0x28b898 = 0;
            _0x28b898 < _0x3de78a.getFavoritos().length;
            _0x28b898++
          ) {
            if (
              angular.equals(
                _0x3de78a.getFavoritos()[_0x28b898].id,
                _0x2af146.animeinfo[0].id
              )
            ) {
              _0x50f2ef = 0
              break
            } else {
              _0x50f2ef = 1
            }
          }
          _0x50f2ef === 0
            ? (_0x3de78a.deleteFavorito(_0x249e79),
              (_0x2af146.toggle = true),
              window.plugins.OneSignal &&
                window.plugins.OneSignal.getPermissionSubscriptionState(function (
                  _0x451ba1
                ) {
                  _0x3b8797.get(
                    'https://atv2.net/meuanimetv-74.php?nfav=' +
                      _0x57c201 +
                      '&player=' +
                      _0x451ba1.subscriptionStatus.userId
                  )
                }))
            : (_0x3de78a.addFavorito(_0x249e79),
              (_0x2af146.toggle = false),
              window.plugins.OneSignal &&
                window.plugins.OneSignal.getPermissionSubscriptionState(function (
                  _0x29d3e7
                ) {
                  _0x3b8797.get(
                    'https://atv2.net/meuanimetv-74.php?fav=' +
                      _0x57c201 +
                      '&player=' +
                      _0x29d3e7.subscriptionStatus.userId
                  )
                }))
        }
      },
    ])
    .controller('letrasCtrl', [
      '$scope',
      function (_0x292a3a) {
        _0x292a3a.letras = [
          _0x977eb3,
          _0x496402,
          _0x1c6586,
          _0x5abcac,
          _0x52b579,
          _0x329e9d,
          _0x1aee5d,
          _0x373d65,
          _0x4a8f0d,
          _0x178543,
          _0x5cd7a2,
          _0x4cc260,
          _0x7a8aff,
          _0x283e7b,
          _0x1370a1,
          _0x37571d,
          _0x5b654b,
          _0x370eee,
          _0x39178f,
          _0x578194,
          _0x990766,
          _0x18cabe,
          _0x229052,
          _0x12e443,
          _0x2749bc,
          _0x1474c7,
          _0x75dd57,
        ]
      },
    ])
    .controller('categoriasCtrl', [
      '$scope',
      '$http',
      '$stateParams',
      function (_0x1c4de8, _0x4281bc, _0xecd42d) {
        if (_0xecd42d.pag == 'categorias') {
          _0x1c4de8.titulo = 'Categorias'
          _0x1c4de8.pag = 'categorias'
        } else {
          _0xecd42d.pag == 'calendario' &&
            ((_0x1c4de8.pag = 'calendario'),
            (_0x1c4de8.titulo = 'Calendario'),
            _0x4281bc
              .get('https://atv2.net/meuanimetv-74.php?calendario')
              .then(function (_0x2f5cd2) {
                _0x1c4de8.calendario = _0x2f5cd2.data
              }))
        }
      },
    ])
    .controller('assistidosCtrl', [
      '$scope',
      '$http',
      'LoadingAssistidos',
      '$timeout',
      'assistidosApi',
      function (_0x479a0c, _0x13489, _0x3c9aa2, _0xbc4376, _0x3b590f) {
        ;(_0x3b590f.getAssistidos().length == undefined ||
          _0x3b590f.getAssistidos().length == 0 ||
          _0x3b590f.getAssistidos().length == null) &&
          (_0x3c9aa2.show(),
          _0xbc4376(function () {
            window.plugins.OneSignal &&
              window.plugins.OneSignal.getPermissionSubscriptionState(function (
                _0x32931e
              ) {
                _0x13489
                  .get(
                    'https://atv2.net/meuanimetv-74.php?assistidos=' +
                      _0x32931e.subscriptionStatus.userId
                  )
                  .then(
                    function (_0x3c848b) {
                      if (
                        _0x3c848b.data != null &&
                        _0x32931e.subscriptionStatus.userId != null
                      ) {
                        localStorage.setItem(
                          'assistidos',
                          JSON.stringify(_0x3c848b.data)
                        )
                      }
                      _0x479a0c.assistidos = _0x3c848b.data
                      _0x3c9aa2.hide()
                    },
                    function (_0x316978) {
                      _0x3c9aa2.hide()
                      alert(
                        'Erro ao carregar! Por favor feche e abra novamente o app.'
                      )
                    }
                  )
              })
          }, 3000))
        _0x479a0c.assistidos = _0x3b590f.getAssistidos()
      },
    ])
    .controller('favoritosCtrl', [
      '$scope',
      '$http',
      'LoadingFavorites',
      '$timeout',
      'favoritosApi',
      function (_0xa5362e, _0x49df0a, _0x13eab5, _0x29ef44, _0x228f86) {
        ;(_0x228f86.getFavoritos().length == undefined ||
          _0x228f86.getFavoritos().length == 0 ||
          _0x228f86.getFavoritos().length == null) &&
          (_0x13eab5.show(),
          _0x29ef44(function () {
            window.plugins.OneSignal &&
              window.plugins.OneSignal.getPermissionSubscriptionState(function (
                _0x42f13c
              ) {
                _0x49df0a
                  .get(
                    'https://atv2.net/meuanimetv-74.php?favoritos=' +
                      _0x42f13c.subscriptionStatus.userId
                  )
                  .then(
                    function (_0x4ba3f4) {
                      if (
                        _0x4ba3f4.data != null &&
                        _0x42f13c.subscriptionStatus.userId != null
                      ) {
                        localStorage.setItem(
                          'favoritos',
                          JSON.stringify(_0x4ba3f4.data)
                        )
                      }
                      _0xa5362e.favoritos = _0x4ba3f4.data
                      _0x13eab5.hide()
                    },
                    function (_0x507bdf) {
                      _0x13eab5.hide()
                      alert(
                        'Erro ao carregar! Por favor feche e abra novamente o app.'
                      )
                    }
                  )
              })
          }, 3000))
        _0xa5362e.favoritos = _0x228f86.getFavoritos()
      },
    ])
    .controller('pesquisarCtrl', [
      '$scope',
      '$http',
      function (_0xc47dae, _0xccff5f) {
        _0xc47dae.buscar = function (_0x3ce307) {
          _0xccff5f
            .get('https://atv2.net/meuanimetv-74.php?search=' + _0x3ce307)
            .then(
              function (_0x33a43b) {
                _0xc47dae.resultados = _0x33a43b.data
                if (_0xc47dae.resultados == null) {
                  _0xc47dae.mensagem =
                    "<p>Anime nao encontrado, verifique se voce digitou corretamente, ou entre em contato com nosso <a ui-sref='suporte'>suporte</a> para que possamos adiciona-lo!</p>"
                } else {
                  _0xc47dae.mensagem = ''
                }
              },
              function (_0x139509) {
                alert('Erro ao carregar! Verifique sua conexao com a internet.')
              }
            )
        }
        _0xc47dae['$on']('$ionicView.afterEnter', function () {
          window.ga.trackView('Pesquisar')
        })
      },
    ])
    .controller('episodiosCtrl', [
      '$scope',
      '$http',
      '$stateParams',
      'assistidosApi',
      'LoadingService',
      function (_0x44008d, _0xa0147b, _0x38c984, _0x4c5c43, _0x32cee0) {
        var _0x59d08f = ''
        _0x44008d.toggle = true
        function _0x12a9a8(_0x1f7ab6) {
          var _0x5bf3ff = ''
          for (_0x1214e5 = 0; _0x1214e5 < _0x1f7ab6.length; _0x1214e5++) {
            var _0x5da531 = _0x1f7ab6.charCodeAt(_0x1214e5),
              _0x568ada = _0x5da531 ^ 33
            _0x5bf3ff = _0x5bf3ff + String.fromCharCode(_0x568ada)
          }
          return _0x5bf3ff
        }
        function _0x38caaf(_0x589d69) {
          return _0x589d69 === ''
            ? ''
            : _0x38caaf(_0x589d69.substr(1)) + _0x589d69.charAt(0)
        }
        if (window.sessionStorage.getItem('ad') === 'admob') {
          window.admob.interstitial
            .load({
              id: { android: window.sessionStorage.getItem('interstitial') },
            })
            .then(() => window.admob.interstitial.show())
        } else {
          if (window.sessionStorage.getItem('ad') === 'lovin') {
            function _0x422a9d() {
              cordova.exec(_0x565ac1, _0x131107, 'ZenPlugin', 'showDeal', [])
            }
            _0x422a9d()
          } else {
            if (window.sessionStorage.getItem('ad') === 'vungle') {
              function _0x3d740e() {
                cordova.exec(
                  _0x565ac1,
                  _0x131107,
                  'ZenPlugin',
                  'showDealVungle',
                  []
                )
              }
              _0x3d740e()
            } else {
              if (window.sessionStorage.getItem('ad') === 'odeal') {
                function _0x4b0ba3() {
                  cordova.exec(
                    _0x565ac1,
                    _0x131107,
                    'ZenDealPlugin',
                    'showDeal',
                    []
                  )
                }
                _0x4b0ba3()
              } else {
                if (window.sessionStorage.getItem('ad') === 'unity') {
                  function _0x6a198b() {
                    cordova.exec(
                      _0x565ac1,
                      _0x131107,
                      'ZenPlugin',
                      'showDealUnity',
                      []
                    )
                  }
                  _0x6a198b()
                }
              }
            }
          }
        }
        function _0x565ac1(_0x3f1629) {}
        function _0x131107(_0x1bd43a) {}
        var _0x200099
        for (
          var _0x1214e5 = 0;
          _0x1214e5 < _0x4c5c43.getAssistidos().length;
          _0x1214e5++
        ) {
          if (
            angular.equals(
              _0x4c5c43.getAssistidos()[_0x1214e5].video_id,
              _0x38c984.id
            )
          ) {
            _0x44008d.toggle = false
            break
          } else {
            _0x44008d.toggle = true
          }
        }
        var _0x7675c6 = Math.floor(Math.random() * 33441 + 18384)
        var _0x2ba4ca = Math.floor((new Date() / 43687) * _0x7675c6 * 127)
        _0x32cee0.show()
        _0xa0147b
          .post(
            'https://auth.atv2.net/v7.php',
            window.sessionStorage.getItem('user')
          )
          .then(
            function (_0x5b60d5) {
              _0x59d08f = _0x5b60d5.data
              var _0x43ffed = {}
              _0x43ffed['X-AUTH'] = _0x59d08f
              var _0xf8c48e = { headers: _0x43ffed }
              _0xa0147b
                .get(
                  'https://atv2.net/meuanimetv-74.php?episodios=' +
                    _0x38c984.id +
                    '&token=' +
                    _0x2ba4ca +
                    '&r=' +
                    _0x7675c6,
                  _0xf8c48e
                )
                .then(
                  function (_0x4643d3) {
                    _0x44008d.episodio = _0x4643d3.data
                    _0x44008d.mR4jW7xF3dA0dI7m = ''
                    _0x44008d.kU6kJ7wC1eG5fZ2m = ''
                    _0x44008d.bF2hH1nD8sR2yQ0e = ''
                    var _0x52879e = {}
                    _0x52879e.words = [
                      1884436332, 1295477057, 929846578, 1867920227, 1144552015,
                      878792752, 1917597540, 1211458376,
                    ]
                    _0x52879e.sigBytes = 32
                    if (_0x44008d.episodio[0].mS9wR2qY7pK7vX5n) {
                      _0x44008d.mR4jW7xF3dA0dI7m = WebCrypto.enc.Utf8.stringify(
                        WebCrypto.JWT.decrypt(
                          _0x44008d.episodio[0].mS9wR2qY7pK7vX5n.slice(36, -64),
                          _0x52879e,
                          {
                            iv: WebCrypto.enc.Utf8.parse(
                              _0x38caaf(
                                _0x44008d.episodio[0].mS9wR2qY7pK7vX5n.substring(
                                  _0x44008d.episodio[0].mS9wR2qY7pK7vX5n.length -
                                    64
                                )
                              )
                            ),
                          }
                        )
                      )
                    }
                    var _0x23de08 = {}
                    _0x23de08.words = [
                      1884436332, 1295477057, 929846578, 1867920227, 1144552015,
                      878792752, 1917597540, 1211458376,
                    ]
                    _0x23de08.sigBytes = 32
                    if (_0x44008d.episodio[0].fV3gK5vU7uG6hU5e) {
                      _0x44008d.kU6kJ7wC1eG5fZ2m = WebCrypto.enc.Utf8.stringify(
                        WebCrypto.JWT.decrypt(
                          _0x44008d.episodio[0].fV3gK5vU7uG6hU5e.slice(36, -64),
                          _0x23de08,
                          {
                            iv: WebCrypto.enc.Utf8.parse(
                              _0x38caaf(
                                _0x44008d.episodio[0].fV3gK5vU7uG6hU5e.substring(
                                  _0x44008d.episodio[0].fV3gK5vU7uG6hU5e.length -
                                    64
                                )
                              )
                            ),
                          }
                        )
                      )
                    }
                    var _0x1074d0 = {}
                    _0x1074d0.words = [
                      1884436332, 1295477057, 929846578, 1867920227, 1144552015,
                      878792752, 1917597540, 1211458376,
                    ]
                    _0x1074d0.sigBytes = 32
                    if (_0x44008d.episodio[0].oU0dI2lL2tK2dR9f) {
                      _0x44008d.bF2hH1nD8sR2yQ0e = WebCrypto.enc.Utf8.stringify(
                        WebCrypto.JWT.decrypt(
                          _0x44008d.episodio[0].oU0dI2lL2tK2dR9f.slice(36, -64),
                          _0x1074d0,
                          {
                            iv: WebCrypto.enc.Utf8.parse(
                              _0x38caaf(
                                _0x44008d.episodio[0].oU0dI2lL2tK2dR9f.substring(
                                  _0x44008d.episodio[0].oU0dI2lL2tK2dR9f.length -
                                    64
                                )
                              )
                            ),
                          }
                        )
                      )
                    }
                    _0x44008d.opensys = function (_0x2d0a80) {
                      try {
                        window.open(_0x2d0a80, '_system')
                      } catch (_0x3787b8) {
                        alert(_0x3787b8)
                      }
                    }
                    _0x44008d.pexterno = function (_0x5af1ef) {
                      try {
                        window.plugins.intentShim.startActivity(
                          {
                            action: window.plugins.intentShim.ACTION_VIEW,
                            url: _0x5af1ef,
                            type: 'video/*',
                          },
                          function () {},
                          function () {
                            alert('Falha na abertura')
                          }
                        )
                      } catch (_0x4e019e) {
                        alert(_0x4e019e)
                      }
                    }
                    _0x44008d.abrir = function (_0x5528b3) {
                      window.screen.orientation.lock('landscape')
                      var _0xc64c31 = function (_0x3c4a03) {
                        if (_0x3c4a03.eventType == 'TOUCH_EVENT') {
                          ExoPlayer.showController()
                        } else {
                          if (_0x3c4a03.eventType == 'STOP_EVENT') {
                            window.screen.orientation.unlock()
                          } else {
                            if (_0x3c4a03.eventKeycode == 'KEYCODE_HOME') {
                              ExoPlayer.pause()
                            }
                          }
                        }
                      }
                      var _0x5af151 = function (_0x5cde7b) {}
                      var _0x290d46 = {}
                      _0x290d46.url = _0x5528b3
                      _0x290d46.userAgent = 'ExoCastDemoPlayer'
                      _0x290d46.aspectRatio = 'FULL_SCREEN'
                      _0x290d46.hideTimeout = 1000
                      _0x290d46.connectTimeout = 30000
                      _0x290d46.readTimeout = 30000
                      _0x290d46.retryCount = 5
                      _0x290d46.autoplay = true
                      _0x290d46.forwardTime = 5000
                      _0x290d46.rewindTime = 5000
                      _0x290d46.showBuffering = false
                      _0x290d46.controller = {}
                      _0x290d46.controller.hideProgress = false
                      _0x290d46.controller.hidePosition = false
                      _0x290d46.controller.hideDuration = false
                      _0x290d46.controller.controlIcons = {}
                      _0x290d46.controller.textColor = '#ffffffff'
                      _0x290d46.controller.buttonsColor = '#ffffffff'
                      _0x290d46.controller.bufferingColor = '#00dddddd'
                      var _0x1fafb9 = _0x290d46
                      window.ExoPlayer.show(_0x1fafb9, _0xc64c31, _0x5af151)
                    }
                    _0x32cee0.hide()
                    if (window.ga) {
                      window.ga.trackEvent('Play', _0x44008d.episodio[0].title)
                    }
                  },
                  function (_0x154b6c) {
                    _0x32cee0.hide()
                    alert(
                      'Erro ao carregar! Verifique sua conexao com a internet.'
                    )
                  }
                )
            },
            function (_0x256cb7) {
              _0x32cee0.hide()
              alert('Erro ao carregar! Verifique sua conexao com a internet.')
            }
          )
        _0x44008d.next = function (_0x3e9ec1, _0x5b26d4) {
          if (
            Math.floor(
              Math.random() * window.sessionStorage.getItem('admax') + 1
            ) >= window.sessionStorage.getItem('admax')
          ) {
            if (window.sessionStorage.getItem('ad') === 'null') {
              window.admob.interstitial
                .load({
                  id: { android: window.sessionStorage.getItem('interstitial') },
                })
                .then(() => window.admob.interstitial.show())
            } else {
              showDeal()
            }
          }
          var _0x405473 = Math.floor(Math.random() * 33441 + 18384)
          var _0x4f249f = Math.floor((new Date() / 43687) * _0x405473 * 127)
          _0xa0147b
            .get(
              'https://atv2.net/meuanimetv-74.php?episodios=' +
                _0x3e9ec1 +
                '&catid=' +
                _0x5b26d4 +
                '&next' +
                '&token=' +
                _0x4f249f +
                '&r=' +
                _0x405473
            )
            .then(
              function (_0x4a4ab8) {
                _0x44008d.episodio = _0x4a4ab8.data
                _0x44008d.mR4jW7xF3dA0dI7m = ''
                _0x44008d.kU6kJ7wC1eG5fZ2m = ''
                _0x44008d.bF2hH1nD8sR2yQ0e = ''
                var _0x5e1db1 = {
                  words: [
                    1884436332, 1295477057, 929846578, 1867920227, 1144552015,
                    878792752, 1917597540, 1211458376,
                  ],
                  sigBytes: 32,
                }
                if (_0x44008d.episodio[0].mS9wR2qY7pK7vX5n) {
                  _0x44008d.mR4jW7xF3dA0dI7m = WebCrypto.enc.Utf8.stringify(
                    WebCrypto.JWT.decrypt(
                      _0x44008d.episodio[0].mS9wR2qY7pK7vX5n.slice(36, -64),
                      _0x5e1db1,
                      {
                        iv: WebCrypto.enc.Utf8.parse(
                          _0x38caaf(
                            _0x44008d.episodio[0].mS9wR2qY7pK7vX5n.substring(
                              _0x44008d.episodio[0].mS9wR2qY7pK7vX5n.length - 64
                            )
                          )
                        ),
                      }
                    )
                  )
                }
                var _0x1ce381 = {
                  words: [
                    1884436332, 1295477057, 929846578, 1867920227, 1144552015,
                    878792752, 1917597540, 1211458376,
                  ],
                  sigBytes: 32,
                }
                if (_0x44008d.episodio[0].fV3gK5vU7uG6hU5e) {
                  _0x44008d.kU6kJ7wC1eG5fZ2m = WebCrypto.enc.Utf8.stringify(
                    WebCrypto.JWT.decrypt(
                      _0x44008d.episodio[0].fV3gK5vU7uG6hU5e.slice(36, -64),
                      _0x1ce381,
                      {
                        iv: WebCrypto.enc.Utf8.parse(
                          _0x38caaf(
                            _0x44008d.episodio[0].fV3gK5vU7uG6hU5e.substring(
                              _0x44008d.episodio[0].fV3gK5vU7uG6hU5e.length - 64
                            )
                          )
                        ),
                      }
                    )
                  )
                }
                var _0x4c12be = {
                  words: [
                    1884436332, 1295477057, 929846578, 1867920227, 1144552015,
                    878792752, 1917597540, 1211458376,
                  ],
                  sigBytes: 32,
                }
                if (_0x44008d.episodio[0].oU0dI2lL2tK2dR9f) {
                  _0x44008d.bF2hH1nD8sR2yQ0e = WebCrypto.enc.Utf8.stringify(
                    WebCrypto.JWT.decrypt(
                      _0x44008d.episodio[0].oU0dI2lL2tK2dR9f.slice(36, -64),
                      _0x4c12be,
                      {
                        iv: WebCrypto.enc.Utf8.parse(
                          _0x38caaf(
                            _0x44008d.episodio[0].oU0dI2lL2tK2dR9f.substring(
                              _0x44008d.episodio[0].oU0dI2lL2tK2dR9f.length - 64
                            )
                          )
                        ),
                      }
                    )
                  )
                }
                if (!_0x44008d.episodio) {
                  _0xa0147b
                    .get(
                      'https://atv2.net/meuanimetv-74.php?episodios=' +
                        _0x3e9ec1 +
                        '&token=' +
                        _0x4f249f +
                        '&r=' +
                        _0x405473
                    )
                    .then(
                      function (_0x1f1d82) {
                        _0x44008d.episodio = _0x1f1d82.data
                      },
                      function (_0x59877f) {
                        alert(
                          'Erro ao carregar! Verifique sua conexao com a internet.'
                        )
                      }
                    )
                } else {
                  for (
                    var _0x5b3b34 = 0;
                    _0x5b3b34 < _0x4c5c43.getAssistidos().length;
                    _0x5b3b34++
                  ) {
                    if (
                      angular.equals(
                        _0x4c5c43.getAssistidos()[_0x5b3b34].video_id,
                        _0x44008d.episodio[0].video_id
                      )
                    ) {
                      _0x44008d.toggle = false
                    } else {
                      _0x44008d.toggle = true
                      break
                    }
                  }
                }
              },
              function (_0x5c8b46) {
                alert('Erro ao carregar! Verifique sua conexao com a internet.')
              }
            )
        }
        _0x44008d.previous = function (_0x1689b2, _0x2b5279) {
          if (
            Math.floor(
              Math.random() * window.sessionStorage.getItem('admax') + 1
            ) >= window.sessionStorage.getItem('admax')
          ) {
            if (window.sessionStorage.getItem('ad') === 'null') {
              window.admob.interstitial
                .load({
                  id: { android: window.sessionStorage.getItem('interstitial') },
                })
                .then(() => window.admob.interstitial.show())
            } else {
              showDeal()
            }
          }
          var _0x18f42a = Math.floor(Math.random() * 33441 + 18384),
            _0x30359b = Math.floor((new Date() / 43687) * _0x18f42a * 127)
          _0xa0147b
            .get(
              'https://atv2.net/meuanimetv-74.php?episodios=' +
                _0x1689b2 +
                '&catid=' +
                _0x2b5279 +
                '&previous' +
                '&token=' +
                _0x30359b +
                '&r=' +
                _0x18f42a
            )
            .then(
              function (_0x51d098) {
                _0x44008d.episodio = _0x51d098.data
                _0x44008d.mR4jW7xF3dA0dI7m = ''
                _0x44008d.kU6kJ7wC1eG5fZ2m = ''
                _0x44008d.bF2hH1nD8sR2yQ0e = ''
                var _0x2d983d = {
                  words: [
                    1884436332, 1295477057, 929846578, 1867920227, 1144552015,
                    878792752, 1917597540, 1211458376,
                  ],
                  sigBytes: 32,
                }
                if (_0x44008d.episodio[0].mS9wR2qY7pK7vX5n) {
                  _0x44008d.mR4jW7xF3dA0dI7m = WebCrypto.enc.Utf8.stringify(
                    WebCrypto.JWT.decrypt(
                      _0x44008d.episodio[0].mS9wR2qY7pK7vX5n.slice(36, -64),
                      _0x2d983d,
                      {
                        iv: WebCrypto.enc.Utf8.parse(
                          _0x38caaf(
                            _0x44008d.episodio[0].mS9wR2qY7pK7vX5n.substring(
                              _0x44008d.episodio[0].mS9wR2qY7pK7vX5n.length - 64
                            )
                          )
                        ),
                      }
                    )
                  )
                }
                var _0x476e60 = {
                  words: [
                    1884436332, 1295477057, 929846578, 1867920227, 1144552015,
                    878792752, 1917597540, 1211458376,
                  ],
                  sigBytes: 32,
                }
                if (_0x44008d.episodio[0].fV3gK5vU7uG6hU5e) {
                  _0x44008d.kU6kJ7wC1eG5fZ2m = WebCrypto.enc.Utf8.stringify(
                    WebCrypto.JWT.decrypt(
                      _0x44008d.episodio[0].fV3gK5vU7uG6hU5e.slice(36, -64),
                      _0x476e60,
                      {
                        iv: WebCrypto.enc.Utf8.parse(
                          _0x38caaf(
                            _0x44008d.episodio[0].fV3gK5vU7uG6hU5e.substring(
                              _0x44008d.episodio[0].fV3gK5vU7uG6hU5e.length - 64
                            )
                          )
                        ),
                      }
                    )
                  )
                }
                var _0x2ac752 = {
                  words: [
                    1884436332, 1295477057, 929846578, 1867920227, 1144552015,
                    878792752, 1917597540, 1211458376,
                  ],
                  sigBytes: 32,
                }
                if (_0x44008d.episodio[0].oU0dI2lL2tK2dR9f) {
                  _0x44008d.bF2hH1nD8sR2yQ0e = WebCrypto.enc.Utf8.stringify(
                    WebCrypto.JWT.decrypt(
                      _0x44008d.episodio[0].oU0dI2lL2tK2dR9f.slice(36, -64),
                      _0x2ac752,
                      {
                        iv: WebCrypto.enc.Utf8.parse(
                          _0x38caaf(
                            _0x44008d.episodio[0].oU0dI2lL2tK2dR9f.substring(
                              _0x44008d.episodio[0].oU0dI2lL2tK2dR9f.length - 64
                            )
                          )
                        ),
                      }
                    )
                  )
                }
                if (!_0x44008d.episodio) {
                  _0xa0147b
                    .get(
                      'https://atv2.net/meuanimetv-74.php?episodios=' +
                        _0x1689b2 +
                        '&token=' +
                        _0x30359b +
                        '&r=' +
                        _0x18f42a
                    )
                    .then(
                      function (_0x1b579c) {
                        _0x44008d.episodio = _0x1b579c.data
                      },
                      function (_0x4f4566) {
                        alert(
                          'Erro ao carregar! Verifique sua conexao com a internet.'
                        )
                      }
                    )
                } else {
                  for (
                    var _0x461c32 = 0;
                    _0x461c32 < _0x4c5c43.getAssistidos().length;
                    _0x461c32++
                  ) {
                    if (
                      angular.equals(
                        _0x4c5c43.getAssistidos()[_0x461c32].video_id,
                        _0x44008d.episodio[0].video_id
                      )
                    ) {
                      _0x44008d.toggle = false
                    } else {
                      _0x44008d.toggle = true
                      break
                    }
                  }
                }
              },
              function (_0x3fcf88) {
                alert('Erro ao carregar! Verifique sua conexao com a internet.')
              }
            )
        }
        _0x44008d.assistir = function (_0x2c60a8, _0x54a1ad) {
          for (
            var _0x14c8e5 = 0;
            _0x14c8e5 < _0x4c5c43.getAssistidos().length;
            _0x14c8e5++
          ) {
            if (
              angular.equals(
                _0x4c5c43.getAssistidos()[_0x14c8e5].video_id,
                _0x44008d.episodio[0].video_id
              )
            ) {
              _0x200099 = 0
              break
            } else {
              _0x200099 = 1
            }
          }
          _0x200099 === 0
            ? (_0x4c5c43.deleteAssistido(_0x2c60a8),
              (_0x44008d.toggle = true),
              window.plugins.OneSignal &&
                window.plugins.OneSignal.getPermissionSubscriptionState(function (
                  _0x395f33
                ) {
                  _0xa0147b.get(
                    'https://atv2.net/meuanimetv-74.php?nwatch=' +
                      _0x54a1ad +
                      '&player=' +
                      _0x395f33.subscriptionStatus.userId
                  )
                }))
            : (_0x4c5c43.addAssistido(_0x2c60a8),
              (_0x44008d.toggle = false),
              window.plugins.OneSignal &&
                window.plugins.OneSignal.getPermissionSubscriptionState(function (
                  _0x13de2b
                ) {
                  _0xa0147b.get(
                    'https://atv2.net/meuanimetv-74.php?watch=' +
                      _0x54a1ad +
                      '&player=' +
                      _0x13de2b.subscriptionStatus.userId
                  )
                }))
        }
        _0x44008d.reportar = function (_0x4c2529) {
          _0xa0147b.get('https://atv2.net/meuanimetv-74.php?report=' + _0x4c2529)
          alert(
            'Episodio com problemas informado, nossa equipe estara analisando.'
          )
        }
      },
    ])
  function _0x320066(_0x96e01a) {
    function _0x1110ab(_0xee5037) {
      if (typeof _0xee5037 === 'string') {
        return function (_0x484085) {}
          .constructor('while (true) {}')
          .apply('counter')
      } else {
        ;('' + _0xee5037 / _0xee5037).length !== 1 || _0xee5037 % 20 === 0
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
      _0x1110ab(++_0xee5037)
    }
    try {
      if (_0x96e01a) {
        return _0x1110ab
      } else {
        false
      }
    } catch (_0x23a44b) {}
  }
  