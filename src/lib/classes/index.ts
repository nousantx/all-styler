import type { Classes } from '@tenoxui/core/full'
import { createSameValue } from '@nousantx/someutils'

export const defaultClasses: Classes = {
  display: {
    ...createSameValue(['flex', 'inline-flex', 'block', 'inline-block', 'grid']),
    hidden: 'none'
  },
  position: {
    ...createSameValue(['relative', 'absolute', 'fixed', 'sticky'])
  },
  '--nsx_ring-offset-width': {
    'ring-offset-0': '0px',
    'ring-offset-1': '1px',
    'ring-offset-2': '2px',
    'ring-offset-4': '4px',
    'ring-offset-8': '8px'
  },
  '--nsx_ring-offset': {
    'ring-offset-0': '0 0 0 var(--nsx_ring-offset-width) rgb(var(--nsx_ring-offset-color, 0 0 0))',
    'ring-offset-1': '0 0 0 var(--nsx_ring-offset-width) rgb(var(--nsx_ring-offset-color, 0 0 0))',
    'ring-offset-2': '0 0 0 var(--nsx_ring-offset-width) rgb(var(--nsx_ring-offset-color, 0 0 0))',
    'ring-offset-4': '0 0 0 var(--nsx_ring-offset-width) rgb(var(--nsx_ring-offset-color, 0 0 0))',
    'ring-offset-8': '0 0 0 var(--nsx_ring-offset-width) rgb(var(--nsx_ring-offset-color, 0 0 0))'
  },
  boxShadow: {
    // shadow
    'shadow-sm': '0 1px 2px 0 rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.05))',
    shadow:
      '0 1px 3px 0 rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1)), 0 1px 2px -1px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1))',
    'shadow-md':
      '0 4px 6px -1px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1)), 0 2px 4px -2px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1))',
    'shadow-lg':
      '0 10px 15px -3px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1)), 0 4px 6px -4px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1))',
    'shadow-xl':
      '0 20px 25px -5px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1)), 0 8px 10px -6px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.1))',
    'shadow-2xl': '0 25px 50px -12px rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.25))',
    'shadow-inner': 'inset 0 2px 4px 0 rgb(var(--nsx_shadow-color, 0 0 0) / var(--nsx_shadow-opa, 0.05))',
    'shadow-none': '0 0 #0000',
    // ring
    'ring-0':
      'var(--nsx_ring-offset), 0 0 0 calc(0px + var(--nsx_ring-offset-width)) rgb(var(--nsx_ring-color, 0 0 0))',
    'ring-1':
      'var(--nsx_ring-offset), 0 0 0 calc(1px + var(--nsx_ring-offset-width)) rgb(var(--nsx_ring-color, 0 0 0))',
    'ring-2':
      'var(--nsx_ring-offset), 0 0 0 calc(2px + var(--nsx_ring-offset-width)) rgb(var(--nsx_ring-color, 0 0 0))',
    ring: 'var(--nsx_ring-offset), 0 0 0 calc(3px + var(--nsx_ring-offset-width)) rgb(var(--nsx_ring-color, 0 0 0))',
    'ring-4':
      'var(--nsx_ring-offset), 0 0 0 calc(4px + var(--nsx_ring-offset-width)) rgb(var(--nsx_ring-color, 0 0 0))',
    'ring-8':
      'var(--nsx_ring-offset), 0 0 0 calc(8px + var(--nsx_ring-offset-width)) rgb(var(--nsx_ring-color, 0 0 0))'
  }
}
