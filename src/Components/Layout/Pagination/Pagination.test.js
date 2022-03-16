/* eslint-disable import/extensions */
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Pagintation from './index.js'

beforeEach(() => {
  render(<Pagintation paginIni={[0, 1, 2]} />)
})
describe('Unit test to Pagintation', () => {
  test('It should show the pagination number', () => {
    const component = render()
    const number = component.getByText(1)
    expect(number).toBeInTheDocument()
  })
})
