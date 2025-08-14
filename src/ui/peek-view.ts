import type { UIColor } from '../types.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const peekView = {
  'peekView.border': UIColors.Border, // Color of the peek view borders and arrow.
  'peekViewEditor.background': UIColors.BackgroundFocus, // Background color of the peek view editor.
  'peekViewEditorGutter.background': UIColors.BackgroundFocus, // Background color of the gutter in the peek view editor.
  'peekViewEditor.matchHighlightBackground': UIColors.SelectionFound, // Match highlight color in the peek view editor.
  'peekViewEditor.matchHighlightBorder': UIColors.Transparent, // Match highlight border color in the peek view editor.
  'peekViewResult.background': UIColors.BackgroundFocus, // Background color of the peek view result list.
  // 'peekViewResult.fileForeground': '', // Foreground color for file nodes in the peek view result list.
  'peekViewResult.lineForeground': Foregrounds.Support, // Foreground color for line nodes in the peek view result list.
  'peekViewResult.matchHighlightBackground': UIColors.SelectionFound, // Match highlight color in the peek view result list.
  'peekViewResult.selectionBackground': UIColors.BackgroundFocus, // Background color of the selected entry in the peek view result list.
  'peekViewResult.selectionForeground': UIColors.Foreground, // Foreground color of the selected entry in the peek view result list.
  'peekViewTitle.background': UIColors.BackgroundFocus, // Background color of the peek view title area.
  'peekViewTitleDescription.foreground': Foregrounds.Muted, // Color of the peek view title info.
  'peekViewTitleLabel.foreground': Foregrounds.Support, // Color of the peek view title.
  'peekViewEditorStickyScroll.background': UIColors.BackgroundElevated, // Background color of sticky scroll in the peek view editor.
  'peekViewEditorStickyScrollGutter.background': UIColors.BackgroundElevated, // Background color of the gutter part of sticky scroll in the peek view editor.
};
