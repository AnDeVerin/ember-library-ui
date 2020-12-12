import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorEditController extends Controller {
  @action
  async saveAuthor(first, last) {
    this.model.setProperties({ first, last });
    await this.model.save();
    this.transitionToRoute('author');
  }
}
