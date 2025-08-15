import type { UIColor } from './UIColor.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const debug: UIColor = {
  'debugToolBar.background': UIColors.BackgroundElevated,
  'debugToolBar.border': UIColors.Border,
  'editor.stackFrameHighlightBackground': UIColors.BackgroundWarning,
  'editor.focusedStackFrameHighlightBackground': false,
  'editor.inlineValuesForeground': false,
  'editor.inlineValuesBackground': false,
  'debugView.exceptionLabelForeground': false,
  'debugView.exceptionLabelBackground': false,
  'debugView.stateLabelForeground': Foregrounds.Muted,
  'debugView.stateLabelBackground': UIColors.Transparent,
  'debugView.valueChangedHighlight': UIColors.SelectionFound,
  'debugTokenExpression.name': UIColors.Foreground,
  'debugTokenExpression.value': Foregrounds.Muted,
  'debugTokenExpression.string': Foregrounds.Green,
  'debugTokenExpression.boolean': Foregrounds.Blue,
  'debugTokenExpression.number': Foregrounds.Magenta,
  'debugTokenExpression.error': Foregrounds.Red,
  'debugTokenExpression.type': Foregrounds.Muted,
};
