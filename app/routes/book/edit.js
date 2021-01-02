import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BookEditRoute extends Route {
  @service can;

  model({ id }) {
    return this.store.findRecord('book', id);
  }

  afterModel(model) {
    if (this.can.cannot('edit book', model)) {
      return this.transitionTo('book.detail', model);
    }
  }
}
