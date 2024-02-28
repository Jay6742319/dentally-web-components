import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @action
  countIncreased(count) {
    console.log('countIncreased', count.detail);
  }
}
