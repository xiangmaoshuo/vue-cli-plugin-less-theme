const path = require('path');

const { pluginName } = require('./constant');

module.exports = (api) => {
  api.extendPackage({
    vue: {
      pluginOptions: {
        [pluginName]: {
          themeVariables: ['@primary-color'],
          themeSelfVariables: [],
          varFile: './src/assets/css/var.less',
        },
      },
    },
  });
  api.exitLog(`
    default themeVariables is ['@primary-color'], and varFile is ./src/assets/css/var.less;
    \n more config see: https://github.com/xiangmaoshuo/webpack-custom-less-theme`,
    'done'
  );
}
