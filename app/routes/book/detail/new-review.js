import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BookDetailNewReviewRoute extends Route {
  @service session;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  model() {
    const book = this.modelFor('book.detail');

    return {
      book,
      review: {
        user: '',
        body: '',
        book,
      },
    };
  }
}
