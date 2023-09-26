import { ProvideConsumeContextTree } from '@glimmer/interfaces';
import { Stack } from '@glimmer/util';

export default class ProvideConsumeContextTreeImpl implements ProvideConsumeContextTree {
  private stack = new Stack();

  registerProvider(provider: any) {
    console.log('register provider', provider);
    this.stack.push(provider);
  }

  enter(obj: any) {
    console.log('enter', obj);
    this.stack.push(obj);
  }

  exit() {
    console.log('exit');
    this.stack.pop();
  }

  get current() {
    return this.stack.current;
  }
}
