export {
  default as Template,
  ATTRIBUTE_SYNTAX,
  Templates,
  TemplateEvaluation,
  ParamsAndHash,
  Params,
  Hash,
  EvaluatedParams,
  EvaluatedHash,
  EvaluatedParamsAndHash,
  Append,
  Unknown,
  StaticAttr,
  DynamicAttr,
  AddClass,
  EvaluatedRef,
  Get as GetSyntax,
  Value as ValueSyntax,
  AttributeSyntax,
  OpenElement,
  Helper as HelperSyntax,
  Block as BlockSyntax,
  Jump,
  JumpIf,
  JumpUnless,
  builders
} from './lib/template';

export { StatementSyntax, ExpressionSyntax } from './lib/opcodes';

export { VM } from './lib/vm';

export {
  PushScopeOptions,
  PushChildScope,
  PushRootScope,
  PopScope,
  Evaluate,
  Deref,
  DerefRegister,
  PutObject,
  GetObject,
  GetLocal,
  OpenBlock,
  CloseBlock,
  NoopSyntax,
  StartIter,
  NextIter
} from './lib/opcodes/inlining';

export {
  Scope,
  Environment,
  Helper,
  Frame,
  Block,
} from './lib/environment';

export {
  ComponentClass,
  ComponentDefinition,
  AppendingComponentClass,
  ComponentDefinitionOptions,
  AppendingComponent as IAppendingComponent,
  AppendingComponentOptions,
  ComponentHooks,
  Component
} from './lib/component/interfaces';

export {
  appendComponent
} from './lib/component/utils';

export { default as AppendingComponent } from './lib/component/appending';

export { default as DOMHelper, isWhitespace } from './lib/dom';
export { RenderResult, manualElement } from './lib/render';
export { ElementStack } from './lib/builder';
export { Morph, MorphSpecializer, ContentMorph, TemplateMorph, EmptyableMorph, Bounds, createMorph } from './lib/morph';
export { MorphList, InnerBlockMorph, MorphListOptions } from './lib/morphs/list';