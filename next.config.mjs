// next.config.mjs
import withTM from 'next-transpile-modules';

export default withTM([
  'rc-util',
  '@ant-design/icons',
  'antd',
  'rc-pagination',
  'rc-picker',  // Add rc-picker to transpile list
])({
  webpack: (config) => {
    config.resolve.extensions.push('.mjs', '.js', '.jsx', '.ts', '.tsx');
    return config;
  },
});
