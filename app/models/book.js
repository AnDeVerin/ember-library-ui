import Model, { belongsTo, attr } from '@ember-data/model';

export default class BookModel extends Model {
  @attr() title;
  @attr() isbn;
  @attr() publishDate;

  @belongsTo('author') author;
}
