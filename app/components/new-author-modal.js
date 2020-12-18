import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NewAuthorModalComponent extends Component {
  @service store;

  @tracked
  author = {
    first: '',
    last: '',
  };

  @action
  reset() {
    this.author = {
      first: '',
      last: '',
    };
  }

  @action
  async saveAuthor() {
    const author = this.store.createRecord('author', this.author);
    await author.save();

    this.reset();
    set(this, 'isModalShown', false);

    this.args.onSave(author);
  }
}
