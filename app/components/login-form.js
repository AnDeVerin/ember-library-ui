import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
  email = this.args.user.email || '';
  password = this.args.user.password || '';

  @action
  loginUser() {
    this.args.onSubmit({
      email: this.email,
      password: this.password,
    });
  }
}
