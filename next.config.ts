import * as path from 'path';
import * as withCSS from 'next-typed-css';
import { Configuration } from 'webpack';

export default withCSS({
  tsCssModules: true,
  cssLoaderOptions: {
    namedExport: true
  },
  webpack: (config: Configuration) => {
    config.resolve = {
      alias: {
        '@mod': path.resolve(__dirname, './models'),
        '@comp': path.resolve(__dirname, './components'),
        '@page': path.resolve(__dirname, './pages'),
        '@serv': path.resolve(__dirname, './services'),
        '@utl': path.resolve(__dirname, './utils'),
      }
    };
    return config;
  }
});
