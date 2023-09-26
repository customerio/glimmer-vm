export interface ProvideConsumeContextTree {
  registerProvider(provider: any): void;
  enter(obj: any): void;
  exit(): void;
  current: any;
}
