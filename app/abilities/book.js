import { Ability } from 'ember-can';
import { computed } from '@ember/object';
import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class BookAbility extends Ability {
  @service session;
  @service currentUser;

  @computed('currentUser.user.username', 'model.username')
  get canEdit() {
    return this.currentUser.user.username === this.model.username;
  }

  @reads('canEdit') canDelete;

  @reads('session.isAuthenticated') canCreate;
}
