module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};

/// 1)npm i react-native-reanimated@next 2).... ,'react-native-reanimated/plugin' npm i react-native-reanimated@next - ебать важная хуетень для левого меню
