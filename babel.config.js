module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
  overrides: [
    {
      test: (fileName) => !fileName.includes('node_modules/react-native-maps'),
    },
  ],
};
