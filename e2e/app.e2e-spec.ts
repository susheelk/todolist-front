import { TodolistFrontPage } from './app.po';

describe('todolist-front App', () => {
  let page: TodolistFrontPage;

  beforeEach(() => {
    page = new TodolistFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
