import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import config from '../config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service session;

  host = config.DS.host;

  @computed('session.{isAuthenticated,data.authenticated.token}')
  get headers() {
    return this.session.isAuthenticated
      ? { Authorization: `Bearer ${this.session.data.authenticated.token}` }
      : {};
  }
}
