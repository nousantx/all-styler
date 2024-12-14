import type { Property, GetCSSProperty, CSSVariable } from '@tenoxui/core/full'
import { createProperty } from '@nousantx/someutils'
import { defaultProperties, defaultColoredProperties } from './default'

export const createProperties = (
  property: Property,
  coloredProperty: Record<string, GetCSSProperty>
): Property => {
  // generate color property shorthand
  const createColorProperty = createProperty(
    { ...defaultColoredProperties, ...coloredProperty } as Record<string, string>,
    'rgb({0} / var(--{1}-opacity, 1))'
  ) as Property

  // generate css variable shorthand from coloredProperty
  const cssVariableColor = Object.keys({ ...defaultColoredProperties, ...coloredProperty }).reduce<
    Record<string, CSSVariable>
  >((acc, item) => {
    acc[`${item}-opacity`] = `--${item}-opacity`
    return acc
  }, {}) as Property

  const myProperties = {
    transform: 'transform',
    filter: 'filter'
  } as Property

  return {
    // my properties
    ...myProperties,
    // tenoxui's default properties
    ...defaultProperties,
    // user config properties
    ...property,
    // create CSS variables to change the opacity from the coloredProperty
    ...cssVariableColor,
    // colored properties, prioritize them
    ...createColorProperty
  }
}
