import type { UIColor } from './UIColor.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const list: UIColor = {
  'list.activeSelectionBackground': UIColors.BackgroundFocus,
  'list.activeSelectionForeground': UIColors.Primary,
  'list.activeSelectionIconForeground': UIColors.Primary,

  'list.inactiveSelectionBackground': UIColors.BackgroundFocus,
  'list.inactiveSelectionForeground': false,
  'list.inactiveSelectionIconForeground': false,

  'list.dropBackground': UIColors.Transparent,
  'list.focusBackground': UIColors.BackgroundFocus,
  'list.focusForeground': false,

  'list.highlightForeground': UIColors.PrimaryHover,
  'list.focusHighlightForeground': UIColors.PrimaryHover,

  'list.hoverBackground': UIColors.Transparent,
  'list.hoverForeground': UIColors.PrimaryHover,

  'list.focusOutline': UIColors.Primary,
  'list.focusAndSelectionOutline': UIColors.Primary,
  'list.inactiveFocusOutline': UIColors.Transparent,

  'list.inactiveFocusBackground': UIColors.BackgroundFocus,
  'list.invalidItemForeground': UIColors.Danger,

  'list.errorForeground': UIColors.Danger,
  'list.warningForeground': UIColors.Warning,

  'listFilterWidget.background': UIColors.Background,
  'listFilterWidget.outline': UIColors.Transparent,
  'listFilterWidget.noMatchesOutline': UIColors.Transparent,
  'listFilterWidget.shadow': UIColors.Transparent,

  'list.filterMatchBackground': UIColors.BackgroundHover,
  'list.filterMatchBorder': UIColors.Transparent,

  'list.deemphasizedForeground': Foregrounds.Muted,
  'list.dropBetweenBackground': UIColors.Primary,

  'tree.indentGuidesStroke': UIColors.Border,
  'tree.inactiveIndentGuidesStroke': UIColors.BorderMuted,

  'tree.tableColumnsBorder': UIColors.Border,
  'tree.tableOddRowsBackground': UIColors.BackgroundFocus,
};
