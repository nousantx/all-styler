import { MakeTenoxUI } from '@tenoxui/core/full'
import type { CoreConfigFull as CoreConfig, Values, Classes } from '@tenoxui/types'
import { merge, transformClasses } from '@nousantx/someutils'
// import { generateColors } from '@nousantx/color-generator'
import { generateColors } from './lib/color/computeColor'
import { createProperties } from './lib/properties'
import { defaultClasses } from './lib/classes'
import { defaultBreakpoints } from './lib/breakpoints'
import { colors as defaultColors, ColorScheme } from './lib/color'
import { Config, MainOption } from './types'

export function createConfig(options: Config = {}): CoreConfig {
  const {
    shorthand = { 'nsx-tenoxui-template': '--ignore-this' },
    coloredShorthand = { 'use-tenoxui': '--colored-feature-tenoxui' },
    valueAlias = {},
    utilityFirst = {},
    utilityClass = {},
    alias = {},
    breakpoint = [],
    color = {},
    isDark = false,
    attributify = true,
    attributifyPrefix = 'nsx-',
    plugins = [],
    tenoxuiOption = {}
  } = options

  const colorScheme: ColorScheme = isDark ? 'dark' : 'light'
  const inputColors: Record<string, string> = {
    ...defaultColors.DEFAULT,
    ...color.DEFAULT
  }

  // generate color aliases for tenoxuic
  const colors = generateColors({
    color: { ...inputColors, ...color[colorScheme] },
    isDark
  }) as Values
  const fixedColors = generateColors({
    color: inputColors,
    prefix: 'fc-'
  }) as Values

  // added custom plugins field
  // see https://github.com/nousantx/tenoxui-styles-kit
  const usedPlugins = plugins.reduce((acc, plugin) => merge(acc, plugin), {})

  return merge(
    {
      property: createProperties(shorthand, coloredShorthand),
      values: merge(colors, fixedColors, valueAlias),
      classes: merge(defaultClasses, transformClasses(utilityClass), utilityFirst) as Classes,
      aliases: alias,
      breakpoints: [...defaultBreakpoints, ...breakpoint],
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
