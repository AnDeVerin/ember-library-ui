import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorDetailController extends Controller {
  @action
  async deleteAuthor(author) {
    await author.destroyRecord();
    this.transitionToRoute('author.index');
  }
}
