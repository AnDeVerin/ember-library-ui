import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ReviewFormComponent extends Component {
  user = this.args.review.user ?? '';
  body = this.args.review.body ?? '';

  @action
  submitChanges() {
    this.args.onSubmit({
      user: this.user,
      body: this.body,
      book: this.args.review.book,
    });
  }
}
