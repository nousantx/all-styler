import { MakeTenoxUI } from '@tenoxui/core/full'
import { merge, createProperty } from '@nousantx/someutils'
import { generateColors } from '@nousantx/color-generator'
import type { CoreConfig, Property, Values } from '@tenoxui/core/full'
import { Config } from './types'

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
  document.querySelectorAll(selectors).forEach(element => {
    new MakeTenoxUI({ element: element as HTMLElement, ...config }).useDOM()
  })
}

export * from '@tenoxui/core/full'
export * from '@nousantx/someutils'
export { Config } from './types'
