import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class PostsController extends Controller {
  @service store;
  @tracked newTitle = '';
  @action addPost(event) {
    if (event.keyCode === 13) {
      this.store
        .createRecord('post', {
          title: this.newTitle,
          publishedAt: new Date(),
        })
        .save();
      this.newTitle = '';
    }
  }
}
