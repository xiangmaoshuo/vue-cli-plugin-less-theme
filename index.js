const path = require('path');

const { pluginName, webpackPluginName } = require('./constant');
const LessThemeWebpackPlugin = require(webpackPluginName);

module.exports = (api, projectOptions) => {
  const pluginOptions = projectOptions.pluginOptions[pluginName]
  api.chainWebpack(webpackConfig => {
    [
      'normal',
      'normal-modules',
      'vue',
      'vue-modules',
    ].forEach((oneOf) => {
      const loaders = webpackConfig.module.rule('less').oneOf(oneOf);
      // 开启js
      loaders.use('less-loader').options({
        javascriptEnabled: true,
      });
      loaders.use('less-theme-loader').loader(path.resolve(api.service.context, `./node_modules/${webpackPluginName}/loader.js`));
    });
  });
  api.configureWebpack(webpackConfig => {
    return {
      plugins: [
        new LessThemeWebpackPlugin(pluginOptions),
      ],
    };
  });
}
