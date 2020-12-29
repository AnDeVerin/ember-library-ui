import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
  @service session;
  @service currentUser;

  get username() {
    return this.currentUser.user.username;
  }

  @action
  logout() {
    this.session.invalidate();
  }
}
