import type { ColorConfig } from './ui/VSCodeToken.ts';

import { withAlpha } from './utils.ts';

export interface Palette {
  orange: string;
  yellow: string;
  blue: string;
  cyan: string;
  green: string;
  red: string;
  magenta: string;
}

export interface UIColors {
  background: {
    default: ColorConfig;
    elevated: ColorConfig;
    focus: ColorConfig;
    hover: ColorConfig;
    overlay: ColorConfig;
  };

  foreground: {
    default: ColorConfig;
    muted: ColorConfig;
    support: ColorConfig;
  };

  selection: {
    default: ColorConfig;
    focus: ColorConfig;
    inactive: ColorConfig;
    found: ColorConfig;
  };

  border: {
    default: ColorConfig;
    muted: ColorConfig;
    invert: ColorConfig;
  };

  rainbow: {
    white: ColorConfig;
    yellow: ColorConfig;
    red: ColorConfig;
    cyan: ColorConfig;
  };

  success: {
    foreground: ColorConfig;
    background: ColorConfig;
    onForeground: ColorConfig;
    focus: ColorConfig;
  };

  link: {
    default: ColorConfig;
    hover: ColorConfig;
  };

  info: {
    foreground: ColorConfig;
    background: ColorConfig;
    onForeground: ColorConfig;
    focus: ColorConfig;
  };

  warning: {
    foreground: ColorConfig;
    background: ColorConfig;
    onForeground: ColorConfig;
    focus: ColorConfig;
  };

  danger: {
    foreground: ColorConfig;
    background: ColorConfig;
    onForeground: ColorConfig;
    focus: ColorConfig;
  };

  primary: {
    foreground: ColorConfig;
    hover: ColorConfig;
    onForeground: ColorConfig;
  };

  secondary: {
    foreground: ColorConfig;
    hover: ColorConfig;
    onForeground: ColorConfig;
  };

  tertiary: {
    foreground: ColorConfig;
    background: ColorConfig;
    onForeground: ColorConfig;
    focus: ColorConfig;
  };

  transparent: ColorConfig;
  unknown: ColorConfig;
}

export const defaultPalette: Palette = {
  orange: '#ffa478',
  yellow: '#ffd257',
  blue: '#66deff',
  cyan: '#14FFDE',
  green: '#c6ff90',
  red: '#e17e85',
  magenta: '#a7a7ff',
};

const white = '#ffffff';
const black = '#000000';
const Gray = {
  400: '#556570',
  500: '#313744',
  600: '#23252e',
};

export const Foregrounds = {
  Orange: defaultPalette.orange,
  Yellow: defaultPalette.yellow,
  Blue: '#4fd9ff',
  Cyan: defaultPalette.cyan,
  Green: defaultPalette.green,
  Neutral: white,
  Magenta: '#c5b5ff',
  Muted: withAlpha(white, 0.3),
  Red: '#ff7272',
};

export const defaultColors: UIColors = {
  unknown: 'unknown',
  transparent: '#00000000',
  background: {
    default: Gray['600'],
    elevated: '#1c1e25',
    focus: withAlpha(black, 0.3),
    overlay: withAlpha(black, 0.15),
    hover: withAlpha(white, 0.1),
  },
  selection: {
    default: withAlpha(white, 0.1),
    focus: withAlpha(white, 0.2),
    inactive: withAlpha(black, 0.25),
    found: withAlpha('#4fd9ff', 0.1),
  },
  danger: {
    foreground: '#ff7272',
    background: withAlpha('#ff7272', 0.2),
    onForeground: Gray['600'],
    focus: withAlpha('#ff7272', 0.4),
  },
  success: {
    foreground: defaultPalette.green,
    background: withAlpha(defaultPalette.green, 0.2),
    focus: withAlpha(defaultPalette.green, 0.4),
    onForeground: Gray['600'],
  },
  info: {
    foreground: '#4fd9ff',
    background: withAlpha('#4fd9ff', 0.2),
    focus: withAlpha('#4fd9ff', 0.4),
    onForeground: Gray['600'],
  },
  warning: {
    foreground: defaultPalette.yellow,
    background: withAlpha(defaultPalette.yellow, 0.2),
    focus: withAlpha(defaultPalette.yellow, 0.4),
    onForeground: Gray['600'],
  },
  tertiary: {
    foreground: defaultPalette.magenta,
    background: withAlpha('#c5b5ff', 0.2),
    focus: withAlpha('#c5b5ff', 0.4),
    onForeground: Gray['600'],
  },
  border: {
    default: '#121420',
    muted: withAlpha(white, 0.2),
    invert: white,
  },
  foreground: {
    default: white,
    muted: withAlpha(white, 0.3),
    support: withAlpha(white, 0.6),
  },
  primary: {
    foreground: defaultPalette.orange,
    hover: '#ffb58a',
    onForeground: Gray['600'],
  },
  secondary: {
    foreground: Gray['500'],
    hover: Gray['400'],
    onForeground: white,
  },
  link: {
    default: defaultPalette.magenta,
    hover: '#c5b5ff',
  },
  rainbow: {
    white: '#f8f8f8',
    yellow: '#ffdf9c',
    red: '#ff94a6',
    cyan: '#adfff4',
  },
};

export const ShellColors = {
  White: '#f8f8f8',
  BrightWhite: white,

  Black: Gray['400'],
  BrightBlack: Gray['500'],

  Red: '#ff7272',
  BrightRed: defaultPalette.red,

  Yellow: defaultPalette.orange,
  BrightYellow: defaultPalette.yellow,

  Blue: '#4fd9ff',
  BrightBlue: defaultPalette.blue,

  Cyan: '#2dced0',
  BrightCyan: defaultPalette.cyan,

  Green: '#a9ff78',
  BrightGreen: defaultPalette.green,

  Magenta: '#c5b5ff',
  BrightMagenta: defaultPalette.magenta,
};
