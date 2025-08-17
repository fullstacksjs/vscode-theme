import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

import { Foregrounds } from '../colors.ts';

export const debug = (colors: UIColors): VSCodeTokens => ({
  'debugToolBar.background': colors.background.elevated,
  'debugToolBar.border': colors.border.default,
  'editor.stackFrameHighlightBackground': colors.warning.background,
  'editor.focusedStackFrameHighlightBackground': false,
  'editor.inlineValuesForeground': false,
  'editor.inlineValuesBackground': false,
  'debugView.exceptionLabelForeground': false,
  'debugView.exceptionLabelBackground': false,
  'debugView.stateLabelForeground': colors.foreground.muted,
  'debugView.stateLabelBackground': colors.transparent,
  'debugView.valueChangedHighlight': colors.selection.found,
  'debugTokenExpression.name': colors.foreground.default,
  'debugTokenExpression.value': colors.foreground.muted,
  'debugTokenExpression.string': Foregrounds.Green,
  'debugTokenExpression.boolean': Foregrounds.Blue,
  'debugTokenExpression.number': Foregrounds.Magenta,
  'debugTokenExpression.error': Foregrounds.Red,
  'debugTokenExpression.type': colors.foreground.muted,

  'debugIcon.breakpointForeground': colors.danger.foreground,
  'debugIcon.breakpointDisabledForeground': colors.danger.focus,
  'debugIcon.breakpointUnverifiedForeground': colors.warning.focus,
  'debugIcon.breakpointCurrentStackframeForeground': colors.warning.foreground,
  'debugIcon.breakpointStackframeForeground': colors.unknown,
  'debugIcon.startForeground': colors.success.foreground,
  'debugIcon.pauseForeground': colors.warning.foreground,
  'debugIcon.stopForeground': colors.danger.foreground,
  'debugIcon.disconnectForeground': colors.danger.foreground,
  'debugIcon.restartForeground': colors.warning.foreground,
  'debugIcon.stepOverForeground': colors.foreground.support,
  'debugIcon.stepIntoForeground': colors.foreground.support,
  'debugIcon.stepOutForeground': colors.foreground.support,
  'debugIcon.continueForeground': colors.success.foreground,
  'debugIcon.stepBackForeground': colors.warning.foreground,

  'debugConsole.infoForeground': colors.foreground.muted,
  'debugConsole.warningForeground': colors.warning.foreground,
  'debugConsole.errorForeground': colors.danger.foreground,
  'debugConsole.sourceForeground': colors.link.default,
  'debugConsoleInputIcon.foreground': colors.unknown,
});
