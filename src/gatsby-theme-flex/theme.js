import baseTheme from './baseTheme'
export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    modes: {
      ...baseTheme.colors.modes,
      purple: {
        ...baseTheme.colors.modes.purple,
        backgroundHeader: '#06050c',
        backgroundFeatures: 'linear-gradient(#06050c, #131127)',
        backgroundAbout: 'linear-gradient(#131127, #2e295e)',
        backgroundGeneral: 'linear-gradient(#2e295e, #423b87)',
        backgroundPost: 'linear-gradient(#423b87, #2e295e)',
        backgroundFooter: 'linear-gradient(#2e295e, #06050c)'
      },
    }
  },
  logo: {
    width: '4em'
  }
}
