import type { CoreConfig, Property, Values, Classes, Aliases, Breakpoint } from '@tenoxui/core/full'
import type { ColorOptions, ColorInput } from '@nousantx/color-generator'

export interface Config {
  property?: Property
  coloredProperty?: Property
  values?: Values
  classes?: Classes
  aliases?: Aliases
  breakpoints?: Breakpoint[]
  color?: ColorInput
  colorOption?: ColorOptions
  attributify?: boolean
  attributifyPrefix?: string
  tenoxuiOption?: CoreConfig
}
