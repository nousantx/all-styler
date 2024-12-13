import type { Property } from '@tenoxui/core/full'

export const defaultColoredProperties: Property = {
  bg: 'background',
  text: 'color'
}

export const defaultProperties: Property = {
  // css variable
  shadow: '--nsx_shadow-color',

  // padding
  p: 'padding',
  pt: 'paddingTop',
  pb: 'paddingBottom',
  pr: 'paddingRight',
  pl: 'paddingLeft',
  py: ['paddingTop', 'paddingBottom'],
  px: ['paddingLeft', 'paddingRight'],
  // margin
  m: 'margin',
  mt: 'marginTop',
  mb: 'marginBottom',
  mr: 'marginRight',
  ml: 'marginLeft',
  my: ['marginTop', 'marginBottom'],
  mx: ['marginLeft', 'marginRight'],
  // font related
  fs: 'fontSize',
  fw: 'fontWeight',
  lh: 'lineHeight',
  ls: 'letterSpacing',
  ta: 'textAlign',
  td: 'textDecoration',
  ti: 'textIndent',
  tn: 'textTransform',
  tw: 'textWrap',
  ws: 'wordSpacing',
  family: 'fontFamily',
  'font-s': 'fontStyle',
  'white-space': 'whiteSpace',
  // positioning
  pn: 'position',
  z: 'zIndex',
  t: 'top',
  b: 'bottom',
  r: 'right',
  l: 'left',
  // display
  d: 'display',
  // size
  w: 'width',
  'w-mx': 'maxWidth',
  'w-mn': 'minWidth',
  h: 'height',
  'h-mx': 'maxHeight',
  'h-mn': 'minHeight',
  box: ['width', 'height'],
  // background related
  'bg-c': 'backgroundColor',
  'bg-img': 'backgroundImage',
  'bg-size': 'backgroundSize',
  'bg-r': 'backgroundRepeat',
  'bg-pn': 'backgroundPosition',
  // flex box
  flex: 'flex',
  'flex-d': 'flexDirection',
  'flex-w': 'flexWrap',
  'flex-b': 'flexBasis',
  'flex-g': 'flexGrow',
  'flex-s': 'flexShrink',
  // grid layout
  'grid-cols': {
    property: 'gridTemplateColumns',
    value: 'repeat({0}, minmax(0, 1fr))'
  },
  'grid-rows': {
    property: 'gridTemplateRows',
    value: 'repeat({0}, minmax(0, 1fr))'
  },
  'col-start': 'gridColumnStart',
  'col-end': 'gridColumnEnd',
  'row-start': 'gridRowStart',
  'row-end': 'gridRowEnd',
  'col-span': {
    property: 'gridColumn',
    value: 'span {0} / span {0}'
  },
  'row-span': {
    property: 'gridRow',
    value: 'span {0} / span {0}'
  },
  // gap
  gap: 'gap',
  'gap-y': 'columnGap',
  'gap-x': 'rowGap',
  // align
  ai: 'alignItems',
  ac: 'alignContent',
  // justify
  jc: 'justifyContent',
  // place -
  'pc-i': 'placeItems',
  // border related
  bdr: 'border',
  bc: 'borderColor',
  br: 'borderRadius',
  bs: 'borderStyle',
  bw: 'borderWidth',
  'bw-y': ['borderTopWidth', 'borderBottomWidth'],
  'bw-x': ['borderLeftWidth', 'borderRightWidth'],
  'bw-left': 'borderLeftWidth',
  'bw-bottom': 'borderBottomWidth',
  'bw-right': 'borderRightWidth',
  'br-t': ['borderTopRightRadius', 'borderTopLeftRadius'],
  'br-b': ['borderBottomRightRadius', 'borderBottomLeftRadius'],
  'br-l': ['borderBottomLeftRadius', 'borderTopLeftRadius'],
  'br-r': ['borderBottomRightRadius', 'borderTopRightRadius'],
  'br-tl': 'borderTopLeftRadius',
  'br-tr': 'borderTopRightRadius',
  'br-bl': 'borderBottomLeftRadius',
  'br-br': 'borderBottomRightRadius',
  // cursor
  cursor: 'cursor',
  // overflow
  over: 'overflow',
  'over-y': 'overflowY',
  'over-x': 'overflowX',
  // aspect Ratio
  ratio: 'aspectRatio',
  // transition
  tr: 'transition',
  'tr-time': 'transitionDuration',
  'tr-prop': 'transitionProperty',
  'tr-timing': 'transitionTimingFunction',
  'tr-delay': 'transitionDelay',
  // other
  all: 'all',
  order: 'order',
  visibility: 'visibility',
  resize: 'resize',
  float: 'float',
  isolation: 'isolation',
  col: 'columns',
  'box-s': 'boxSizing'
}
