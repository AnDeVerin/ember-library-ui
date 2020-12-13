import Route from '@ember/routing/route';

export default class AuthorRoute extends Route {
  queryParams = {
    search: {
      refreshModel: true,
      replace: true,
    },
  };

  model({ search }) {
    return search
      ? this.store.query('author', {
          filter: {
            query: search,
          },
        })
      : this.store.findAll('author');
  }
}
