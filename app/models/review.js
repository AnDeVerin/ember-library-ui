import Model, { attr, belongsTo } from '@ember-data/model';

export default class ReviewModel extends Model {
  @attr() user;
  @attr() body;
  @attr() createdAt;

  @belongsTo('book') book;
}
