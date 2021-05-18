const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // 定制统一主题 https://ant.design/docs/react/customize-theme-cn
            modifyVars: {
              "@primary-color": "#1DA57A", // 全局主色
              "@link-color": "#1890ff", // 链接色
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
};
