import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const peekView = (colors: UIColors): VSCodeTokens => ({
  'peekView.border': colors.border.default,
  'peekViewEditor.background': colors.background.focus,
  'peekViewEditorGutter.background': colors.background.focus,
  'peekViewEditor.matchHighlightBackground': colors.selection.found,
  'peekViewEditor.matchHighlightBorder': colors.transparent,
  'peekViewResult.background': colors.background.focus,
  'peekViewResult.fileForeground': false,
  'peekViewResult.lineForeground': colors.foreground.support,
  'peekViewResult.matchHighlightBackground': colors.selection.found,
  'peekViewResult.selectionBackground': colors.background.focus,
  'peekViewResult.selectionForeground': colors.foreground.default,
  'peekViewTitle.background': colors.background.focus,
  'peekViewTitleDescription.foreground': colors.foreground.muted,
  'peekViewTitleLabel.foreground': colors.foreground.support,
  'peekViewEditorStickyScroll.background': colors.background.elevated,
  'peekViewEditorStickyScrollGutter.background': colors.background.elevated,
});
