cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-sqlite-ext.SQLitePlugin",
    "file": "plugins/cordova-sqlite-ext/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-ext",
    "clobbers": [
      "SQLitePlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-sqlite-ext": "2.1.0",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});