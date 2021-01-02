import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthorDetailNewBookRoute extends Route {
  @service session;

  beforeModel(transition) {
    return this.session.requireAuthentication(transition, 'login');
  }

  model() {
    const author = this.modelFor('author.detail');

    return {
      author,
      book: {
        title: '',
        isbn: '',
        publishDate: null,
        author,
      },
    };
  }
}
