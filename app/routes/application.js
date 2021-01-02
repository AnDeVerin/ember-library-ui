import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service session;
  @service currentUser;

  beforeModel() {
    this.loadUser();
  }

  async loadUser() {
    try {
      this.session.isAuthenticated && (await this.currentUser.load());
    } catch (e) {
      console.error(e);
      this.invalidate();
    }
  }
}
