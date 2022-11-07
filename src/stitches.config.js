import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme
} = createStitches({
  theme: {
    colors: {
      Orange: 'hsl(26, 100%, 55%)',
      PaleOrange: 'hsl(25, 100%, 94%)',
      VeryDarkBlue: 'hsl(220, 13%, 13%)',
      DarkGrayishBlue: 'hsl(219, 9%, 45%)',
      GrayishBlue: 'hsl(220, 14%, 75%)',
      LightGrayishBlue: 'hsl(223, 64%, 98%)',
      White: 'hsl(0, 0%, 100%)',
      Black: 'hsl(0, 0%, 0%)',
      BackgroundBlack: 'rgba(0, 0, 0, 0.75)'
    },
    fontSizes: {
      1: '16px',
      2: '12px',
      3: '10px',
      4: '8px'
    },
    fontWeights: {
      regular: 400,
      bold: 700
    }
  },
  media: {
    bp1: '(min-width: 375px)',
    bp2: '(max-width: 740px)',
    bp3: '(max-width: 1024px)',
    bp4: '(min-width: 1200px)',
    bp5: '(min-width: 1441px)'
  }
})

export const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0
  },
  '*': {
    boxSizing: 'border-box',
    fontFamily: 'kumbh sans, sans-serif',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  }
})
