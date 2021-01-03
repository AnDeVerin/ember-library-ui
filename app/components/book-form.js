import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BookFormComponent extends Component {
  @service store;

  title = this.args.book.title || '';
  isbn = this.args.book.isbn || '';
  publishDate = this.args.book.publishDate || null;
  author = this.args.book.author || null;

  @action
  selectAuthor(author) {
    set(this, 'author', author);
  }

  @action
  searchAuthor(query) {
    return this.store.query('author', { filter: { query } });
  }

  @action
  submitChanges() {
    this.args.onSubmit({
      title: this.title,
      isbn: this.isbn,
      publishDate: this.publishDate,
      author: this.author,
    });
  }
}
