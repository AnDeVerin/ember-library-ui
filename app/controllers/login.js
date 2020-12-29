import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service session;

  @tracked errors = [];

  @action
  async login({ email, password }) {
    try {
      await this.session.authenticate('authenticator:jwt', { email, password });
      this.transitionToRoute('index');
    } catch (e) {
      this.errors = e.json.errors;
      console.log(this.errors);
    }
  }
}
