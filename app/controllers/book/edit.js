import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BookEditController extends Controller {
  @action
  async saveBook(attrs) {
    this.model.setProperties(attrs);
    await this.model.save();
    this.transitionToRoute('book.detail', this.model);
  }
}
