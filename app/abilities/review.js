import { Ability } from 'ember-can';
import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class ReviewAbility extends Ability {
  @service session;

  @reads('session.isAuthenticated') canCreate;
}
