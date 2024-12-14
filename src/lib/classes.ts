import type { Classes } from '@tenoxui/core/full'
import { createSameValue } from '@nousantx/someutils'

export const defaultClasses: Classes = {
  display: {
    ...createSameValue(['flex', 'inline-flex', 'block', 'inline-block', 'grid']),
    center: 'flex',
    hidden: 'none'
  },
  position: {
    ...createSameValue(['relative', 'absolute', 'fixed', 'sticky'])
  },
  justifyContent: {
    'space-between': 'space-between',
    center: 'center'
  },
  alignItems: {
    'items-center': 'center',
    center: 'center'
  },
  flexDirection: {
    'flex-col': 'column',
    'flex-row': 'row'
  },
  flexWrap: {
    'flex-wrap': 'wrap',
    'flex-nowrap': 'nowrap'
  }
}
