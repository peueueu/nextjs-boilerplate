import React from 'react'
import { screen, render } from '@testing-library/react'
import Main from './Main'

describe('<Main />', () => {
  it('should render the heading with the default values if no props are passed', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the heading with the correct values', () => {
    const props = { title: 'Teste', description: 'Just a simple text' }

    render(<Main {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
