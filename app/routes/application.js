import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service session;
  @service currentUser;

  constructor(...args) {
    super(...args);

    this.session.on('authenticationSucceeded', () => {
      this.loadUser();
    });

    this.session.on('invalidationSucceeded', () => {
      // to reload browser tab and destroy data in the memory
      window.location.replace('/login');
    });
  }

  beforeModel() {
    this.loadUser();
  }

  loadUser() {
    this.session.isAuthenticated && this.currentUser.load();
  }
}
