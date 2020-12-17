import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BookCreateController extends Controller {
  @tracked selectedAuthor = null;

  @action
  selectAuthor(author) {
    this.selectedAuthor = author;
    this.model.author = author;
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
