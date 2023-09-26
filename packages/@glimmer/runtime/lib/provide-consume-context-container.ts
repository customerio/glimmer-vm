import { ComponentInstance, ProvideConsumeContextContainer } from '@glimmer/interfaces';
import { Stack } from '@glimmer/util';

export default class ProvideConsumeContextContainerImpl implements ProvideConsumeContextContainer {
  private stack = new Stack();
  contexts = new WeakMap<any, Record<string, any>>();

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
      // If a provider is nested within another provider, we merge their
      // contexts
      let context = this.contexts.get(current);
      if (context !== null && context !== undefined) {
        providerContexts = { ...context };
      }
    }
    providerContexts[provider.id] = provider;

    this.contexts.set(provider, providerContexts);
  }

  registerComponent(component: any) {
    let { current } = this;

    // If a current context reference exists, register the component to it
    if (this.contexts.has(current)) {
      let context = this.contexts.get(current);
      if (context !== null && context !== undefined) {
        this.contexts.set(component, context);
      }
    }
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

  enter(instance: ComponentInstance): void {
    let componentDefinitionClass = instance.definition.state;
    let actualComponentInstance = (instance?.state as any)?.component;

    if (actualComponentInstance) {
      // _isProvideConsumeContextProvider is a static property on the Provider
      // component.
      // TODO: Can the Provider component be built into Glimmer? Should we do this
      // with some sort of manager?
      if ((componentDefinitionClass as any)?._isProvideConsumeContextProvider) {
        this.registerProvider(actualComponentInstance);
      } else {
        this.registerComponent(actualComponentInstance);
      }

      this.stack.push(actualComponentInstance);
    }
  }

  exit(instance: ComponentInstance): void {
    let actualComponentInstance = (instance?.state as any)?.component;

    if (actualComponentInstance) {
      this.stack.pop();
    }
  }
}
