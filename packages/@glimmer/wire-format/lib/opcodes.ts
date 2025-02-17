import type {
  AppendOpcode,
  AttrSplatOpcode,
  BlockOpcode,
  CallOpcode,
  CloseElementOpcode,
  CommentOpcode,
  ComponentAttrOpcode,
  ComponentOpcode,
  ConcatOpcode,
  CurryOpcode,
  DebuggerOpcode,
  DynamicArgOpcode,
  DynamicAttrOpcode,
  EachOpcode,
  FlushElementOpcode,
  GetDynamicVarOpcode,
  GetFreeAsComponentHeadOpcode,
  GetFreeAsComponentOrHelperHeadOpcode,
  GetFreeAsComponentOrHelperHeadOrThisFallbackOpcode,
  GetFreeAsDeprecatedHelperHeadOrThisFallbackOpcode,
  GetFreeAsHelperHeadOpcode,
  GetFreeAsHelperHeadOrThisFallbackOpcode,
  GetFreeAsModifierHeadOpcode,
  GetLexicalSymbolOpcode,
  GetStrictKeywordOpcode,
  GetSymbolOpcode,
  HasBlockOpcode,
  HasBlockParamsOpcode,
  IfInlineOpcode,
  IfOpcode,
  InElementOpcode,
  InvokeComponentOpcode,
  LetOpcode,
  LogOpcode,
  ModifierOpcode,
  NotOpcode,
  OpenElementOpcode,
  OpenElementWithSplatOpcode,
  StaticArgOpcode,
  StaticAttrOpcode,
  StaticComponentAttrOpcode,
  StrictBlockOpcode,
  StrictModifierOpcode,
  TrustingAppendOpcode,
  TrustingComponentAttrOpcode,
  TrustingDynamicAttrOpcode,
  UndefinedOpcode,
  WithDynamicVarsOpcode,
  WithOpcode,
  YieldOpcode,
} from '@glimmer/interfaces';

export const opcodes = {
  Append: 1 satisfies AppendOpcode,
  TrustingAppend: 2 satisfies TrustingAppendOpcode,
  Comment: 3 satisfies CommentOpcode,
  Modifier: 4 satisfies ModifierOpcode,
  StrictModifier: 5 satisfies StrictModifierOpcode,
  Block: 6 satisfies BlockOpcode,
  StrictBlock: 7 satisfies StrictBlockOpcode,
  Component: 8 satisfies ComponentOpcode,
  OpenElement: 10 satisfies OpenElementOpcode,
  OpenElementWithSplat: 11 satisfies OpenElementWithSplatOpcode,
  FlushElement: 12 satisfies FlushElementOpcode,
  CloseElement: 13 satisfies CloseElementOpcode,
  StaticAttr: 14 satisfies StaticAttrOpcode,
  DynamicAttr: 15 satisfies DynamicAttrOpcode,
  ComponentAttr: 16 satisfies ComponentAttrOpcode,
  AttrSplat: 17 satisfies AttrSplatOpcode,
  Yield: 18 satisfies YieldOpcode,
  DynamicArg: 20 satisfies DynamicArgOpcode,
  StaticArg: 21 satisfies StaticArgOpcode,
  TrustingDynamicAttr: 22 satisfies TrustingDynamicAttrOpcode,
  TrustingComponentAttr: 23 satisfies TrustingComponentAttrOpcode,
  StaticComponentAttr: 24 satisfies StaticComponentAttrOpcode,
  Debugger: 26 satisfies DebuggerOpcode,
  Undefined: 27 satisfies UndefinedOpcode,
  Call: 28 satisfies CallOpcode,
  Concat: 29 satisfies ConcatOpcode,
  GetSymbol: 30 satisfies GetSymbolOpcode,
  GetLexicalSymbol: 32 satisfies GetLexicalSymbolOpcode,
  GetStrictKeyword: 31 satisfies GetStrictKeywordOpcode,
  GetFreeAsComponentOrHelperHeadOrThisFallback:
    34 satisfies GetFreeAsComponentOrHelperHeadOrThisFallbackOpcode,
  GetFreeAsComponentOrHelperHead: 35 satisfies GetFreeAsComponentOrHelperHeadOpcode,
  GetFreeAsHelperHeadOrThisFallback: 36 satisfies GetFreeAsHelperHeadOrThisFallbackOpcode,
  GetFreeAsDeprecatedHelperHeadOrThisFallback:
    99 satisfies GetFreeAsDeprecatedHelperHeadOrThisFallbackOpcode,
  GetFreeAsHelperHead: 37 satisfies GetFreeAsHelperHeadOpcode,
  GetFreeAsModifierHead: 38 satisfies GetFreeAsModifierHeadOpcode,
  GetFreeAsComponentHead: 39 satisfies GetFreeAsComponentHeadOpcode,
  InElement: 40 satisfies InElementOpcode,
  If: 41 satisfies IfOpcode,
  Each: 42 satisfies EachOpcode,
  With: 43 satisfies WithOpcode,
  Let: 44 satisfies LetOpcode,
  WithDynamicVars: 45 satisfies WithDynamicVarsOpcode,
  InvokeComponent: 46 satisfies InvokeComponentOpcode,
  HasBlock: 48 satisfies HasBlockOpcode,
  HasBlockParams: 49 satisfies HasBlockParamsOpcode,
  Curry: 50 satisfies CurryOpcode,
  Not: 51 satisfies NotOpcode,
  IfInline: 52 satisfies IfInlineOpcode,
  GetDynamicVar: 53 satisfies GetDynamicVarOpcode,
  Log: 54 satisfies LogOpcode,
} as const;
