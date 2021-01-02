import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BookDetailController extends Controller {
  @service can;

  @action
  async deleteBook() {
    if (this.can.can('delete book', this.model)) {
      await this.model.destroyRecord();
      return this.transitionToRoute('book');
    }
  }
}
