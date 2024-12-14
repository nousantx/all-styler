import { MakeTenoxUI } from '@tenoxui/core/full'
import { merge, transformClasses } from '@nousantx/someutils'
import { generateColors } from '@nousantx/color-generator'
import type { CoreConfig, Values, Classes } from '@tenoxui/core/full'
import { createProperties } from './lib/properties'
import { defaultClasses } from './lib/classes'
import { defaultBreakpoints } from './lib/breakpoints'
import { colors as defaultColors } from './lib/color'
import { Config, MainOption } from './types'

export function createConfig(options: Config = {}): CoreConfig {
  const {
    property = { 'nsx-tenoxui-template': '--ignore-this' },
    coloredProperty = { 'use-tenoxui': '--colored-feature-tenoxui' },
    values = {},
    classes = {},
    utilityClasses = {},
    aliases = {},
    breakpoints = [],
    color = {},
    colorOption = { format: 'object2', output: 'rgb-only' },
    attributify = true,
    attributifyPrefix = 'nsx-',
    plugins = [],
    tenoxuiOption = {}
  } = options

  // generate color aliases for tenoxui
  const colors = generateColors({
    option: colorOption,
    color: { ...defaultColors, ...color }
  }) as Values

  // added custom plugins field
  // see https://github.com/nousantx/tenoxui-styles-kit
  const usedPlugins = plugins.reduce((acc, plugin) => {
    return merge(acc, plugin)
  }, {})

  return merge(
    {
      property: createProperties(property, coloredProperty),
      values: merge(colors, values),
      classes: merge(defaultClasses, transformClasses(utilityClasses), classes) as Classes,
      aliases,
      breakpoints: [...defaultBreakpoints, ...breakpoints],
      attributify,
      attributifyPrefix,
      ...tenoxuiOption
    },
    // assign the plugins with the config
    usedPlugins
  )
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
    // create tenoxui instance
    const styler = new engine({ element: element as HTMLElement, ...config })

    // if the MutationObserver is available, use this instead
    if (useDOM) styler.useDOM()
    // using class names scan method without MutationObserver
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
