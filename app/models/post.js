import Model, { attr, hasMany } from '@ember-data/model';

export default class PostModel extends Model {
  @attr title;
  @attr body;
  @attr('date') publishedAt;
  @hasMany('comment') comments;

  get formatDate() {
    return this.publishedAt.toLocaleDateString('en-US');
  }
}
