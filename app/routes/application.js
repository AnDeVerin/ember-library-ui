import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service session;

  constructor() {
    super(...arguments);

    this.session.on('invalidationSucceeded', () => {
      // to reload browseer tab and destroy data in the memory
      window.location.replace('/login');
    });
  }
}
