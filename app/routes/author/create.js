import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthorCreateRoute extends Route {
  @service session;

  beforeModel(transition) {
    return this.session.requireAuthentication(transition, 'login');
  }

  model() {
    return {
      first: '',
      last: '',
    };
  }
}
