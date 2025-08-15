import type { UIColor } from '../types.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const debug: UIColor = {
  'debugToolBar.background': UIColors.BackgroundElevated, // Debug toolbar background color.
  'debugToolBar.border': UIColors.Border, // Debug toolbar border color.
  'editor.stackFrameHighlightBackground': UIColors.BackgroundWarning, // Background color of the top stack frame highlight in the editor.
  // 'editor.focusedStackFrameHighlightBackground': UIColors.Success, // Background color of the focused stack frame highlight in the editor.
  // 'editor.inlineValuesForeground': '', // Color for the debug inline value text.
  // 'editor.inlineValuesBackground': '', // Color for the debug inline value background.
  // 'debugView.exceptionLabelForeground': '', // Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception.
  // 'debugView.exceptionLabelBackground': '', // Background color for a label shown in the CALL STACK view when the debugger breaks on an exception.
  'debugView.stateLabelForeground': Foregrounds.Muted, // Foreground color for a label in the CALL STACK view showing the current session's or thread's state.
  'debugView.stateLabelBackground': UIColors.Transparent, // Background color for a label in the CALL STACK view showing the current session's or thread's state.
  'debugView.valueChangedHighlight': UIColors.SelectionFound, // Color used to highlight value changes in the debug views (such as in the Variables view).
  'debugTokenExpression.name': UIColors.Foreground, // Foreground color for the token names shown in debug views (such as in the Variables or Watch view).
  'debugTokenExpression.value': Foregrounds.Muted, // Foreground color for the token values shown in debug views.
  'debugTokenExpression.string': Foregrounds.Green, // Foreground color for strings in debug views.
  'debugTokenExpression.boolean': Foregrounds.Blue, // Foreground color for booleans in debug views.
  'debugTokenExpression.number': Foregrounds.Magenta, // Foreground color for numbers in debug views.
  'debugTokenExpression.error': Foregrounds.Red, // Foreground color for expression errors in debug views.
  'debugTokenExpression.type': Foregrounds.Muted, // Foreground color for the token types shown in the debug views (ie. the Variables or Watch view).
};
