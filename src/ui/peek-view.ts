import type { UIColor } from './UIColor.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const peekView: UIColor = {
  'peekView.border': UIColors.Border,
  'peekViewEditor.background': UIColors.BackgroundFocus,
  'peekViewEditorGutter.background': UIColors.BackgroundFocus,
  'peekViewEditor.matchHighlightBackground': UIColors.SelectionFound,
  'peekViewEditor.matchHighlightBorder': UIColors.Transparent,
  'peekViewResult.background': UIColors.BackgroundFocus,
  'peekViewResult.fileForeground': false,
  'peekViewResult.lineForeground': Foregrounds.Support,
  'peekViewResult.matchHighlightBackground': UIColors.SelectionFound,
  'peekViewResult.selectionBackground': UIColors.BackgroundFocus,
  'peekViewResult.selectionForeground': UIColors.Foreground,
  'peekViewTitle.background': UIColors.BackgroundFocus,
  'peekViewTitleDescription.foreground': Foregrounds.Muted,
  'peekViewTitleLabel.foreground': Foregrounds.Support,
  'peekViewEditorStickyScroll.background': UIColors.BackgroundElevated,
  'peekViewEditorStickyScrollGutter.background': UIColors.BackgroundElevated,
};
