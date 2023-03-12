// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class PostsComponent extends Component {
  @tracked firstName = 'zahid';
  @tracked lastName = 'hasan';
  get fullName() {
    return `${this.firstName} ${this.lastName} jibon`;
  }
  @action changeName() {
    this.firstName = 'md';
  }
  //   @tracked fullName = computed('firstName', 'lastName', function () {
  //     return `${this.firstName} ${this.lastName} jibon`;
  //   });
}
