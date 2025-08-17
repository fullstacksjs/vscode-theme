import type { Palette, UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

import { ShellColors } from '../colors.ts';

export const terminal = (colors: UIColors, palette: Palette): VSCodeTokens => ({
  'terminal.background': colors.background.default,
  'terminal.foreground': colors.foreground.default,
  'terminal.selectionBackground': colors.background.focus,
  'terminalCursor.background': colors.background.default,
  'terminalCursor.foreground': palette.yellow,
  'terminal.border': colors.border.default,

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
  'terminal.inactiveSelectionBackground': colors.selection.inactive,
  'terminal.findMatchBackground': false,
  'terminal.findMatchBorder': false,
  'terminal.findMatchHighlightBackground': false,
  'terminal.findMatchHighlightBorder': false,
  'terminal.hoverHighlightBackground': colors.selection.default,
  'terminal.dropBackground': colors.background.overlay,
  'terminal.tab.activeBorder': colors.primary.foreground,
  'terminalCommandDecoration.defaultBackground': colors.unknown,
  'terminalCommandDecoration.successBackground': colors.unknown,
  'terminalCommandDecoration.errorBackground': colors.unknown,
  'terminalOverviewRuler.cursorForeground': colors.unknown,
  'terminalOverviewRuler.findMatchForeground': colors.selection.found,
  'terminalStickyScroll.background': false,
  'terminalStickyScroll.border': false,
  'terminalStickyScrollHover.background': false,
  'terminal.initialHintForeground': false,
  'terminalOverviewRuler.border': false,
  'terminalCommandGuide.foreground': colors.border.default,
  'terminalSymbolIcon.aliasForeground': colors.unknown,
  'terminalSymbolIcon.flagForeground': colors.unknown,
  'terminalSymbolIcon.optionForeground': colors.unknown,
  'terminalSymbolIcon.optionValueForeground': colors.unknown,
  'terminalSymbolIcon.methodForeground': colors.unknown,
  'terminalSymbolIcon.argumentForeground': colors.unknown,
  'terminalSymbolIcon.inlineSuggestionForeground': colors.unknown,
  'terminalSymbolIcon.fileForeground': colors.unknown,
  'terminalSymbolIcon.folderForeground': colors.unknown,
  'terminalSymbolIcon.symbolicLinkFileForeground': colors.unknown,
  'terminalSymbolIcon.symbolicLinkFolderForeground': colors.unknown,
});
