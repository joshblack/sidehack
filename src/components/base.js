import { rem, createMapFromObject } from '../helpers';

export const defaultFontSize = rem(14);

export const colors = createMapFromObject({
  text: '#4A4A4A',
  brand: {
    'green': '#6AEC7B'
  },
  'button': {
    'light': '#929292',
    'dark': '#FFFFFF'
  }
});

export const text = createMapFromObject({
  lineHeight: {
    rem: `${rem(23)}rem`
  },

  body: {
    font: `'DroidSans', sans-serif`,
    color: colors.get('text'),
    size: defaultFontSize
  },

  em: {
    font: `'DroidSerif', serif`,
    color: colors.get('text'),
    size: defaultFontSize
  },

  title: {
    font: `'Oswald', sans-serif`,
    color: colors.get('text')
  },

  button: {
    font: `'DroidSans', sans-serif`,
    color: colors.get('button').light,
    size: defaultFontSize
  }
})
