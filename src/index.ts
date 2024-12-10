import { MakeTenoxUI } from '@tenoxui/core/full'
import { merge, transformClasses } from '@nousantx/someutils'
import { generateColors } from '@nousantx/color-generator'
import type { CoreConfig, Values, Classes } from '@tenoxui/core/full'
import { createProperties } from './lib/properties'
import { defaultClasses } from './lib/classes'
import { colors as defaultColors } from './lib/color'
import { createValues } from './lib/values'
import { Config } from './types'

export function createConfig(options: Config = {}): CoreConfig {
  const {
    property = { 'nsx-tenoxui-template': '--ignore-this' },
    coloredProperty = { 'use-tenoxui': '--colored-feature-tenoxui' },
    values = {},
    classes = {},
    utilityClasses = {},
    aliases = {},
    breakpoints = [],
    color = { red: '#ef3737' },
    colorOption = { format: 'object2', output: 'rgb-only' },
    attributify = true,
    attributifyPrefix = 'nsx-',
    tenoxuiOption = {}
  } = options

  const colors = generateColors({
    option: colorOption,
    color: { ...defaultColors, ...color }
  }) as Values

  return {
    property: createProperties(property, coloredProperty),
    values: createValues(values, colors),
    classes: merge(defaultClasses, transformClasses(utilityClasses), classes) as Classes,
    aliases: {
      'grid-column': '[gridTemplateColumns]-none',
      'grid-cols-none': '[gridTemplateColumns]-none',
      'grid-cols-subgrid': '[gridTemplateRoes]-subgrid',
      'grid-rows-none': '[gridTemplateColumns]-none',
      'grid-rows-subgrid': '[gridTemplateRows]-subgrid',
      'col-span-full': '[gridColumn]-[1_/_-1]]',
      ...aliases
    },
    breakpoints,
    attributify,
    attributifyPrefix,
    ...tenoxuiOption
  }
}

interface MainOption {
  config: CoreConfig
  root?: HTMLElement
  selectors?: string
  useDOM?: boolean
  engine?: typeof MakeTenoxUI
}

export function init(options: MainOption) {
  const {
    config = {},
    root = document,
    selectors = '*',
    useDOM = true,
    engine = MakeTenoxUI
  } = options

  root.querySelectorAll(selectors).forEach(element => {
    const styler = new engine({ element: element as HTMLElement, ...config })

    if (useDOM) styler.useDOM()
    else element.classList.forEach(className => styler.applyStyles(className))
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
