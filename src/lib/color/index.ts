export type ColorScheme = 'light' | 'dark' | 'DEFAULT'

export const colors: Record<ColorScheme, Record<string, string>> = {
  DEFAULT: {
    primary: '#ccf654',
    red: '#f03838',
    green: '#15e05f',
    blue: '#3d82f2',
    yellow: '#f1c230',
    neutral: '#737373'
  },
  light: {},
  dark: {}
}
