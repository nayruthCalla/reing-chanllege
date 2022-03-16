import mock from '../utils/mock'

const dataNews = [
  {
    created_at: '2021-03-13T18:32:56.000Z',
    author: 'bhawksf',
    story_url:
      'https://finance.yahoo.com/news/fgoldman-sachs-ceo-demanded-employees-210608499.html',
    story_title:
      'CEOt demanded all employees return full-time to the office. Only half showed up',
    fave: true,
  },
]

mock.onGet('/search_by_date?query=Angular&page=0').reply(200, {
  data: dataNews,
})

export default dataNews
