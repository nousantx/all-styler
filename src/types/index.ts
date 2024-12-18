import type {
  CoreConfigFull as CoreConfig,
  Property,
  CSSPropertyOrVariable,
  GetCSSProperty,
  Values,
  Classes,
  Aliases,
  Breakpoint
} from '@tenoxui/types'
import { MakeTenoxUI } from '@tenoxui/core/full'
import { ColorScheme } from '../lib/color'

export type UtilityClasses = {
  [className: string]: {
    [property in CSSPropertyOrVariable]?: string
  }
}

export type ColorInput = Partial<Record<ColorScheme, Record<string, string>>>

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
