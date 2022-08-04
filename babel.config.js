module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-transform-arrow-functions',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src',
        },
      },
    ],
  ],
};
