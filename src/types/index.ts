import type {
  CoreConfig,
  Property,
  CSSPropertyOrVariable,
  GetCSSProperty,
  Values,
  Classes,
  Aliases,
  Breakpoint
} from '@tenoxui/core/full'
import { MakeTenoxUI } from '@tenoxui/core/full'
import type { ColorInput } from '@nousantx/color-generator'

export type UtilityClasses = {
  [className: string]: {
    [property in CSSPropertyOrVariable]?: string
  }
}

export interface Config {
  shorthand?: Property
  coloredShorthand?: Record<string, GetCSSProperty>
  valueAlias?: Values
  utilityFirst?: Classes
  utilityClass?: UtilityClasses
  alias?: Aliases
  breakpoint?: Breakpoint[]
  color?: ColorInput
  isDark?: boolean
  attributify?: boolean
  attributifyPrefix?: string
  tenoxuiOption?: CoreConfig
  plugins?: CoreConfig[]
}

export interface MainOption {
  config: CoreConfig
  root?: HTMLElement
  selectors?: string
  useDOM?: boolean
  engine?: typeof MakeTenoxUI
}
