import ESASessionService from 'ember-simple-auth/services/session';
import { inject as service } from '@ember/service';

export default class SessionService extends ESASessionService {
  @service currentUser;

  async handleAuthentication() {
    super.handleAuthentication('index');

    try {
      await this.currentUser.load();
    } catch (e) {
      console.error(e);
      this.invalidate();
    }
  }
}
