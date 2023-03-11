import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class PostsPostRoute extends Route {
  @service store;
  model({ post_id }) {
    return this.store.findRecord('post', post_id);
  }
}
