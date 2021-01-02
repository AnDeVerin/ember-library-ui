import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthorEditRoute extends Route {
  @service session;
  @service can;

  beforeModel(transition) {
    return this.session.requireAuthentication(transition, 'login');
  }

  model({ id }) {
    return this.store.findRecord('author', id);
  }

  afterModel(model) {
    if (this.can.cannot('edit author', model)) {
      return this.transitionTo('author.detail', model);
    }
  }
}
