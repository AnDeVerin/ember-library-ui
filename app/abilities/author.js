import { Ability } from 'ember-can';
import { computed } from '@ember/object';
import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class AuthorAbility extends Ability {
  @service session;
  @service currentUser;

  @computed('currentUser.user.username', 'model.username')
  get canEdit() {
    return this.currentUser.user.username === this.model.username;
  }

  @computed('canEdit', 'model.books.length')
  get canDelete() {
    return this.canEdit && this.model.books.length === 0;
  }

  @reads('session.isAuthenticated') canCreate;
}
