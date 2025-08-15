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

  // 'terminal.selectionForeground': Foregrounds.Red, // The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied.
  'terminal.inactiveSelectionBackground': UIColors.SelectionInactive, // The selection background color of the terminal when it does not have focus.
  // 'terminal.findMatchBackground': '', // Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content.
  // 'terminal.findMatchBorder': '', // Border color of the current search match in the terminal.
  // 'terminal.findMatchHighlightBackground': '', // Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content.
  // 'terminal.findMatchHighlightBorder': '', // Border color of the other search matches in the terminal.
  'terminal.hoverHighlightBackground': UIColors.Selection, // Color of the highlight when hovering a link in the terminal.
  'terminal.dropBackground': UIColors.BackgroundOverlay, // The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through.
  'terminal.tab.activeBorder': UIColors.Primary, // Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder.
  // 'terminalCommandDecoration.defaultBackground': '', // TODO: The default terminal command decoration background color.
  // 'terminalCommandDecoration.successBackground': '', // TODO: The terminal command decoration background color for successful commands.
  // 'terminalCommandDecoration.errorBackground': '', // TODO: The terminal command decoration background color for error commands.
  // 'terminalOverviewRuler.cursorForeground': '', // TODO: The overview ruler cursor color.
  'terminalOverviewRuler.findMatchForeground': UIColors.SelectionFound, // Overview ruler marker color for find matches in the terminal.
  // 'terminalStickyScroll.background': '', // The background color of the sticky scroll overlay in the terminal.
  // 'terminalStickyScroll.border': '', // The border of the sticky scroll overlay in the terminal.
  // 'terminalStickyScrollHover.background': '', // The background color of the sticky scroll overlay in the terminal when hovered.
  // 'terminal.initialHintForeground': '', // Foreground color of the terminal initial hint.
  // 'terminalOverviewRuler.border': '', // The overview ruler left-side border color.
  'terminalCommandGuide.foreground': UIColors.Border, // The foreground color of the terminal command guide that appears to the left of a command and its output on hover.
  // 'terminalSymbolIcon.aliasForeground': '', // TODO: The foreground color for an alias icon. These icons will appear in the terminal suggest widget
  // 'terminalSymbolIcon.flagForeground': '', // TODO: The foreground color for an flag icon. These icons will appear in the terminal suggest widget
  // 'terminalSymbolIcon.optionForeground': '', // TODO: The foreground color for an option icon. These icons will appear in the terminal suggest widget.
  // 'terminalSymbolIcon.optionValueForeground': '', // TODO: The foreground color for an enum member icon. These icons will appear in the terminal suggest widget.
  // 'terminalSymbolIcon.methodForeground': '', // TODO: The foreground color for a method icon. These icons will appear in the terminal suggest widget.
  // 'terminalSymbolIcon.argumentForeground': '', // TODO: The foreground color for an argument icon. These icons will appear in the terminal suggest widget.
  // 'terminalSymbolIcon.inlineSuggestionForeground': '', // TODO: The foreground color for an inline suggestion icon. These icons will appear in the terminal suggest widget.
  // 'terminalSymbolIcon.fileForeground': '', // TODO: The foreground color for a file icon. These icons will appear in the terminal suggest widget.
  // 'terminalSymbolIcon.folderForeground': '', // TODO: The foreground color for a folder icon. These icons will appear in the terminal suggest widget.
  // 'terminalSymbolIcon.symbolicLinkFileForeground': '', // TODO: The foreground color for a symbolic link file icon. These icons will appear in the terminal suggest widget.
  // 'terminalSymbolIcon.symbolicLinkFolderForeground': '', // TODO: The foreground color for a symbolic link folder icon. These icons will appear in the terminal suggest widget.
};
