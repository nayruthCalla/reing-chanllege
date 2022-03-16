/* eslint-disable  */
import NewsCard from './index.js'

export default {
  title: 'Layout/NewsCard',
  component: NewsCard,
}

function Template(args) {
  return <NewsCard {...args} />
}

export const Basic = Template.bind({})
Basic.args = {
  hit: {
    created_at: '2022-03-13T18:32:56.000Z',
    author: 'bhawks',
    story_url:
      'https://finance.yahoo.com/news/goldman-sachs-ceo-demanded-employees-210608499.html',
    story_title:
      'CEO demanded all employees return full-time to the office. Only half showed up',
  },
}
