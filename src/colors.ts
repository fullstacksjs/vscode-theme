const Palette = {
  Orange: { 600: '#ffa478' },
  Yellow: { 600: '#ffd06b' },
  Blue: { 500: '#66deff', 600: '#4fd9ff' },
  Cyan: { 600: '#14FFDE', 700: '#2dced0' },
  Green: { 600: '#c6ff90', 700: '#a9ff78' },
  White: { 600: '#f8f8f8', 900: '#ffffff' },
  Red: { 500: '#e17e85', 600: '#ff7272' },
  Magenta: { 500: '#a7a7ff', 600: '#a6a6ff' },
  Black: {
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
  Neutral: Palette.White['900'],
  Magenta: Palette.Magenta['600'],
  Muted: withAlpha(Palette.White['900'], 0.3),
  Red: Palette.Red['600'],
};

export const UIColors = {
  Background: Palette.Black['600'],
  FocusBackground: withAlpha(Palette.Black['900'], 0.3),
  Border: Palette.Black['700'],
  Transparent: '#00000000',
  Foreground: Palette.White['900'],
};

export const ShellColors = {
  White: Palette.White['600'],
  BrightWhite: Palette.White['900'],

  Black: Palette.Black['400'],
  BrightBlack: Palette.Black['500'],

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
