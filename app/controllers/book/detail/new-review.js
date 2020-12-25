import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BookDetailNewReviewController extends Controller {
  @action
  async saveReview(attrs) {
    const review = this.store.createRecord('review', attrs);
    await review.save();

    this.transitionToRoute('book.detail', this.model.book);
  }
}
