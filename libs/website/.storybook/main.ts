import rootMain from '../../../.storybook/main'

export default {
  ...rootMain,
  core: {...rootMain.core, builder: 'webpack5'},
  stories: [
    ...rootMain.stories,
    '../../**/website/src/lib/**/*.stories.mdx',
    '../../**/website/src/lib/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-essentials', ...rootMain.addons, '@nx/react/plugins/storybook'],
  webpackFinal: async (config: any, {configType}: any) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, {configType})
    }

    // add your own webpack tweaks if needed

    return config
  }
}
