/*eslint-disable */
import Pagination from './index.js'

export default {
  title: 'Layout/Pagination',
  component: Pagination,
}

const Template = (args) => <Pagination {...args} />

export const Basic = Template.bind({})
Basic.args = {
  paginIni: [0, 1, 2, 3],
  page: 0,
}
