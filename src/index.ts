import { MakeTenoxUI } from '@tenoxui/core/full'
import { merge, transformClasses } from '@nousantx/someutils'
import { generateColors } from '@nousantx/color-generator'
import type { CoreConfig, Values, Classes } from '@tenoxui/core/full'
import { createProperties } from './lib/properties'
import { createValues } from './lib/values'
import { Config } from './types'

export function createConfig({
  property = {},
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
}: Config): CoreConfig {
  const colors = generateColors({
    option: colorOption,
    color
  }) as Values

  return {
    property: createProperties(property, coloredProperty),
    values: createValues(values, colors),
    classes: merge(transformClasses(utilityClasses), classes) as Classes,
    aliases,
    breakpoints,
    attributify,
    attributifyPrefix,
    ...tenoxuiOption
  }
}

interface MainOption {
  config: CoreConfig
  selectors?: string
  useDOM?: boolean
  engine?: typeof MakeTenoxUI
}

export function init(options: MainOption) {
  const { config = {}, selectors = '*', useDOM = true, engine = MakeTenoxUI } = options

  document.querySelectorAll(selectors).forEach((element) => {
    const styler = new engine({ element: element as HTMLElement, ...config })

    if (useDOM) styler.useDOM()
    else element.classList.forEach((className) => styler.applyStyles(className))
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
