import { ProvideConsumeContextTree } from '@glimmer/interfaces';
import { Stack } from '@glimmer/util';

export default class ProvideConsumeContextTreeImpl {
  private stack = new Stack();
  contexts = new WeakMap<any, any>();

  begin(): void {
    this.reset();
  }

  commit(): void {
    this.reset();
  }

  registerProvider(provider: any) {
    let { current } = this;

    let providerContexts: Record<any, any> = {};
    if (this.contexts.has(current)) {
      let context = this.contexts.get(current);
      providerContexts = { ...context };
    }
    providerContexts[provider.id] = provider;
    this.contexts.set(current, providerContexts);
    // this.stack.push(provider);
  }

  registerComponent(component: any) {
    let { current } = this;

    if (this.contexts.has(current)) {
      let context = this.contexts.get(current);
      this.contexts.set(component, context);
    }
  }

  create(obj: any) {
    this.enter(obj);
  }

  update(obj: any) {
    this.enter(obj);
  }

  didRender() {
    this.exit();
  }

  get current() {
    return this.stack.current;
  }

  private reset(): void {
    if (this.stack.size !== 0) {
      while (!this.stack.isEmpty()) {
        this.stack.pop();
      }
    }
  }

  private enter(obj: any): void {
    let { current } = this;

    if (this.contexts.has(current)) {
      let context = this.contexts.get(current);
      this.contexts.set(obj, context);
    }

    if (obj._isProvideConsumeContextProvider) {
      this.registerProvider(obj);
    } else {
      this.registerComponent(obj);
    }

    console.log('enter');
    this.stack.push(obj);
  }

  private exit(): void {
    console.log('exit');
    this.stack.pop();
    console.log(this.stack.size);
  }
}
