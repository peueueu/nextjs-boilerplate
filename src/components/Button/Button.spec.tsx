import React from 'react'
import { screen, render } from '@testing-library/react'
import Button from './Button'

describe('<Button />', () => {
  it('should render the heading with the default values if no props are passed', () => {
    const { container } = render(<Button />)

    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
