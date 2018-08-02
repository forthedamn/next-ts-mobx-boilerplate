import * as path from 'path';
import * as withCSS from '@zeit/next-css';
import { Configuration, RuleSetRule } from 'webpack';

interface IOption {
  defaultLoaders: {
    css: RuleSetRule
  };
}

export default withCSS({
  cssModules: true,
  webpack: (config: Configuration, option: IOption) => {
    config.resolve = {
      alias: {
        '@mod': path.resolve(__dirname, './models'),
        '@comp': path.resolve(__dirname, './components'),
        '@page': path.resolve(__dirname, './pages'),
        '@serv': path.resolve(__dirname, './services'),
        '@utl': path.resolve(__dirname, './utils'),
      }
    };
    option.defaultLoaders.css = {
      rules: [
        {
          test: /\.css/,
          use: [{
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true
            }
          }]
        }
      ]
    };

    return config;
  }
});
