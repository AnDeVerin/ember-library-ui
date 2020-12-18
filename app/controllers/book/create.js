import Controller from '@ember/controller';
import { action, set } from '@ember/object';

export default class BookCreateController extends Controller {
  @action
  selectAuthor(author) {
    set(this, 'model.author', author);
  }

  @action
  searchAuthor(query) {
    return this.store.query('author', { filter: { query } });
  }

  @action
  async saveBook() {
    const book = this.store.createRecord('book', this.model);
    await book.save();
    this.transitionToRoute('book');
  }
}
