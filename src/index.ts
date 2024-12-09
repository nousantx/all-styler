import { MakeTenoxUI } from '@tenoxui/core/full'
import { property as txProps } from '@tenoxui/property'
import { merge, createProperty } from '@nousantx/someutils'
import { generateColors } from '@nousantx/color-generator'
import type { CoreConfig, Property, Values } from '@tenoxui/core/full'
import { Config } from './types'

export function createConfig({
  property = {},
  coloredProperty = { 'use-tenoxui': '--colored-feature-tenoxui' },
  values = {},
  classes = {},
  aliases = {},
  breakpoints = [],
  color = { red: '#ef3737' },
  colorOption = { format: 'object2', output: 'rgb-only' },
  attributify = true,
  attributifyPrefix = 'nsx-',
  tenoxuiOption = {}
}: Config): CoreConfig {
  const colors = generateColors({
    option: colorOption,
    color
  }) as Values

  return {
    property: {
      // Added tenoxui default properties
      ...txProps,
      ...property,
      // Put the coloredProperty in the end to prioritize this
      ...(createProperty(
        coloredProperty as Record<string, string>,
        'rgb({0} / var(--{1}-opacity, 1))'
      ) as Property),
      ...(Object.keys(coloredProperty).reduce<Record<string, string>>((acc, item) => {
        acc[`${item}-opacity`] = `--${item}-opacity`
        return acc
      }, {}) as Property)
    },
    values: merge(colors, values) as Values,
    classes,
    aliases,
    breakpoints,
    attributify,
    attributifyPrefix,
    ...tenoxuiOption
  }
}

export function init(
  config: CoreConfig,
  selectors: string = '*',
  engine: typeof MakeTenoxUI = MakeTenoxUI
) {
  console.log(config)
  document.querySelectorAll(selectors).forEach((element) => {
    new engine({ element: element as HTMLElement, ...config }).useDOM()
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
