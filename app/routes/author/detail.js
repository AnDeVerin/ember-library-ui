import Route from '@ember/routing/route';

export default class AuthorDetailRoute extends Route {
  model({ id }) {
    return this.store.findRecord('author', id);
  }

  afterModel(model) {
    // optimization for FastBoot:
    // to wait until the list of books is loaded before rendering the page
    return model.books;
  }
}
