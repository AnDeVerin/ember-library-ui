import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorDetailNewBookController extends Controller {
  @action
  async saveBook() {
    const book = this.store.createRecord('book', this.model.book);
    await book.save();
    this.transitionToRoute('author.detail', this.model.author);
  }
}
