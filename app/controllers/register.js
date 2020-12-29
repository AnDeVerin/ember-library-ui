import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RegisterController extends Controller {
  @tracked errors = [];

  @action
  async saveUser(attrs) {
    const user = this.store.createRecord('user', attrs);

    try {
      await user.save();
      this.transitionToRoute('index');
    } catch {
      this.errors = user.errors;
    }
  }
}
