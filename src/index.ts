import { MakeTenoxUI } from '@tenoxui/core/full'
import type { CoreConfig, Property, Values, Classes, Aliases, Breakpoint } from '@tenoxui/core/full'
import { merge, createProperty } from '@nousantx/someutils'
import { generateColors } from '@nousantx/color-generator'
import type { ColorOptions, ColorInput } from '@nousantx/color-generator'

export interface Config {
  property: Property
  coloredProperty: Property
  values: Values
  classes: Classes
  aliases: Aliases
  breakpoints: Breakpoint[]
  color: ColorInput
  colorOption: ColorOptions
  attributify: boolean
  attributifyPrefix: string
  attributifyIgnore: string[]
}

export function createConfig(config: Config): CoreConfig {
  const {
    property = { tenoxui: '--hello-tenoxui' },
    coloredProperty = {
      bg: 'backgroundColor',
      text: 'color'
    },
    values = {},
    classes = {},
    aliases = {},
    breakpoints = [],
    color = { red: '#ef3737' },
    colorOption = { format: 'object2', output: 'rgb-only' },
    attributify = true,
    attributifyPrefix = 'tui-',
    attributifyIgnore = []
  } = config

  const colors = generateColors({
    option: colorOption,
    color
  }) as Values

  return {
    property: {
      ...(createProperty(
        coloredProperty as Record<string, string>,
        'rgb({0} / var(--{1}-opacity, 1))'
      ) as Property),
      ...property
    },
    values: merge(colors, values) as Values,
    classes,
    aliases,
    breakpoints,
    attributify,
    attributifyPrefix,
    attributifyIgnore
  }
}

export function init(config: CoreConfig, selectors: string = '*') {
  document.querySelectorAll(selectors).forEach((element) => {
    new MakeTenoxUI({ element: element as HTMLElement, ...config }).useDOM()
  })
}

export * from '@tenoxui/core/full'
export * from '@nousantx/someutils'
