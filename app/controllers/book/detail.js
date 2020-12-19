import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BookDetailController extends Controller {
  get displayDate() {
    return this.model.publishDate?.slice(0, 10) || '';
  }

  @action
  async deleteBook() {
    await this.model.destroyRecord();
    this.transitionToRoute('book');
  }
}
