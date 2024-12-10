import type { Property, GetCSSProperty, CSSVariable } from '@tenoxui/core/full'
import { createProperty } from '@nousantx/someutils'
import { defaultProperties, defaultColoredProperties } from './default'

type PropertyMapping = Record<string, string>

export const createProperties = (
  property: Property,
  coloredProperty: Record<string, GetCSSProperty>
): Property => {
  const createMapping = (properties: string[], prefix: string): PropertyMapping => {
    return properties.reduce<PropertyMapping>((acc, prop) => {
      acc[prop] = `${prefix}${prop.replace(/-/g, '_')}`
      return acc
    }, {})
  }

  // generate color property shorthand
  const createColorProperty = createProperty(
    { ...defaultColoredProperties, ...coloredProperty } as Record<string, string>,
    'rgb({0} / var(--{1}-opacity, 1))'
  ) as Property

  // generate css variable shorthand from coloredProperty
  const cssVariableColor = Object.keys(coloredProperty).reduce<Record<string, CSSVariable>>(
    (acc, item) => {
      acc[`${item}-opacity`] = `--${item}-opacity`
      return acc
    },
    {}
  ) as Property

  const myProperties = {
    transform: 'transform',
    filter: 'filter',
    // transform property
    ...createMapping(
      [
        'rotate',
        'rotate-y',
        'rotate-x',
        'rotate-z',
        'scale',
        'scale-x',
        'scale-y',
        'scale-z',
        'skew',
        'skew-x',
        'skew-y',
        'translate',
        'translate-x',
        'translate-y',
        'translate-z'
      ],
      '--nsx_'
    ),
    // filter property
    ...createMapping(
      [
        'blur',
        'brightness',
        'contrast',
        'grayscale',
        'hue-rotate',
        'invert',
        'opacity',
        'saturate',
        'sepia',
        'drop-shadow'
      ],
      '--nsx_'
    )
  } as Property

  return {
    // my properties
    ...myProperties,
    // create CSS variables to change the opacity from the coloredProperty
    ...cssVariableColor,
    // tenoxui's default properties
    ...defaultProperties,
    // user config properties
    ...property,
    // colored properties, prioritize them
    ...createColorProperty
  }
}
