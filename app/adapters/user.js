import ApplicationAdapter from './application';

export default class UserAdapter extends ApplicationAdapter {
  urlForQueryRecord(query) {
    if (query.me) {
      delete query.me;

      return `${this.buildURL('user')}/me`;
    }

    return this.buildURL('user');
  }
}
