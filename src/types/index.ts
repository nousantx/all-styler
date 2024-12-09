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
import type { ColorOptions, ColorInput } from '@nousantx/color-generator'

export type UtilityClasses = {
  [className: string]: {
    [property in CSSPropertyOrVariable]?: string
  }
}

export interface Config {
  property?: Property
  coloredProperty?: Record<string, GetCSSProperty>
  values?: Values
  classes?: Classes
  utilityClasses?: UtilityClasses
  aliases?: Aliases
  breakpoints?: Breakpoint[]
  color?: ColorInput
  colorOption?: ColorOptions
  attributify?: boolean
  attributifyPrefix?: string
  tenoxuiOption?: CoreConfig
}
