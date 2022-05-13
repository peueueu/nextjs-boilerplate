import { screen, render } from '@testing-library/react'

import Main from '.'

const props = {
  title: 'Boilerplate',
  description: 'TypeScript, ReactJS, NextJS e Styled Components'
}

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main {...props} />)

    expect(
      screen.getByRole('heading', { name: /boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main {...props} />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
