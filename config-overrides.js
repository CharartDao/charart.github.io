const path = require('path');
const { override, addWebpackAlias, addBabelPlugins, addWebpackPlugin } = require('customize-cra');
module.exports = override(
  ...addBabelPlugins('@babel/plugin-proposal-export-namespace-from'),
  addWebpackAlias({
    '@components': path.resolve(__dirname, './src/components'),
    '@routes': path.resolve(__dirname, './src/routes'),
    '@types': path.resolve(__dirname, './src/types'),
    '@config': path.resolve(__dirname, './src/config'),
    '@store': path.resolve(__dirname, './src/store'),
    '@decorators': path.resolve(__dirname, './src/decorators'),
    '@pages': path.resolve(__dirname, './src/pages'),
  }),
  addWebpackPlugin((defaultConfig, env) => {
    const config = { ...defaultConfig };
    config.options.output.filename = 'static/js/[name].[hash].js';
    config.options.output.chunkFilename = 'static/js/[name].[hash].chunk.js';
    return config;
  })
);
