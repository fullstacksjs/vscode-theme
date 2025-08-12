import { Foregrounds, UIColors } from '../colors.ts';

export const list = {
  'list.activeSelectionBackground': UIColors.BackgroundFocus, // List/Tree background color for the selected item when the list/tree is active.
  'list.activeSelectionForeground': UIColors.Primary, // List/Tree foreground color for the selected item when the list/tree is active.
  'list.activeSelectionIconForeground': UIColors.Primary, // List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.

  'list.inactiveSelectionBackground': UIColors.BackgroundFocus, // List/Tree background color for the selected item when the list/tree is inactive.
  // 'list.inactiveSelectionForeground': UIColors.Primary, // List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
  // 'list.inactiveSelectionIconForeground': UIColors.Transparent, // List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.

  'list.dropBackground': UIColors.Transparent, // List/Tree drag and drop background when moving items around using the mouse.
  'list.focusBackground': UIColors.BackgroundFocus, // List/Tree background color for the focused item when the list/tree is active.
  // 'list.focusForeground': UIColors.Transparent, // List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.

  'list.highlightForeground': UIColors.PrimaryHover, // List/Tree foreground color of the match highlights when searching inside the list/tree.
  'list.focusHighlightForeground': UIColors.PrimaryHover, // List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.

  'list.hoverBackground': UIColors.Transparent, // List/Tree background when hovering over items using the mouse.
  'list.hoverForeground': UIColors.PrimaryHover, // List/Tree foreground when hovering over items using the mouse.

  'list.focusOutline': UIColors.Primary, // List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
  'list.focusAndSelectionOutline': UIColors.Primary, // List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not.
  'list.inactiveFocusOutline': UIColors.Transparent, // List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.

  'list.inactiveFocusBackground': UIColors.BackgroundFocus, // List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
  'list.invalidItemForeground': UIColors.Danger, // List/Tree foreground color for invalid items, for example an unresolved root in explorer.

  'list.errorForeground': UIColors.Danger, // Foreground color of list items containing errors.
  'list.warningForeground': UIColors.Warning, // Foreground color of list items containing warnings.

  'listFilterWidget.background': UIColors.Background, // List/Tree Filter background color of typed text when searching inside the list/tree.
  'listFilterWidget.outline': UIColors.Transparent, // List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
  'listFilterWidget.noMatchesOutline': UIColors.Transparent, // List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
  'listFilterWidget.shadow': UIColors.Transparent, // Shadow color of the type filter widget in lists and tree.

  'list.filterMatchBackground': UIColors.BackgroundHover, // Background color of the filtered matches in lists and trees.
  'list.filterMatchBorder': UIColors.Transparent, // Border color of the filtered matches in lists and trees.

  'list.deemphasizedForeground': Foregrounds.Muted, // List/Tree foreground color for items that are deemphasized.
  'list.dropBetweenBackground': UIColors.Primary, // List/Tree drag and drop border color when moving items between items when using the mouse.

  'tree.indentGuidesStroke': UIColors.Border, // Tree Widget's stroke color for indent guides.
  'tree.inactiveIndentGuidesStroke': UIColors.BorderMuted, // Tree stroke color for the indentation guides that are not active.

  'tree.tableColumnsBorder': UIColors.Border, // Tree stroke color for the indentation guides.
  'tree.tableOddRowsBackground': UIColors.BackgroundFocus, // Background color for odd table rows.
};
