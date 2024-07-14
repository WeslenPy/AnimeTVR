angular.module('app.services', []).factory('LoadingService', ['$ionicLoading', function($ionicLoading) {
        return {
            show: function() {
                $ionicLoading.show({
                    template: 'Carregando...'
                })
            },
            hide: function() {
                $ionicLoading.hide()
            }
        }
    }]).factory('LoadingFavorites', ['$ionicLoading', function($ionicLoading) {
        return {
            show: function() {
                $ionicLoading.show({
                    template: 'Aguarde enquanto tentamos<br /> recuperar seus favoritos...'
                })
            },
            hide: function() {
                $ionicLoading.hide()
            }
        }
    }]).factory('LoadingAssistidos', ['$ionicLoading', function($ionicLoading) {
        return {
            show: function() {
                $ionicLoading.show({
                    template: 'Aguarde enquanto tentamos<br /> recuperar seus eps assistidos...'
                })
            },
            hide: function() {
                $ionicLoading.hide()
            }
        }
    }]).filter('trusted', ['$sce', function($sce) {
        return function(url) {
            return $sce.trustAsResourceUrl(url)
        }
    }]).filter('dateToISO', function() {
        return function(input) {
            input = new Date(input).toISOString();
            return input
        }
    })    
	.service('favoritosApi', [function() {
        this.getFavoritos = function() {
            var favoritos = [];
            if (typeof localStorage.favoritos != 'undefined') {
                favoritos = JSON.parse(localStorage.favoritos  || '{}')
            }
            return JSON.parse(localStorage.favoritos  || '{}')
        }
        this.addFavorito = function(favorito) {
            var favoritos = [];
            if (typeof localStorage.favoritos != 'undefined') {
                favoritos = JSON.parse(localStorage.favoritos)
            }
            favoritos.push(favorito);
            localStorage.setItem('favoritos', JSON.stringify(favoritos))
        }
        this.deleteFavorito = function(favorito) {
            var favoritos = [];
            if (typeof localStorage.favoritos != 'undefined') {
                favoritos = JSON.parse(localStorage.favoritos)
            }
            favoritos = favoritos.filter(function(favoritos) {
                return favoritos.id !== favorito.id
            });
            localStorage.setItem('favoritos', JSON.stringify(favoritos))
        }
    }]).service('assistidosApi', [function() {
        this.getAssistidos = function() {
            var assistidos = [];
            if (typeof localStorage.assistidos != 'undefined') {
                assistidos = JSON.parse(localStorage.assistidos  || '{}')
            }
            return JSON.parse(localStorage.assistidos  || '{}')
        }
        this.addAssistido = function(assistido) {
            var assistidos = [];
            if (typeof localStorage.assistidos != 'undefined') {
                assistidos = JSON.parse(localStorage.assistidos)
            }
            assistidos.push(assistido);
            localStorage.setItem('assistidos', JSON.stringify(assistidos))
        }
        this.deleteAssistido = function(assistido) {
            var assistidos = [];
            if (typeof localStorage.assistidos != 'undefined') {
                assistidos = JSON.parse(localStorage.assistidos)
            }
            assistidos = assistidos.filter(function(assistidos) {
                return assistidos.video_id !== assistido.video_id
            });
            localStorage.setItem('assistidos', JSON.stringify(assistidos))
        }
    }])