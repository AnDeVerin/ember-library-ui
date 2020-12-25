import Route from '@ember/routing/route';

export default class BookDetailNewReviewRoute extends Route {
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
