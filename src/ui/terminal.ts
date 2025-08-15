import type { UIColor } from './UIColor.ts';

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

  'terminal.selectionForeground': false,
  'terminal.inactiveSelectionBackground': UIColors.SelectionInactive,
  'terminal.findMatchBackground': false,
  'terminal.findMatchBorder': false,
  'terminal.findMatchHighlightBackground': false,
  'terminal.findMatchHighlightBorder': false,
  'terminal.hoverHighlightBackground': UIColors.Selection,
  'terminal.dropBackground': UIColors.BackgroundOverlay,
  'terminal.tab.activeBorder': UIColors.Primary,
  'terminalCommandDecoration.defaultBackground': UIColors.Unknown,
  'terminalCommandDecoration.successBackground': UIColors.Unknown,
  'terminalCommandDecoration.errorBackground': UIColors.Unknown,
  'terminalOverviewRuler.cursorForeground': UIColors.Unknown,
  'terminalOverviewRuler.findMatchForeground': UIColors.SelectionFound,
  'terminalStickyScroll.background': false,
  'terminalStickyScroll.border': false,
  'terminalStickyScrollHover.background': false,
  'terminal.initialHintForeground': false,
  'terminalOverviewRuler.border': false,
  'terminalCommandGuide.foreground': UIColors.Border,
  'terminalSymbolIcon.aliasForeground': UIColors.Unknown,
  'terminalSymbolIcon.flagForeground': UIColors.Unknown,
  'terminalSymbolIcon.optionForeground': UIColors.Unknown,
  'terminalSymbolIcon.optionValueForeground': UIColors.Unknown,
  'terminalSymbolIcon.methodForeground': UIColors.Unknown,
  'terminalSymbolIcon.argumentForeground': UIColors.Unknown,
  'terminalSymbolIcon.inlineSuggestionForeground': UIColors.Unknown,
  'terminalSymbolIcon.fileForeground': UIColors.Unknown,
  'terminalSymbolIcon.folderForeground': UIColors.Unknown,
  'terminalSymbolIcon.symbolicLinkFileForeground': UIColors.Unknown,
  'terminalSymbolIcon.symbolicLinkFolderForeground': UIColors.Unknown,
};
