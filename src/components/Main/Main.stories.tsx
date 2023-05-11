import { Meta, StoryObj } from '@storybook/react'
import Main from './Main'

const meta: Meta<typeof Main> = {
  component: Main
}

export default meta

type Story = StoryObj<typeof Main>

export const Template: Story = {
  args: { title: 'Title template', description: 'Description template' }
}

export const Default: Story = {
  args: { title: 'Title template', description: 'Description template' }
}
