const { override, addLessLoader, fixBabelImports } = require("customize-cra");

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
  }),
  fixBabelImports('antd'),
);