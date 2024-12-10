import type { Values } from '@tenoxui/core/full'
import { merge } from '@nousantx/someutils'

export const createValues = (values: Values, colors: Values): Values => {
  const defaultValues: Values = {
    full: '100%',
    transform: {
      full: 'rotate(var(--nsx_rotate, 0))\nrotateY(var(--nsx_rotate-y, 0))\nrotateX(var(--nsx_rotate-x, 0))\nrotateZ(var(--nsx_rotate-z, 0))\nscale(var(--nsx_scale, 1))\nscaleY(var(--nsx_scale-y, 1))\nscaleX(var(--nsx_scale-x, 1))\nscaleZ(var(--nsx_scale-z, 1))\nskew(var(--nsx_skew, 0))\nskewY(var(--nsx_skew-y, 0))\nskewX(var(--nsx_skew-x, 0))\ntranslate(var(--nsx_translate, 0))\ntranslateY(var(--nsx_translate-y, 0))\ntranslateX(var(--nsx_translate-x, 0))\ntranslateZ(var(--nsx_translate-z, 0))'
    },
    filter: {
      full: 'blur(var(--nsx_blur, 0))\nbrightness(var(--nsx_brightness, 1))\ncontrast(var(--nsx_contrast, 1))\ngrayscale(var(--nsx_grayscale, 0))\nhue-rotate(var(--nsx_hue-rotate, 0))\ninvert(var(--nsx_invert, 0))\nopacity(var(--nsx_opacity, 1))\nsaturate(var(--nsx_saturate, 1))\nsepia(var(--nsx_sepia, 0))\ndrop-shadow(var(--nsx_drop-shadow, 0 0 0 rgb(0 0 0 / 0)))'
    }
  }

  return merge(defaultValues, colors, values)
}
