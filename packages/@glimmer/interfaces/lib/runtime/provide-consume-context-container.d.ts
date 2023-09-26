import { ComponentInstance } from '../components';

export interface ProvideConsumeContextContainer {
  begin(): void;
  enter(instance: ComponentInstance): void;
  exit(instance: ComponentInstance): void;
  commit(): void;
}
