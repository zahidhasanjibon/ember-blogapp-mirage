import Route from '@ember/routing/route';

export default class PostRoute extends Route {
  model({ post_id }) {
    return this.store.findRecord('post', post_id, { include: 'comments' });
  }
}
