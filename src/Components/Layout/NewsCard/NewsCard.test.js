import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsCard from './index.js';

const hit = {
  created_at: '2022-03-13T18:32:56.000Z',
  author: 'bhawks',
  story_url:
    'https://finance.yahoo.com/news/goldman-sachs-ceo-demanded-employees-210608499.html',
  story_title:
    'CEO demanded all employees return full-time to the office. Only half showed up',
};

beforeEach(() => {
  render(<NewsCard hit={hit} />);
});
describe('Unit test to NewsCard', () => {
  test('It should show the time and author of the news', () => {
    const component = render();
    const text = component.getByText(/3 days ago by bhawks/i);
    expect(text).toBeInTheDocument();
  });

  test('It should show the title of the news', () => {
    const component = render();
    const text = component.getByText(
      /CEO demanded all employees return full-time to the office. Only half showed up/i
    );
    expect(text).toBeInTheDocument();
  });
});
