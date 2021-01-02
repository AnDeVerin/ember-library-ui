import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorDetailController extends Controller {
  @service can;

  @action
  async deleteAuthor(author) {
    if (this.can.can('delete author', this.model)) {
      await author.destroyRecord();
      return this.transitionToRoute('author.index');
    }
  }
}
