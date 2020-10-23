const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const path = require("path");

module.exports = override(
  fixBabelImports('import', { //配置按需加载
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackExternals({ //不做打包处理配置，如直接以cdn引入的
    echarts: "window.echarts",
    // highcharts:"window.highcharts"
  }),
  addWebpackAlias({ //路径别名
    '@': path.resolve(__dirname, 'src'),
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1DA57A'
    }
  }),
　　(config) => {
        //修改、添加loader 配置 :
        // 所有的loaders规则是在config.module.rules(数组)的第二项
        // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
        // 修改 less 配置 ，规则 loader 在第7项(具体可以打印配置)
        const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
        console.log(loaders)
        loaders[7].use.push({
            loader: 'style-resources-loader',
            options: {
                patterns: path.resolve(__dirname, 'src/styles/main.less')//全局引入公共的scss 文件
            }
        })
        return config
    }
);
