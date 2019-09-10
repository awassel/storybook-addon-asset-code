const path = require('path');

module.exports = ({ config, mode }) => {

  config.module.rules.push(
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, '..', '.babelrc'),
          },
        },
      ],
    },
  );

  return config;
};
