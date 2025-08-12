import type { UIColor } from '../types.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const tabs: UIColor = {
  'editorGroup.border': UIColors.Border, // Color to separate multiple editor groups from each other.
  'editorGroup.dropBackground': UIColors.BackgroundOverlay, // Background color when dragging editors around.
  'editorGroupHeader.noTabsBackground': UIColors.Transparent, // Background color of the editor group title header when using single Tab (set "workbench.editor.showTabs": "single").
  'editorGroupHeader.tabsBackground': UIColors.Transparent, // Background color of the Tabs container.
  'editorGroupHeader.tabsBorder': UIColors.Border, // Border color below the editor tabs control when tabs are enabled.
  'editorGroupHeader.border': UIColors.Border, // Border color between editor group header and editor (below breadcrumbs if enabled).
  'editorGroup.emptyBackground': UIColors.Transparent, // Background color of an empty editor group.
  'editorGroup.focusedEmptyBorder': UIColors.Border, // Border color of an empty editor group that is focused.
  'editorGroup.dropIntoPromptForeground': UIColors.Primary, // Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
  'editorGroup.dropIntoPromptBackground': UIColors.BackgroundElevated, // Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
  'editorGroup.dropIntoPromptBorder': UIColors.Transparent, // Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
  'tab.activeBackground': UIColors.BackgroundFocus, // Active Tab background color in an active group.
  'tab.unfocusedActiveBackground': UIColors.BackgroundOverlay, // Active Tab background color in an inactive editor group.
  'tab.activeForeground': UIColors.Foreground, // Active Tab foreground color in an active group.
  'tab.border': UIColors.Border, // Border to separate Tabs from each other.
  'tab.activeBorder': UIColors.Border, // Bottom border for the active tab.
  'tab.selectedBorderTop': UIColors.Border, // Border to the top of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
  // 'tab.selectedBackground': UIColors.Transparent, // Background of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
  // 'tab.selectedForeground': UIColors.Transparent, // Foreground of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
  'tab.dragAndDropBorder': UIColors.Primary, // Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
  'tab.unfocusedActiveBorder': UIColors.Border, // Bottom border for the active tab in an inactive editor group.
  'tab.activeBorderTop': UIColors.Border, // Top border for the active tab.
  'tab.unfocusedActiveBorderTop': UIColors.Border, // Top border for the active tab in an inactive editor group
  // 'tab.lastPinnedBorder': UIColors.Transparent, // Border on the right of the last pinned editor to separate from unpinned editors.
  'tab.inactiveBackground': UIColors.Transparent, // Inactive Tab background color.
  'tab.unfocusedInactiveBackground': UIColors.Transparent, // Inactive Tab background color in an unfocused group
  'tab.inactiveForeground': Foregrounds.Support, // Inactive Tab foreground color in an active group.
  'tab.unfocusedActiveForeground': Foregrounds.Support, // Active tab foreground color in an inactive editor group.
  'tab.unfocusedInactiveForeground': Foregrounds.Support, // Inactive tab foreground color in an inactive editor group.
  'tab.hoverBackground': UIColors.BackgroundHover, // Tab background color when hovering
  'tab.unfocusedHoverBackground': UIColors.BackgroundHover, // Tab background color in an unfocused group when hovering
  // 'tab.hoverForeground': UIColors.Transparent, // Tab foreground color when hovering
  // 'tab.unfocusedHoverForeground': UIColors.Transparent, // Tab foreground color in an unfocused group when hovering
  // 'tab.hoverBorder': UIColors.Transparent, // Border to highlight tabs when hovering
  // 'tab.unfocusedHoverBorder': UIColors.Transparent, // Border to highlight tabs in an unfocused group when hovering
  // 'tab.activeModifiedBorder': UIColors.Danger, // Border on the top of modified (dirty) active tabs in an active group.
  // 'tab.inactiveModifiedBorder': UIColors.Danger, // Border on the top of modified (dirty) inactive tabs in an active group.
  // 'tab.unfocusedActiveModifiedBorder': UIColors.Danger, // Border on the top of modified (dirty) active tabs in an unfocused group.
  'tab.unfocusedInactiveModifiedBorder': UIColors.Danger, // Border on the top of modified (dirty) inactive tabs in an unfocused group.
  'editorPane.background': UIColors.Transparent, // Background color of the editor pane visible on the left and right side of the centered editor layout.
  'sideBySideEditor.horizontalBorder': UIColors.Border, // Color to separate two editors from each other when shown side by side in an editor group from top to bottom.
  'sideBySideEditor.verticalBorder': UIColors.Border, // Color to separate two editors from each other when shown side by side in an editor group from left to right.
};
