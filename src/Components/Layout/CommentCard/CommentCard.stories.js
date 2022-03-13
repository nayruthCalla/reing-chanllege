/*eslint-disable */
import CommentCard from './index.js'

export default {
  title: 'Layout/CommentCard',
  component: CommentCard,
}

const Template = (args) => <CommentCard {...args} />

export const Basic = Template.bind({})
Basic.args = {
  date: '2022-03-13T18:32:56.000Z',
  author: 'bhawks',
  url: 'https://finance.yahoo.com/news/goldman-sachs-ceo-demanded-employees-210608499.html',
  title:
    'CEO demanded all employees return full-time to the office. Only half showed up',
}
