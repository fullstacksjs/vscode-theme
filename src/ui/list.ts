import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const list = (colors: UIColors): VSCodeTokens => ({
  'list.activeSelectionBackground': colors.background.focus,
  'list.activeSelectionForeground': colors.primary.foreground,
  'list.activeSelectionIconForeground': colors.primary.foreground,

  'list.inactiveSelectionBackground': colors.background.focus,
  'list.inactiveSelectionForeground': false,
  'list.inactiveSelectionIconForeground': false,

  'list.dropBackground': colors.transparent,
  'list.focusBackground': colors.background.focus,
  'list.focusForeground': false,

  'list.highlightForeground': colors.primary.hover,
  'list.focusHighlightForeground': colors.primary.hover,

  'list.hoverBackground': colors.transparent,
  'list.hoverForeground': colors.primary.hover,

  'list.focusOutline': colors.primary.foreground,
  'list.focusAndSelectionOutline': colors.primary.foreground,
  'list.inactiveFocusOutline': colors.transparent,

  'list.inactiveFocusBackground': colors.background.focus,
  'list.invalidItemForeground': colors.danger.foreground,

  'list.errorForeground': colors.danger.foreground,
  'list.warningForeground': colors.warning.foreground,

  'listFilterWidget.background': colors.background.default,
  'listFilterWidget.outline': colors.transparent,
  'listFilterWidget.noMatchesOutline': colors.transparent,
  'listFilterWidget.shadow': colors.transparent,

  'list.filterMatchBackground': colors.background.hover,
  'list.filterMatchBorder': colors.transparent,

  'list.deemphasizedForeground': colors.foreground.muted,
  'list.dropBetweenBackground': colors.primary.foreground,

  'tree.indentGuidesStroke': colors.border.default,
  'tree.inactiveIndentGuidesStroke': colors.border.muted,

  'tree.tableColumnsBorder': colors.border.default,
  'tree.tableOddRowsBackground': colors.background.focus,
});
