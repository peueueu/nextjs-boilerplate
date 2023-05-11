import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  framework: '@storybook/nextjs',
  // ... other configuration options
  docs: {
    autodocs: true
  },
  staticDirs: ['../public']
}

export default config
