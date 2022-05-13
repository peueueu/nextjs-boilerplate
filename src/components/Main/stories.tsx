import { ComponentStory, ComponentMeta } from '@storybook/react/types-7-0'
import Main from '.'
import MainProps from './utils'

export default {
  title: 'Main',
  component: Main
} as ComponentMeta<typeof Main>

export const Template: ComponentStory<typeof Main> = (args: MainProps) => (
  <Main {...args} />
)

Template.args = {
  title: 'Title template',
  description: 'Description template'
}

export const Default: ComponentStory<typeof Main> = (args: MainProps) => (
  <Main {...args} />
)

Default.args = {
  title: 'Boilerplate',
  description: 'TypeScript, ReactJS, NextJS e Styled Components'
}
