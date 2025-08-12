import type { UIColor } from '../types.ts';

import { Foregrounds, ShellColors, UIColors } from '../colors.ts';

export const terminal: UIColor = {
  'terminal.background': UIColors.Background,
  'terminal.foreground': Foregrounds.Neutral,
  'terminal.selectionBackground': UIColors.BackgroundFocus,
  'terminalCursor.background': UIColors.Background,
  'terminalCursor.foreground': Foregrounds.Yellow,
  'terminal.border': UIColors.Border,

  'terminal.ansiBlack': ShellColors.Black,
  'terminal.ansiBrightBlack': ShellColors.BrightBlack,

  'terminal.ansiBlue': ShellColors.Blue,
  'terminal.ansiBrightBlue': ShellColors.BrightBlue,

  'terminal.ansiCyan': ShellColors.Cyan,
  'terminal.ansiBrightCyan': ShellColors.BrightCyan,

  'terminal.ansiGreen': ShellColors.Green,
  'terminal.ansiBrightGreen': ShellColors.BrightGreen,

  'terminal.ansiMagenta': ShellColors.Magenta,
  'terminal.ansiBrightMagenta': ShellColors.BrightMagenta,

  'terminal.ansiRed': ShellColors.Red,
  'terminal.ansiBrightRed': ShellColors.BrightRed,

  'terminal.ansiWhite': ShellColors.White,
  'terminal.ansiBrightWhite': ShellColors.BrightWhite,

  'terminal.ansiYellow': ShellColors.Yellow,
  'terminal.ansiBrightYellow': ShellColors.BrightYellow,
};
