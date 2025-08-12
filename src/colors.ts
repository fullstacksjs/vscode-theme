export const Palette = {
  Orange: { 500: '#ffb58a', 600: '#ffa478' },
  Yellow: { 100: '#ffdf9c', 600: '#ffd06b' },
  Blue: { 500: '#66deff', 600: '#4fd9ff' },
  Cyan: { 100: '#adfff4', 600: '#14FFDE', 700: '#2dced0' },
  Green: { 600: '#c6ff90', 700: '#a9ff78' },
  Red: { 100: '#ff94a6', 500: '#e17e85', 600: '#ff7272' },
  Magenta: { 500: '#a7a7ff', 600: '#a6a6ff' },
  Gray: {
    100: '#ffffff',
    200: '#f8f8f8',
    400: '#556570',
    500: '#313744',
    600: '#23252e',
    700: '#1c1e25',
    900: '#000000',
  },
};

function withAlpha(hex: string, alpha: number) {
  return `${hex}${Math.round(alpha * 255)
    .toString(16)
    .padStart(2, '0')}`;
}

export const Foregrounds = {
  Orange: Palette.Orange['600'],
  Yellow: Palette.Yellow['600'],
  Blue: Palette.Blue['600'],
  Cyan: Palette.Cyan['600'],
  Green: Palette.Green['600'],
  Neutral: Palette.Gray['100'],
  Magenta: Palette.Magenta['600'],
  Muted: withAlpha(Palette.Gray['100'], 0.3),
  Red: Palette.Red['600'],

  Support: withAlpha(Palette.Gray['100'], 0.6),
  OnPrimary: Palette.Gray['900'],
  OnSecondary: Palette.Gray['100'],
  OnDanger: Palette.Gray['900'],
  OnInfo: Palette.Gray['900'],
  OnWarning: Palette.Gray['900'],
};

export const UIColors = {
  Fallback: Palette.Red['500'],
  Background: Palette.Gray['600'],
  BackgroundElevated: Palette.Gray['700'],
  BackgroundFocus: withAlpha(Palette.Gray['900'], 0.3),
  BackgroundHover: withAlpha(Palette.Gray['100'], 0.1),

  Danger: Palette.Red['600'],
  Success: Palette.Green['600'],
  Info: Palette.Blue['600'],
  Warning: Palette.Yellow['600'],

  Border: Palette.Gray['700'],
  Transparent: '#00000000',
  Foreground: Palette.Gray['100'],

  Primary: Palette.Orange['600'],
  PrimaryHover: Palette.Orange['500'],

  Link: Palette.Orange['600'],
  LinkHover: Palette.Orange['500'],

  Secondary: Palette.Gray['500'],
  SecondaryHover: Palette.Gray['400'],
  SecondaryForeground: Palette.Gray['100'],
};

export const ShellColors = {
  White: Palette.Gray['200'],
  BrightWhite: Palette.Gray['100'],

  Black: Palette.Gray['400'],
  BrightBlack: Palette.Gray['500'],

  Red: Palette.Red['600'],
  BrightRed: Palette.Red['500'],

  Yellow: Palette.Orange['600'],
  BrightYellow: Palette.Yellow['600'],

  Blue: Palette.Blue['600'],
  BrightBlue: Palette.Blue['500'],

  Cyan: Palette.Cyan['700'],
  BrightCyan: Palette.Cyan['600'],

  Green: Palette.Green['700'],
  BrightGreen: Palette.Green['600'],

  Magenta: Palette.Magenta['600'],
  BrightMagenta: Palette.Magenta['500'],
};
