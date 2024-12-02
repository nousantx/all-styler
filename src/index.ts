import { MakeTenoxUI } from '@tenoxui/core/full'
import { merge, createProperty } from '@nousantx/someutils'
import { generateColors } from '@nousantx/color-generator'
import type { CoreConfig, Property, Values } from '@tenoxui/core/full'
import { Config } from './types'

export function createConfig(config: Config): CoreConfig {
  const {
    property = {},
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
    tenoxuiOption = {}
  } = config

  const colors = generateColors({
    option: colorOption,
    color
  }) as Values

  return {
    property: {
      ...property,
      ...(createProperty(
        coloredProperty as Record<string, string>,
        'rgb({0} / var(--{1}-opacity, 1))'
      ) as Property)
    },
    values: merge(colors, values) as Values,
    classes,
    aliases,
    breakpoints,
    attributify,
    ...tenoxuiOption
  }
}

export function init(config: CoreConfig, selectors: string = '*') {
  document.querySelectorAll(selectors).forEach((element) => {
    new MakeTenoxUI({ element: element as HTMLElement, ...config }).useDOM()
  })
}

export { Config } from './types'
export { MakeTenoxUI } from '@tenoxui/core/full'
export type { CoreConfig, Property, Values, Classes, Aliases, Breakpoint } from '@tenoxui/core/full'
export {
  merge,
  transformClasses,
  createValue,
  createSameValue,
  createProperty
} from '@nousantx/someutils'
