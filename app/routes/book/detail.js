import Route from '@ember/routing/route';

export default class BookDetailRoute extends Route {
  model({ id }) {
    return this.store.findRecord('book', id);
  }

  afterModel(model) {
    // optimization for FastBoot:
    // to wait until the list of reviews and author is loaded before rendering the page
    return Promise.all([model.author, model.reviews]);
  }
}
