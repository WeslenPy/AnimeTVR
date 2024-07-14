cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-exoplayer.ExoPlayer",
      "file": "plugins/cordova-plugin-exoplayer/www/exoplayer.js",
      "pluginId": "cordova-plugin-exoplayer",
      "clobbers": [
        "ExoPlayer"
      ]
    },
    {
      "id": "cordova-plugin-google-analytics.UniversalAnalytics",
      "file": "plugins/cordova-plugin-google-analytics/www/analytics.js",
      "pluginId": "cordova-plugin-google-analytics",
      "clobbers": [
        "analytics",
        "ga"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-screen-orientation.screenorientation",
      "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
      "pluginId": "cordova-plugin-screen-orientation",
      "clobbers": [
        "cordova.plugins.screenorientation"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "onesignal-cordova-plugin.OneSignal",
      "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
      "pluginId": "onesignal-cordova-plugin",
      "clobbers": [
        "OneSignal"
      ]
    },
    {
      "id": "com-darryncampbell-cordova-plugin-intent.IntentShim",
      "file": "plugins/com-darryncampbell-cordova-plugin-intent/www/IntentShim.js",
      "pluginId": "com-darryncampbell-cordova-plugin-intent",
      "clobbers": [
        "intentShim"
      ]
    },
    {
      "id": "cordova-admob-plus.AdMob",
      "file": "plugins/cordova-admob-plus/www/admob.js",
      "pluginId": "cordova-admob-plus",
      "clobbers": [
        "admob"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-exoplayer": "2.5.4",
    "cordova-plugin-google-analytics": "1.8.6",
    "cordova-plugin-ionic-keyboard": "2.1.2",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-screen-orientation": "3.0.1",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-whitelist": "1.3.3",
    "onesignal-cordova-plugin": "2.11.2",
    "com-darryncampbell-cordova-plugin-intent": "2.0.0",
    "cordova-admob-plus": "0.0.0",
    "cordova-zen-plugin": "1.0.0",
    "cordova-zendeal-plugin": "1.1.0",
    "cordova-plugin-enable-multidex": "0.2.0"
  };
});