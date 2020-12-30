import Model, { attr, belongsTo } from '@ember-data/model';

export default class ReviewModel extends Model {
  @attr() username;
  @attr() body;
  @attr() createdAt;

  @belongsTo('book') book;
}
