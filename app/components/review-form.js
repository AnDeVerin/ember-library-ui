import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ReviewFormComponent extends Component {
  body = this.args.review.body || '';

  @action
  submitChanges() {
    this.args.onSubmit({
      body: this.body,
      book: this.args.review.book,
    });
  }
}
