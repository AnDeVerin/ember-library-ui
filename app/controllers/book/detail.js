import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BookDetailController extends Controller {
  @action
  async deleteBook() {
    await this.model.destroyRecord();
    this.transitionToRoute('book');
  }
}
