export type ColorConfig = string | false;
export interface ContrastColors {
  /** An extra border around active elements to separate them from others for greater contrast. */
  contrastActiveBorder?: ColorConfig;
  /** An extra border around elements to separate them from others for greater contrast. */
  contrastBorder?: ColorConfig;
}

export interface BaseColors {
  /** Overall border color for focused elements. This color is only used if not overridden by a component. */
  'focusBorder'?: ColorConfig;
  /** Overall foreground color. This color is only used if not overridden by a component. */
  'foreground'?: ColorConfig;
  /** Overall foreground for disabled elements. This color is only used if not overridden by a component. */
  'disabledForeground'?: ColorConfig;
  /** Shadow color of widgets such as Find/Replace inside the editor. */
  'widget.shadow'?: ColorConfig;
  /** Border color of widgets such as find/replace inside the editor. */
  'widget.border'?: ColorConfig;
  /** Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal). */
  'selection.background'?: ColorConfig;
  /** Foreground color for description text providing additional information, for example for a label. */
  'descriptionForeground'?: ColorConfig;
  /** Overall foreground color for error messages (this color is only used if not overridden by a component). */
  'errorForeground'?: ColorConfig;
  /** The default color for icons in the workbench. */
  'icon.foreground'?: ColorConfig;
  /** The hover border color for draggable sashes. */
  'sash.hoverBorder'?: ColorConfig;
}

export interface WindowBorder {
  /** Border color for the active (focused) window. */
  'window.activeBorder'?: ColorConfig;
  /** Border color for the inactive (unfocused) windows. */
  'window.inactiveBorder'?: ColorConfig;
}

export interface TextColors {
  /** Background color for block quotes in text. */
  'textBlockQuote.background'?: ColorConfig;
  /** Border color for block quotes in text. */
  'textBlockQuote.border'?: ColorConfig;
  /** Background color for code blocks in text. */
  'textCodeBlock.background'?: ColorConfig;
  /** Foreground color for links in text when clicked on and on mouse hover. */
  'textLink.activeForeground'?: ColorConfig;
  /** Foreground color for links in text. */
  'textLink.foreground'?: ColorConfig;
  /** Foreground color for preformatted text segments. */
  'textPreformat.foreground'?: ColorConfig;
  /** Background color for preformatted text segments. */
  'textPreformat.background'?: ColorConfig;
  /** Color for text separators. */
  'textSeparator.foreground'?: ColorConfig;
}

export interface ActionColors {
  /** Toolbar background when hovering over actions using the mouse */
  'toolbar.hoverBackground'?: ColorConfig;
  /** Toolbar outline when hovering over actions using the mouse */
  'toolbar.hoverOutline'?: ColorConfig;
  /** Toolbar background when holding the mouse over actions */
  'toolbar.activeBackground'?: ColorConfig;
  /** Action List background color. */
  'editorActionList.background'?: ColorConfig;
  /** Action List foreground color. */
  'editorActionList.foreground'?: ColorConfig;
  /** Action List foreground color for the focused item. */
  'editorActionList.focusForeground'?: ColorConfig;
  /** Action List background color for the focused item. */
  'editorActionList.focusBackground'?: ColorConfig;
}

export interface ButtonControl {
  /** Button background color. */
  'button.background'?: ColorConfig;
  /** Button foreground color. */
  'button.foreground'?: ColorConfig;
  /** Button border color. */
  'button.border'?: ColorConfig;
  /** Button background color when hovering. */
  'button.hoverBackground'?: ColorConfig;
  /** Secondary button foreground color. */
  'button.secondaryForeground'?: ColorConfig;
  /** Secondary button background color. */
  'button.secondaryBackground'?: ColorConfig;
  /** Secondary button background color when hovering. */
  'button.secondaryHoverBackground'?: ColorConfig;
  /** Background color of checkbox widget. */
  'checkbox.background'?: ColorConfig;
  /** Background color of checkbox widget when the element it's in is selected. */
  'checkbox.selectBackground'?: ColorConfig;
  /** Foreground color of checkbox widget. */
  'checkbox.foreground'?: ColorConfig;
  /** Border color of checkbox widget. */
  'checkbox.disabled.background'?: ColorConfig;
  /** Foreground of a disabled checkbox. */
  'checkbox.disabled.foreground'?: ColorConfig;
  /** Border color of checkbox widget. */
  'checkbox.border'?: ColorConfig;
  /** Border color of checkbox widget when the element it's in is selected. */
  'checkbox.selectBorder'?: ColorConfig;
  /** Foreground color of active radio option. */
  'radio.activeForeground'?: ColorConfig;
  /** Background color of active radio option. */
  'radio.activeBackground'?: ColorConfig;
  /** Border color of the active radio option. */
  'radio.activeBorder'?: ColorConfig;
  /** Foreground color of inactive radio option. */
  'radio.inactiveForeground'?: ColorConfig;
  /** Background color of inactive radio option. */
  'radio.inactiveBackground'?: ColorConfig;
  /** Border color of the inactive radio option. */
  'radio.inactiveBorder'?: ColorConfig;
  /** Background color of inactive active radio option when hovering. */
  'radio.inactiveHoverBackground'?: ColorConfig;
}

export interface DropdownControl {
  /** Dropdown background. */
  'dropdown.background'?: ColorConfig;
  /** Dropdown list background. */
  'dropdown.listBackground'?: ColorConfig;
  /** Dropdown border. */
  'dropdown.border'?: ColorConfig;
  /** Dropdown foreground. */
  'dropdown.foreground'?: ColorConfig;
}

export interface InputControl {
  /** Input box background. */
  'input.background'?: ColorConfig;
  /** Input box border. */
  'input.border'?: ColorConfig;
  /** Input box foreground. */
  'input.foreground'?: ColorConfig;
  /** Input box foreground color for placeholder text. */
  'input.placeholderForeground'?: ColorConfig;
  /** Background color of activated options in input fields. */
  'inputOption.activeBackground'?: ColorConfig;
  /** Border color of activated options in input fields. */
  'inputOption.activeBorder'?: ColorConfig;
  /** Foreground color of activated options in input fields. */
  'inputOption.activeForeground'?: ColorConfig;
  /** Background color of activated options in input fields. */
  'inputOption.hoverBackground'?: ColorConfig;
  /** Input validation background color for error severity. */
  'inputValidation.errorBackground'?: ColorConfig;
  /** Input validation foreground color for error severity. */
  'inputValidation.errorForeground'?: ColorConfig;
  /** Input validation border color for error severity. */
  'inputValidation.errorBorder'?: ColorConfig;
  /** Input validation background color for information severity. */
  'inputValidation.infoBackground'?: ColorConfig;
  /** Input validation foreground color for information severity. */
  'inputValidation.infoForeground'?: ColorConfig;
  /** Input validation border color for information severity. */
  'inputValidation.infoBorder'?: ColorConfig;
  /** Input validation background color for information warning. */
  'inputValidation.warningBackground'?: ColorConfig;
  /** Input validation foreground color for warning severity. */
  'inputValidation.warningForeground'?: ColorConfig;
  /** Input validation border color for warning severity. */
  'inputValidation.warningBorder'?: ColorConfig;
}

export interface ScrollbarControl {
  /** Scrollbar slider shadow to indicate that the view is scrolled. */
  'scrollbar.shadow'?: ColorConfig;
  /** Scrollbar slider background color when clicked on. */
  'scrollbarSlider.activeBackground'?: ColorConfig;
  /** Scrollbar slider background color. */
  'scrollbarSlider.background'?: ColorConfig;
  /** Scrollbar slider background color when hovering. */
  'scrollbarSlider.hoverBackground'?: ColorConfig;
}

export interface Badge {
  /** Badge foreground color. */
  'badge.foreground'?: ColorConfig;
  /** Badge background color. */
  'badge.background'?: ColorConfig;
}

export interface ProgressBar {
  /** Background color of the progress bar shown for long running operations. */
  'progressBar.background'?: ColorConfig;
}

export interface ListsAndTrees {
  /** List/Tree background color for the selected item when the list/tree is active. */
  'list.activeSelectionBackground'?: ColorConfig;
  /** List/Tree foreground color for the selected item when the list/tree is active. */
  'list.activeSelectionForeground'?: ColorConfig;
  /** List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not. */
  'list.activeSelectionIconForeground'?: ColorConfig;
  /** List/Tree drag and drop background when moving items around using the mouse. */
  'list.dropBackground'?: ColorConfig;
  /** List/Tree background color for the focused item when the list/tree is active. */
  'list.focusBackground'?: ColorConfig;
  /** List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not. */
  'list.focusForeground'?: ColorConfig;
  /** List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree. */
  'list.focusHighlightForeground'?: ColorConfig;
  /** List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not. */
  'list.focusOutline'?: ColorConfig;
  /** List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not. */
  'list.focusAndSelectionOutline'?: ColorConfig;
  /** List/Tree foreground color of the match highlights when searching inside the list/tree. */
  'list.highlightForeground'?: ColorConfig;
  /** List/Tree background when hovering over items using the mouse. */
  'list.hoverBackground'?: ColorConfig;
  /** List/Tree foreground when hovering over items using the mouse. */
  'list.hoverForeground'?: ColorConfig;
  /** List/Tree background color for the selected item when the list/tree is inactive. */
  'list.inactiveSelectionBackground'?: ColorConfig;
  /** List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not. */
  'list.inactiveSelectionForeground'?: ColorConfig;
  /** List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not. */
  'list.inactiveSelectionIconForeground'?: ColorConfig;
  /** List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists. */
  'list.inactiveFocusBackground'?: ColorConfig;
  /** List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not. */
  'list.inactiveFocusOutline'?: ColorConfig;
  /** List/Tree foreground color for invalid items, for example an unresolved root in explorer. */
  'list.invalidItemForeground'?: ColorConfig;
  /** Foreground color of list items containing errors. */
  'list.errorForeground'?: ColorConfig;
  /** Foreground color of list items containing warnings. */
  'list.warningForeground'?: ColorConfig;
  /** List/Tree Filter background color of typed text when searching inside the list/tree. */
  'listFilterWidget.background'?: ColorConfig;
  /** List/Tree Filter Widget's outline color of typed text when searching inside the list/tree. */
  'listFilterWidget.outline'?: ColorConfig;
  /** List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree. */
  'listFilterWidget.noMatchesOutline'?: ColorConfig;
  /** Shadow color of the type filter widget in lists and tree. */
  'listFilterWidget.shadow'?: ColorConfig;
  /** Background color of the filtered matches in lists and trees. */
  'list.filterMatchBackground'?: ColorConfig;
  /** Border color of the filtered matches in lists and trees. */
  'list.filterMatchBorder'?: ColorConfig;
  /** List/Tree foreground color for items that are deemphasized. */
  'list.deemphasizedForeground'?: ColorConfig;
  /** List/Tree drag and drop border color when moving items between items when using the mouse. */
  'list.dropBetweenBackground'?: ColorConfig;
  /** Tree Widget's stroke color for indent guides. */
  'tree.indentGuidesStroke'?: ColorConfig;
  /** Tree stroke color for the indentation guides that are not active. */
  'tree.inactiveIndentGuidesStroke'?: ColorConfig;
  /** Tree stroke color for the indentation guides. */
  'tree.tableColumnsBorder'?: ColorConfig;
  /** Background color for odd table rows. */
  'tree.tableOddRowsBackground'?: ColorConfig;
}

export interface ActivityBar {
  /** Activity Bar background color. */
  'activityBar.background'?: ColorConfig;
  /** Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar. */
  'activityBar.dropBorder'?: ColorConfig;
  /** Activity Bar foreground color (for example used for the icons). */
  'activityBar.foreground'?: ColorConfig;
  /** Activity Bar item foreground color when it is inactive. */
  'activityBar.inactiveForeground'?: ColorConfig;
  /** Activity Bar border color with the Side Bar. */
  'activityBar.border'?: ColorConfig;
  /** Activity notification badge background color. */
  'activityBarBadge.background'?: ColorConfig;
  /** Activity notification badge foreground color. */
  'activityBarBadge.foreground'?: ColorConfig;
  /** Activity Bar active indicator border color. */
  'activityBar.activeBorder'?: ColorConfig;
  /** Activity Bar optional background color for the active element. */
  'activityBar.activeBackground'?: ColorConfig;
  /** Activity bar focus border color for the active item. */
  'activityBar.activeFocusBorder'?: ColorConfig;
  /** Active foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.foreground'?: ColorConfig;
  /** Focus border color for the active item in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.activeBorder'?: ColorConfig;
  /** Inactive foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.inactiveForeground'?: ColorConfig;
  /** Drag and drop feedback color for the items in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.dropBorder'?: ColorConfig;
  /** Background color of the activity bar when set to top / bottom. */
  'activityBarTop.background'?: ColorConfig;
  /** Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar. */
  'activityBarTop.activeBackground'?: ColorConfig;
  /** Foreground color of the warning activity badge */
  'activityWarningBadge.foreground'?: ColorConfig;
  /** Background color of the warning activity badge */
  'activityWarningBadge.background'?: ColorConfig;
  /** Foreground color of the error activity badge */
  'activityErrorBadge.foreground'?: ColorConfig;
  /** Background color of the error activity badge */
  'activityErrorBadge.background'?: ColorConfig;
}

export interface Profile {
  /** Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar. */
  'profileBadge.background'?: ColorConfig;
  /** Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar. */
  'profileBadge.foreground'?: ColorConfig;
  /** The color of the Profiles editor split-view sash border. */
  'profiles.sashBorder'?: ColorConfig;
}

export interface SideBar {
  /** Side Bar background color. */
  'sideBar.background'?: ColorConfig;
  /** Side Bar foreground color. The Side Bar is the container for views like Explorer and Search. */
  'sideBar.foreground'?: ColorConfig;
  /** Side Bar border color on the side separating the editor. */
  'sideBar.border'?: ColorConfig;
  /** Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. */
  'sideBar.dropBackground'?: ColorConfig;
  /** Side Bar title foreground color. */
  'sideBarTitle.foreground'?: ColorConfig;
  /** Side Bar section header background color. */
  'sideBarSectionHeader.background'?: ColorConfig;
  /** Side Bar section header foreground color. */
  'sideBarSectionHeader.foreground'?: ColorConfig;
  /** Side bar section header border color. */
  'sideBarSectionHeader.border'?: ColorConfig;
  /** Border color between the activity bar at the top/bottom and the views. */
  'sideBarActivityBarTop.border'?: ColorConfig;
  /** Side bar title background color. The side bar is the container for views like explorer and search. */
  'sideBarTitle.background'?: ColorConfig;
  /** Side bar title border color on the bottom, separating the title from the views. The side bar is the container for views like explorer and search. */
  'sideBarTitle.border'?: ColorConfig;
  /** Background color of sticky scroll in the side bar. */
  'sideBarStickyScroll.background'?: ColorConfig;
  /** Border color of sticky scroll in the side bar. */
  'sideBarStickyScroll.border'?: ColorConfig;
  /** Shadow color of sticky scroll in the side bar. */
  'sideBarStickyScroll.shadow'?: ColorConfig;
}

export interface Minimap {
  /** Highlight color for matches from search within files. */
  'minimap.findMatchHighlight'?: ColorConfig;
  /** Highlight color for the editor selection. */
  'minimap.selectionHighlight'?: ColorConfig;
  /** Highlight color for errors within the editor. */
  'minimap.errorHighlight'?: ColorConfig;
  /** Highlight color for warnings within the editor. */
  'minimap.warningHighlight'?: ColorConfig;
  /** Minimap background color. */
  'minimap.background'?: ColorConfig;
  /** Minimap marker color for repeating editor selections. */
  'minimap.selectionOccurrenceHighlight'?: ColorConfig;
  /** Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity. */
  'minimap.foregroundOpacity'?: ColorConfig;
  /** Minimap marker color for infos. */
  'minimap.infoHighlight'?: ColorConfig;
  /** Color of pending edit regions in the minimap. */
  'minimap.chatEditHighlight'?: ColorConfig;
  /** Minimap slider background color. */
  'minimapSlider.background'?: ColorConfig;
  /** Minimap slider background color when hovering. */
  'minimapSlider.hoverBackground'?: ColorConfig;
  /** Minimap slider background color when clicked on. */
  'minimapSlider.activeBackground'?: ColorConfig;
  /** Minimap gutter color for added content. */
  'minimapGutter.addedBackground'?: ColorConfig;
  /** Minimap gutter color for modified content. */
  'minimapGutter.modifiedBackground'?: ColorConfig;
  /** Minimap gutter color for deleted content. */
  'minimapGutter.deletedBackground'?: ColorConfig;
  /** Minimap marker color for inline chat inserted content. */
  'editorMinimap.inlineChatInserted'?: ColorConfig;
}

export interface EditorGroupsAndTabs {
  /** Color to separate multiple editor groups from each other. */
  'editorGroup.border'?: ColorConfig;
  /** Background color when dragging editors around. */
  'editorGroup.dropBackground'?: ColorConfig;
  /** Background color of the editor group title header when using single Tab (set `"workbench.editor.showTabs": "single"`). */
  'editorGroupHeader.noTabsBackground'?: ColorConfig;
  /** Background color of the Tabs container. */
  'editorGroupHeader.tabsBackground'?: ColorConfig;
  /** Border color below the editor tabs control when tabs are enabled. */
  'editorGroupHeader.tabsBorder'?: ColorConfig;
  /** Border color between editor group header and editor (below breadcrumbs if enabled). */
  'editorGroupHeader.border'?: ColorConfig;
  /** Background color of an empty editor group. */
  'editorGroup.emptyBackground'?: ColorConfig;
  /** Border color of an empty editor group that is focused. */
  'editorGroup.focusedEmptyBorder'?: ColorConfig;
  /** Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor. */
  'editorGroup.dropIntoPromptForeground'?: ColorConfig;
  /** Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor. */
  'editorGroup.dropIntoPromptBackground'?: ColorConfig;
  /** Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor. */
  'editorGroup.dropIntoPromptBorder'?: ColorConfig;
  /** Active Tab background color in an active group. */
  'tab.activeBackground'?: ColorConfig;
  /** Active Tab background color in an inactive editor group. */
  'tab.unfocusedActiveBackground'?: ColorConfig;
  /** Active Tab foreground color in an active group. */
  'tab.activeForeground'?: ColorConfig;
  /** Border to separate Tabs from each other. */
  'tab.border'?: ColorConfig;
  /** Bottom border for the active tab. */
  'tab.activeBorder'?: ColorConfig;
  /** Border to the top of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.selectedBorderTop'?: ColorConfig;
  /** Background of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.selectedBackground'?: ColorConfig;
  /** Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.dragAndDropBorder'?: ColorConfig;
  /** Foreground of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.selectedForeground'?: ColorConfig;
  /** Bottom border for the active tab in an inactive editor group. */
  'tab.unfocusedActiveBorder'?: ColorConfig;
  /** Top border for the active tab. */
  'tab.activeBorderTop'?: ColorConfig;
  /** Top border for the active tab in an inactive editor group. */
  'tab.unfocusedActiveBorderTop'?: ColorConfig;
  /** Border on the right of the last pinned editor to separate from unpinned editors. */
  'tab.lastPinnedBorder'?: ColorConfig;
  /** Inactive Tab background color. */
  'tab.inactiveBackground'?: ColorConfig;
  /** Inactive Tab background color in an unfocused group */
  'tab.unfocusedInactiveBackground'?: ColorConfig;
  /** Inactive Tab foreground color in an active group. */
  'tab.inactiveForeground'?: ColorConfig;
  /** Active tab foreground color in an inactive editor group. */
  'tab.unfocusedActiveForeground'?: ColorConfig;
  /** Inactive tab foreground color in an inactive editor group. */
  'tab.unfocusedInactiveForeground'?: ColorConfig;
  /** Tab background color when hovering */
  'tab.hoverBackground'?: ColorConfig;
  /** Tab background color in an unfocused group when hovering */
  'tab.unfocusedHoverBackground'?: ColorConfig;
  /** Tab foreground color when hovering */
  'tab.hoverForeground'?: ColorConfig;
  /** Tab foreground color in an unfocused group when hovering */
  'tab.unfocusedHoverForeground'?: ColorConfig;
  /** Border to highlight tabs when hovering */
  'tab.hoverBorder'?: ColorConfig;
  /** Border to highlight tabs in an unfocused group when hovering */
  'tab.unfocusedHoverBorder'?: ColorConfig;
  /** Border on the top of modified (dirty) active tabs in an active group. */
  'tab.activeModifiedBorder'?: ColorConfig;
  /** Border on the top of modified (dirty) inactive tabs in an active group. */
  'tab.inactiveModifiedBorder'?: ColorConfig;
  /** Border on the top of modified (dirty) active tabs in an unfocused group. */
  'tab.unfocusedActiveModifiedBorder'?: ColorConfig;
  /** Border on the top of modified (dirty) inactive tabs in an unfocused group. */
  'tab.unfocusedInactiveModifiedBorder'?: ColorConfig;
  /** Background color of the editor pane visible on the left and right side of the centered editor layout. */
  'editorPane.background'?: ColorConfig;
  /** Color to separate two editors from each other when shown side by side in an editor group from top to bottom. */
  'sideBySideEditor.horizontalBorder'?: ColorConfig;
  /** Color to separate two editors from each other when shown side by side in an editor group from left to right. */
  'sideBySideEditor.verticalBorder'?: ColorConfig;
}

export interface EditorColors {
  /** Editor background color. */
  'editor.background'?: ColorConfig;
  /** Editor default foreground color. */
  'editor.foreground'?: ColorConfig;
  /** Color of editor line numbers. */
  'editorLineNumber.foreground'?: ColorConfig;
  /** Color of the active editor line number. */
  'editorLineNumber.activeForeground'?: ColorConfig;
  /** Color of the final editor line when editor.renderFinalNewline is set to dimmed. */
  'editorLineNumber.dimmedForeground'?: ColorConfig;
  /** The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor. */
  'editorCursor.background'?: ColorConfig;
  /** Color of the editor cursor. */
  'editorCursor.foreground'?: ColorConfig;
  /** Color of the primary editor cursor when multiple cursors are present. */
  'editorMultiCursor.primary.foreground'?: ColorConfig;
  /** The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor. */
  'editorMultiCursor.primary.background'?: ColorConfig;
  /** Color of secondary editor cursors when multiple cursors are present. */
  'editorMultiCursor.secondary.foreground'?: ColorConfig;
  /** The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor. */
  'editorMultiCursor.secondary.background'?: ColorConfig;
  /** Foreground color of the placeholder text in the editor. */
  'editor.placeholder.foreground'?: ColorConfig;
  /** The border color for an IME composition. */
  'editor.compositionBorder'?: ColorConfig;
  /** Color of the editor selection. */
  'editor.selectionBackground'?: ColorConfig;
  /** Color of the selected text for high contrast. */
  'editor.selectionForeground'?: ColorConfig;
  /** Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations. */
  'editor.inactiveSelectionBackground'?: ColorConfig;
  /** Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations. */
  'editor.selectionHighlightBackground'?: ColorConfig;
  /** Border color for regions with the same content as the selection. */
  'editor.selectionHighlightBorder'?: ColorConfig;
  /** Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations. */
  'editor.wordHighlightBackground'?: ColorConfig;
  /** Border color of a symbol during read-access, for example when reading a variable. */
  'editor.wordHighlightBorder'?: ColorConfig;
  /** Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations. */
  'editor.wordHighlightStrongBackground'?: ColorConfig;
  /** Border color of a symbol during write-access, for example when writing to a variable. */
  'editor.wordHighlightStrongBorder'?: ColorConfig;
  /** Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations. */
  'editor.wordHighlightTextBackground'?: ColorConfig;
  /** Border color of a textual occurrence for a symbol. */
  'editor.wordHighlightTextBorder'?: ColorConfig;
  /** Color of the current search match. */
  'editor.findMatchBackground'?: ColorConfig;
  /** Text color of the current search match. */
  'editor.findMatchForeground'?: ColorConfig;
  /** Foreground color of the other search matches. */
  'editor.findMatchHighlightForeground'?: ColorConfig;
  /** Color of the other search matches. The color must not be opaque so as not to hide underlying decorations. */
  'editor.findMatchHighlightBackground'?: ColorConfig;
  /** Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations. */
  'editor.findRangeHighlightBackground'?: ColorConfig;
  /** Border color of the current search match. */
  'editor.findMatchBorder'?: ColorConfig;
  /** Border color of the other search matches. */
  'editor.findMatchHighlightBorder'?: ColorConfig;
  /** Border color the range limiting the search (Enable 'Find in Selection' in the find widget). */
  'editor.findRangeHighlightBorder'?: ColorConfig;
  /** Color of the text in the search viewlet's completion message. For example, this color is used in the text that says "{x} results in {y} files". */
  'search.resultsInfoForeground'?: ColorConfig;
  /** Color of the editor's results. */
  'searchEditor.findMatchBackground'?: ColorConfig;
  /** Border color of the editor's results. */
  'searchEditor.findMatchBorder'?: ColorConfig;
  /** Search editor text input box border. */
  'searchEditor.textInputBorder'?: ColorConfig;
  /** Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations. */
  'editor.hoverHighlightBackground'?: ColorConfig;
  /** Background color for the highlight of line at the cursor position. */
  'editor.lineHighlightBackground'?: ColorConfig;
  /** Background color for the border around the line at the cursor position. */
  'editor.lineHighlightBorder'?: ColorConfig;
  /** Foreground color for the labels in the editor watermark. */
  'editorWatermark.foreground'?: ColorConfig;
  /** Border color used to highlight unicode characters. */
  'editorUnicodeHighlight.border'?: ColorConfig;
  /** Background color used to highlight unicode characters. */
  'editorUnicodeHighlight.background'?: ColorConfig;
  /** Color of active links. */
  'editorLink.activeForeground'?: ColorConfig;
  /** Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations. */
  'editor.rangeHighlightBackground'?: ColorConfig;
  /** Background color of the border around highlighted ranges. */
  'editor.rangeHighlightBorder'?: ColorConfig;
  /** Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations. */
  'editor.symbolHighlightBackground'?: ColorConfig;
  /** Background color of the border around highlighted symbols. */
  'editor.symbolHighlightBorder'?: ColorConfig;
  /** Color of whitespace characters in the editor. */
  'editorWhitespace.foreground'?: ColorConfig;
  /** Color of the editor indentation guides. */
  'editorIndentGuide.background1'?: ColorConfig;
  /** Color of the editor indentation guides (2). */
  'editorIndentGuide.background2'?: ColorConfig;
  /** Color of the editor indentation guides (3). */
  'editorIndentGuide.background3'?: ColorConfig;
  /** Color of the editor indentation guides (4). */
  'editorIndentGuide.background4'?: ColorConfig;
  /** Color of the editor indentation guides (5). */
  'editorIndentGuide.background5'?: ColorConfig;
  /** Color of the editor indentation guides (6). */
  'editorIndentGuide.background6'?: ColorConfig;
  /** Color of the active editor indentation guides (1). */
  'editorIndentGuide.activeBackground1'?: ColorConfig;
  /** Color of the active editor indentation guides (2). */
  'editorIndentGuide.activeBackground2'?: ColorConfig;
  /** Color of the active editor indentation guides (3). */
  'editorIndentGuide.activeBackground3'?: ColorConfig;
  /** Color of the active editor indentation guides (4). */
  'editorIndentGuide.activeBackground4'?: ColorConfig;
  /** Color of the active editor indentation guides (5). */
  'editorIndentGuide.activeBackground5'?: ColorConfig;
  /** Color of the active editor indentation guides (6). */
  'editorIndentGuide.activeBackground6'?: ColorConfig;
  /** Background color of inline hints. */
  'editorInlayHint.background'?: ColorConfig;
  /** Foreground color of inline hints. */
  'editorInlayHint.foreground'?: ColorConfig;
  /** Foreground color of inline hints for types */
  'editorInlayHint.typeForeground'?: ColorConfig;
  /** Background color of inline hints for types */
  'editorInlayHint.typeBackground'?: ColorConfig;
  /** Foreground color of inline hints for parameters */
  'editorInlayHint.parameterForeground'?: ColorConfig;
  /** Background color of inline hints for parameters */
  'editorInlayHint.parameterBackground'?: ColorConfig;
  /** Color of the editor rulers. */
  'editorRuler.foreground'?: ColorConfig;
  /** Background color when the editor is in linked editing mode. */
  'editor.linkedEditingBackground'?: ColorConfig;
  /** Foreground color of an editor CodeLens. */
  'editorCodeLens.foreground'?: ColorConfig;
  /** The color used for the lightbulb actions icon. */
  'editorLightBulb.foreground'?: ColorConfig;
  /** The color used for the lightbulb auto fix actions icon. */
  'editorLightBulbAutoFix.foreground'?: ColorConfig;
  /** The color used for the lightbulb AI icon. */
  'editorLightBulbAi.foreground'?: ColorConfig;
  /** Background color behind matching brackets. */
  'editorBracketMatch.background'?: ColorConfig;
  /** Color for matching brackets boxes. */
  'editorBracketMatch.border'?: ColorConfig;
  /** Foreground color of brackets (1). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground1'?: ColorConfig;
  /** Foreground color of brackets (2). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground2'?: ColorConfig;
  /** Foreground color of brackets (3). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground3'?: ColorConfig;
  /** Foreground color of brackets (4). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground4'?: ColorConfig;
  /** Foreground color of brackets (5). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground5'?: ColorConfig;
  /** Foreground color of brackets (6). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground6'?: ColorConfig;
  /** Foreground color of unexpected brackets. */
  'editorBracketHighlight.unexpectedBracket.foreground'?: ColorConfig;
  /** Background color of active bracket pair guides (1). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground1'?: ColorConfig;
  /** Background color of active bracket pair guides (2). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground2'?: ColorConfig;
  /** Background color of active bracket pair guides (3). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground3'?: ColorConfig;
  /** Background color of active bracket pair guides (4). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground4'?: ColorConfig;
  /** Background color of active bracket pair guides (5). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground5'?: ColorConfig;
  /** Background color of active bracket pair guides (6). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground6'?: ColorConfig;
  /** Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background1'?: ColorConfig;
  /** Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background2'?: ColorConfig;
  /** Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background3'?: ColorConfig;
  /** Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background4'?: ColorConfig;
  /** Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background5'?: ColorConfig;
  /** Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background6'?: ColorConfig;
  /** Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations. */
  'editor.foldBackground'?: ColorConfig;
  /** Color of the collapsed text after the first line of a folded range. */
  'editor.foldPlaceholderForeground'?: ColorConfig;
  /** Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor. */
  'editorOverviewRuler.background'?: ColorConfig;
  /** Color of the overview ruler border. */
  'editorOverviewRuler.border'?: ColorConfig;
  /** Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.findMatchForeground'?: ColorConfig;
  /** Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.rangeHighlightForeground'?: ColorConfig;
  /** Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.selectionHighlightForeground'?: ColorConfig;
  /** Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.wordHighlightForeground'?: ColorConfig;
  /** Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.wordHighlightStrongForeground'?: ColorConfig;
  /** Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.wordHighlightTextForeground'?: ColorConfig;
  /** Overview ruler marker color for modified content. */
  'editorOverviewRuler.modifiedForeground'?: ColorConfig;
  /** Overview ruler marker color for added content. */
  'editorOverviewRuler.addedForeground'?: ColorConfig;
  /** Overview ruler marker color for deleted content. */
  'editorOverviewRuler.deletedForeground'?: ColorConfig;
  /** Overview ruler marker color for errors. */
  'editorOverviewRuler.errorForeground'?: ColorConfig;
  /** Overview ruler marker color for warnings. */
  'editorOverviewRuler.warningForeground'?: ColorConfig;
  /** Overview ruler marker color for infos. */
  'editorOverviewRuler.infoForeground'?: ColorConfig;
  /** Overview ruler marker color for matching brackets. */
  'editorOverviewRuler.bracketMatchForeground'?: ColorConfig;
  /** Overview ruler marker color for inline chat inserted content. */
  'editorOverviewRuler.inlineChatInserted'?: ColorConfig;
  /** Overview ruler marker color for inline chat removed content. */
  'editorOverviewRuler.inlineChatRemoved'?: ColorConfig;
  /** Foreground color of error squiggles in the editor. */
  'editorError.foreground'?: ColorConfig;
  /** Border color of error boxes in the editor. */
  'editorError.border'?: ColorConfig;
  /** Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations. */
  'editorError.background'?: ColorConfig;
  /** Foreground color of warning squiggles in the editor. */
  'editorWarning.foreground'?: ColorConfig;
  /** Border color of warning boxes in the editor. */
  'editorWarning.border'?: ColorConfig;
  /** Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations. */
  'editorWarning.background'?: ColorConfig;
  /** Foreground color of info squiggles in the editor. */
  'editorInfo.foreground'?: ColorConfig;
  /** Border color of info boxes in the editor. */
  'editorInfo.border'?: ColorConfig;
  /** Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations. */
  'editorInfo.background'?: ColorConfig;
  /** Foreground color of hints in the editor. */
  'editorHint.foreground'?: ColorConfig;
  /** Border color of hint boxes in the editor. */
  'editorHint.border'?: ColorConfig;
  /** The color used for the problems error icon. */
  'problemsErrorIcon.foreground'?: ColorConfig;
  /** The color used for the problems warning icon. */
  'problemsWarningIcon.foreground'?: ColorConfig;
  /** The color used for the problems info icon. */
  'problemsInfoIcon.foreground'?: ColorConfig;
  /** Border color of unnecessary (unused) source code in the editor. */
  'editorUnnecessaryCode.border'?: ColorConfig;
  /** Opacity of unnecessary (unused) source code in the editor. For example, "#000000c0" will render the code with 75% opacity. For high contrast themes, use the "editorUnnecessaryCode.border" theme color to underline unnecessary code instead of fading it out. */
  'editorUnnecessaryCode.opacity'?: ColorConfig;
  /** Background color of the editor gutter. The gutter contains the glyph margins and the line numbers. */
  'editorGutter.background'?: ColorConfig;
  /** Editor gutter background color for lines that are modified. */
  'editorGutter.modifiedBackground'?: ColorConfig;
  /** Editor gutter secondary background color for lines that are modified. */
  'editorGutter.modifiedSecondaryBackground'?: ColorConfig;
  /** Editor gutter secondary background color for lines that are added. */
  'editorGutter.addedSecondaryBackground'?: ColorConfig;
  /** Editor gutter secondary background color for lines that are deleted. */
  'editorGutter.deletedSecondaryBackground'?: ColorConfig;
  /** Editor gutter background color for lines that are added. */
  'editorGutter.addedBackground'?: ColorConfig;
  /** Editor gutter background color for lines that are deleted. */
  'editorGutter.deletedBackground'?: ColorConfig;
  /** Editor gutter decoration color for commenting ranges. */
  'editorGutter.commentRangeForeground'?: ColorConfig;
  /** Editor gutter decoration color for commenting glyphs. */
  'editorGutter.commentGlyphForeground'?: ColorConfig;
  /** Editor gutter decoration color for commenting glyphs for unresolved comment threads. */
  'editorGutter.commentUnresolvedGlyphForeground'?: ColorConfig;
  /** Color of the folding control in the editor gutter. */
  'editorGutter.foldingControlForeground'?: ColorConfig;
  /** Editor gutter decoration color for gutter item glyphs. */
  'editorGutter.itemGlyphForeground'?: ColorConfig;
  /** Editor gutter decoration color for gutter item background. This color should be opaque. */
  'editorGutter.itemBackground'?: ColorConfig;
  /** Color of borders and arrow for resolved comments. */
  'editorCommentsWidget.resolvedBorder'?: ColorConfig;
  /** Color of borders and arrow for unresolved comments. */
  'editorCommentsWidget.unresolvedBorder'?: ColorConfig;
  /** Color of background for comment ranges. */
  'editorCommentsWidget.rangeBackground'?: ColorConfig;
  /** Color of background for currently selected or hovered comment range. */
  'editorCommentsWidget.rangeActiveBackground'?: ColorConfig;
  /** Background color for comment reply input box. */
  'editorCommentsWidget.replyInputBackground'?: ColorConfig;
  /** Border color for the primary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.primaryBorder'?: ColorConfig;
  /** Foreground color for the primary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.primaryForeground'?: ColorConfig;
  /** Background color for the primary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.primaryBackground'?: ColorConfig;
  /** Border color for the secondary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.secondaryBorder'?: ColorConfig;
  /** Foreground color for the secondary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.secondaryForeground'?: ColorConfig;
  /** Background color for the secondary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.secondaryBackground'?: ColorConfig;
  /** Border color for the successful inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.successfulBorder'?: ColorConfig;
  /** Foreground color for the successful inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.successfulForeground'?: ColorConfig;
  /** Background color for the successful inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.successfulBackground'?: ColorConfig;
  /** Background color for the inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.background'?: ColorConfig;
  /** Foreground color for the inline edit indicator. */
  'inlineEdit.indicator.foreground'?: ColorConfig;
  /** Background color for the inline edit indicator. */
  'inlineEdit.indicator.background'?: ColorConfig;
  /** Border color for the inline edit indicator. */
  'inlineEdit.indicator.border'?: ColorConfig;
  /** Background color for the original text in inline edits. */
  'inlineEdit.originalBackground'?: ColorConfig;
  /** Background color for the modified text in inline edits. */
  'inlineEdit.modifiedBackground'?: ColorConfig;
  /** Background color for the changed lines in the original text of inline edits. */
  'inlineEdit.originalChangedLineBackground'?: ColorConfig;
  /** Overlay color for the changed text in the original text of inline edits. */
  'inlineEdit.originalChangedTextBackground'?: ColorConfig;
  /** Background color for the changed lines in the modified text of inline edits. */
  'inlineEdit.modifiedChangedLineBackground'?: ColorConfig;
  /** Overlay color for the changed text in the modified text of inline edits. */
  'inlineEdit.modifiedChangedTextBackground'?: ColorConfig;
  /** Border color for the original text in inline edits. */
  'inlineEdit.originalBorder'?: ColorConfig;
  /** Border color for the modified text in inline edits. */
  'inlineEdit.modifiedBorder'?: ColorConfig;

  /** Modified border color for the inline edits widget when tab will accept it. */
  'inlineEdit.tabWillAcceptModifiedBorder'?: ColorConfig;
  /** Original border color for the inline edits widget over the original text when tab will accept it. */
  'inlineEdit.tabWillAcceptOriginalBorder'?: ColorConfig;
  /** Border color for the inline edits widget over the original text when tab will accept it. */
  'inlineEdit.tabWillAcceptBorder'?: ColorConfig;
  /** Background color for the inline edit word replacement view. */
  'inlineEdit.wordReplacementView.background'?: ColorConfig;
}

export interface DiffEditorColor {
  /** Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.insertedTextBackground'?: ColorConfig;
  /** Outline color for the text that got inserted. */
  'diffEditor.insertedTextBorder'?: ColorConfig;
  /** Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.removedTextBackground'?: ColorConfig;
  /** Outline color for text that got removed. */
  'diffEditor.removedTextBorder'?: ColorConfig;
  /** Border color between the two text editors. */
  'diffEditor.border'?: ColorConfig;
  /** Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views. */
  'diffEditor.diagonalFill'?: ColorConfig;
  /** Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.insertedLineBackground'?: ColorConfig;
  /** Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.removedLineBackground'?: ColorConfig;
  /** Background color for the margin where lines got inserted. */
  'diffEditorGutter.insertedLineBackground'?: ColorConfig;
  /** Background color for the margin where lines got removed. */
  'diffEditorGutter.removedLineBackground'?: ColorConfig;
  /** Diff overview ruler foreground for inserted content. */
  'diffEditorOverview.insertedForeground'?: ColorConfig;
  /** Diff overview ruler foreground for removed content. */
  'diffEditorOverview.removedForeground'?: ColorConfig;
  /** The color of unchanged blocks in diff editor. */
  'diffEditor.unchangedRegionBackground'?: ColorConfig;
  /** The foreground color of unchanged blocks in the diff editor. */
  'diffEditor.unchangedRegionForeground'?: ColorConfig;
  /** The color of the shadow around unchanged region widgets. */
  'diffEditor.unchangedRegionShadow'?: ColorConfig;
  /** The background color of unchanged code in the diff editor. */
  'diffEditor.unchangedCodeBackground'?: ColorConfig;
  /** The border color for text that got moved in the diff editor. */
  'diffEditor.move.border'?: ColorConfig;
  /** The active border color for text that got moved in the diff editor. */
  'diffEditor.moveActive.border'?: ColorConfig;
  /** The background color of the diff editor's header. */
  'multiDiffEditor.headerBackground'?: ColorConfig;
  /** The background color of the multi file diff editor. */
  'multiDiffEditor.background'?: ColorConfig;
  /** The border color of the multi file diff editor. */
  'multiDiffEditor.border'?: ColorConfig;
}

export interface ChatColors {
  /** The border color of a chat request. */
  'chat.requestBorder'?: ColorConfig;
  'chat.requestBackground'?: ColorConfig;
  /** The background color of a chat slash command. */
  'chat.slashCommandBackground'?: ColorConfig;
  /** The foreground color of a chat slash command. */
  'chat.slashCommandForeground'?: ColorConfig;
  /** The background color of a chat avatar. */
  'chat.avatarBackground'?: ColorConfig;
  /** The foreground color of a chat avatar. */
  'chat.avatarForeground'?: ColorConfig;
  /** The foreground color of a chat edited file in the edited file list. */
  'chat.editedFileForeground'?: ColorConfig;
  /** The foreground color of a chat lines added. */
  'chat.linesAddedForeground'?: ColorConfig;
  /** The foreground color of a chat lines removed. */
  'chat.linesRemovedForeground'?: ColorConfig;
  /** The border color of a chat request code. */
  'chat.requestCodeBorder'?: ColorConfig;
  /** The background color of a chat request bubble. */
  'chat.requestBubbleBackground'?: ColorConfig;
  /** The background color of a chat request bubble when hovered. */
  'chat.requestBubbleHoverBackground'?: ColorConfig;
  /** The foreground color of a chat checkpoint separator. */
  'chat.checkpointSeparator'?: ColorConfig;
}

export interface InlineChatColors {
  /** Background color of the interactive editor widget. */
  'inlineChat.background'?: ColorConfig;
  /** Foreground color of the interactive editor widget. */
  'inlineChat.foreground'?: ColorConfig;
  /** Border color of the interactive editor widget. */
  'inlineChat.border'?: ColorConfig;
  /** Shadow color of the interactive editor widget. */
  'inlineChat.shadow'?: ColorConfig;
  /** Border color of the interactive editor input. */
  'inlineChatInput.border'?: ColorConfig;
  /** Border color of the interactive editor input when focused. */
  'inlineChatInput.focusBorder'?: ColorConfig;
  /** Foreground color of the interactive editor input placeholder. */
  'inlineChatInput.placeholderForeground'?: ColorConfig;
  /** Background color of the interactive editor input. */
  'inlineChatInput.background'?: ColorConfig;
  /** Background color of inserted text in the interactive editor input. */
  'inlineChatDiff.inserted'?: ColorConfig;
  /** Foreground color of inserted text in the interactive editor input. */
  'inlineChatDiff.removed'?: ColorConfig;
  /** Background color of removed text in the interactive editor input. */
  'inlineChatrDiff.removed'?: ColorConfig;
}

export interface PanelChatColor {
  /** The border color for the current interactive code cell when the editor has focus. */
  'interactive.activeCodeBorder'?: ColorConfig;
  /** The border color for the current interactive code cell when the editor does not have focus. */
  'interactive.inactiveCodeBorder'?: ColorConfig;
}

export interface EditorWidgetColor {
  /** Foreground color of editor widgets, such as find/replace. */
  'editorWidget.foreground'?: ColorConfig;
  /** Background color of editor widgets, such as Find/Replace. */
  'editorWidget.background'?: ColorConfig;
  /** Border color of the editor widget unless the widget does not contain a border or defines its own border color. */
  'editorWidget.border'?: ColorConfig;
  /** Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget. */
  'editorWidget.resizeBorder'?: ColorConfig;
  /** Background color of the suggestion widget. */
  'editorSuggestWidget.background'?: ColorConfig;
  /** Border color of the suggestion widget. */
  'editorSuggestWidget.border'?: ColorConfig;
  /** Foreground color of the suggestion widget. */
  'editorSuggestWidget.foreground'?: ColorConfig;
  /** Color of the match highlights in the suggest widget when an item is focused. */
  'editorSuggestWidget.focusHighlightForeground'?: ColorConfig;
  /** Color of the match highlights in the suggestion widget. */
  'editorSuggestWidget.highlightForeground'?: ColorConfig;
  /** Background color of the selected entry in the suggestion widget. */
  'editorSuggestWidget.selectedBackground'?: ColorConfig;
  /** Foreground color of the selected entry in the suggest widget. */
  'editorSuggestWidget.selectedForeground'?: ColorConfig;
  /** Icon foreground color of the selected entry in the suggest widget. */
  'editorSuggestWidget.selectedIconForeground'?: ColorConfig;
  /** Foreground color of the suggest widget status. */
  'editorSuggestWidgetStatus.foreground'?: ColorConfig;
  /** Foreground color of the editor hover. */
  'editorHoverWidget.foreground'?: ColorConfig;
  /** Background color of the editor hover. */
  'editorHoverWidget.background'?: ColorConfig;
  /** Border color of the editor hover. */
  'editorHoverWidget.border'?: ColorConfig;
  /** Foreground color of the active item in the parameter hint. */
  'editorHoverWidget.highlightForeground'?: ColorConfig;
  /** Background color of the editor hover status bar. */
  'editorHoverWidget.statusBarBackground'?: ColorConfig;
  /** Border color of the ghost text shown by inline completion providers and the suggest preview. */
  'editorGhostText.border'?: ColorConfig;
  /** Background color of the ghost text in the editor. */
  'editorGhostText.background'?: ColorConfig;
  /** Foreground color of the ghost text shown by inline completion providers and the suggest preview. */
  'editorGhostText.foreground'?: ColorConfig;
  /** Editor sticky scroll background color. */
  'editorStickyScroll.background'?: ColorConfig;
  /** Border color of sticky scroll in the editor. */
  'editorStickyScroll.border'?: ColorConfig;
  /** Shadow color of sticky scroll in the editor. */
  'editorStickyScroll.shadow'?: ColorConfig;
  /** Background color of the gutter part of sticky scroll in the editor. */
  'editorStickyScrollGutter.background'?: ColorConfig;
  /** Editor sticky scroll on hover background color. */
  'editorStickyScrollHover.background'?: ColorConfig;
  /** Exception widget background color. */
  'debugExceptionWidget.background'?: ColorConfig;
  /** Exception widget border color. */
  'debugExceptionWidget.border'?: ColorConfig;
  /** Editor marker navigation widget background. */
  'editorMarkerNavigation.background'?: ColorConfig;
  /** Editor marker navigation widget error color. */
  'editorMarkerNavigationError.background'?: ColorConfig;
  /** Editor marker navigation widget warning color. */
  'editorMarkerNavigationWarning.background'?: ColorConfig;
  /** Editor marker navigation widget info color. */
  'editorMarkerNavigationInfo.background'?: ColorConfig;
  /** Editor marker navigation widget error heading background. */
  'editorMarkerNavigationError.headerBackground'?: ColorConfig;
  /** Editor marker navigation widget warning heading background. */
  'editorMarkerNavigationWarning.headerBackground'?: ColorConfig;
  /** Editor marker navigation widget info heading background. */
  'editorMarkerNavigationInfo.headerBackground'?: ColorConfig;
}

export interface PeekViewColors {
  /** Color of the peek view borders and arrow. */
  'peekView.border'?: ColorConfig;
  /** Background color of the peek view editor. */
  'peekViewEditor.background'?: ColorConfig;
  /** Background color of the gutter in the peek view editor. */
  'peekViewEditorGutter.background'?: ColorConfig;
  /** Match highlight color in the peek view editor. */
  'peekViewEditor.matchHighlightBackground'?: ColorConfig;
  /** Match highlight border color in the peek view editor. peekViewEditorStickyScroll.background: Background color of sticky scroll in the peek view editor. */
  'peekViewEditor.matchHighlightBorder'?: ColorConfig;
  /** Background color of the peek view result list. */
  'peekViewResult.background'?: ColorConfig;
  /** Foreground color for file nodes in the peek view result list. */
  'peekViewResult.fileForeground'?: ColorConfig;
  /** Foreground color for line nodes in the peek view result list. */
  'peekViewResult.lineForeground'?: ColorConfig;
  /** Match highlight color in the peek view result list. */
  'peekViewResult.matchHighlightBackground'?: ColorConfig;
  /** Background color of the selected entry in the peek view result list. */
  'peekViewResult.selectionBackground'?: ColorConfig;
  /** Foreground color of the selected entry in the peek view result list. */
  'peekViewResult.selectionForeground'?: ColorConfig;
  /** Background color of the peek view title area. */
  'peekViewTitle.background'?: ColorConfig;
  /** Color of the peek view title info. */
  'peekViewTitleDescription.foreground'?: ColorConfig;
  /** Color of the peek view title. */
  'peekViewTitleLabel.foreground'?: ColorConfig;
  /** Background color of sticky scroll in the peek view editor. */
  'peekViewEditorStickyScroll.background'?: ColorConfig;
  /** Background color of the gutter part of sticky scroll in the peek view editor. */
  'peekViewEditorStickyScrollGutter.background'?: ColorConfig;
}

export interface MergeConflictsColors {
  /** Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.currentHeaderBackground'?: ColorConfig;
  /** Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.currentContentBackground'?: ColorConfig;
  /** Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.incomingHeaderBackground'?: ColorConfig;
  /** Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.incomingContentBackground'?: ColorConfig;
  /** Border color on headers and the splitter in inline merge conflicts. */
  'merge.border'?: ColorConfig;
  /** Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.commonContentBackground'?: ColorConfig;
  /** Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.commonHeaderBackground'?: ColorConfig;
  /** Current overview ruler foreground for inline merge conflicts. */
  'editorOverviewRuler.currentContentForeground'?: ColorConfig;
  /** Incoming overview ruler foreground for inline merge conflicts. */
  'editorOverviewRuler.incomingContentForeground'?: ColorConfig;
  /** Common ancestor overview ruler foreground for inline merge conflicts. */
  'editorOverviewRuler.commonContentForeground'?: ColorConfig;
  /** Editor overview ruler decoration color for resolved comments. This color should be opaque. */
  'editorOverviewRuler.commentForeground'?: ColorConfig;
  /** Editor overview ruler decoration color for unresolved comments. This color should be opaque. */
  'editorOverviewRuler.commentUnresolvedForeground'?: ColorConfig;
  /** The background color for changes. */
  'mergeEditor.change.background'?: ColorConfig;
  /** The background color for word changes. */
  'mergeEditor.change.word.background'?: ColorConfig;
  /** The border color of unhandled unfocused conflicts. */
  'mergeEditor.conflict.unhandledUnfocused.border'?: ColorConfig;
  /** The border color of unhandled focused conflicts. */
  'mergeEditor.conflict.unhandledFocused.border'?: ColorConfig;
  /** The border color of handled unfocused conflicts. */
  'mergeEditor.conflict.handledUnfocused.border'?: ColorConfig;
  /** The border color of handled focused conflicts. */
  'mergeEditor.conflict.handledFocused.border'?: ColorConfig;
  /** The foreground color for changes in input 1. */
  'mergeEditor.conflict.handled.minimapOverViewRuler'?: ColorConfig;
  /** The foreground color for changes in input 1. */
  'mergeEditor.conflict.unhandled.minimapOverViewRuler'?: ColorConfig;
  /** The background of the "Conflicting Lines" text. */
  'mergeEditor.conflictingLines.background'?: ColorConfig;
  /** The background color for changes in base. */
  'mergeEditor.changeBase.background'?: ColorConfig;
  /** The background color for word changes in base. */
  'mergeEditor.changeBase.word.background'?: ColorConfig;
  /** The background color of decorations in input 1. */
  'mergeEditor.conflict.input1.background'?: ColorConfig;
  /** The background color of decorations in input 2. */
  'mergeEditor.conflict.input2.background'?: ColorConfig;
}

export interface PanelColors {
  /** Panel background color. */
  'panel.background'?: ColorConfig;
  /** Panel border color to separate the panel from the editor. */
  'panel.border'?: ColorConfig;
  /** Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panel.dropBorder'?: ColorConfig;
  /** Border color for the active panel title. */
  'panelTitle.activeBorder'?: ColorConfig;
  /** Title color for the active panel. */
  'panelTitle.activeForeground'?: ColorConfig;
  /** Title color for the inactive panel. */
  'panelTitle.inactiveForeground'?: ColorConfig;
  /** Panel title border color on the bottom, separating the title from the views. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelTitle.border'?: ColorConfig;
  /** Panel title badge background color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelTitleBadge.background'?: ColorConfig;
  /** Panel title badge foreground color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelTitleBadge.foreground'?: ColorConfig;
  /** Input box border for inputs in the panel. */
  'panelInput.border'?: ColorConfig;
  /** Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSection.border'?: ColorConfig;
  /** Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSection.dropBackground'?: ColorConfig;
  /** Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSectionHeader.background'?: ColorConfig;
  /** Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSectionHeader.foreground'?: ColorConfig;
  /** Background color of sticky scroll in the panel. */
  'panelStickyScroll.background'?: ColorConfig;
  /** Border color of sticky scroll in the panel. */
  'panelStickyScroll.border'?: ColorConfig;
  /** Shadow color of sticky scroll in the panel. */
  'panelStickyScroll.shadow'?: ColorConfig;
  /** Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSectionHeader.border'?: ColorConfig;
  /** Output view background color. */
  'outputView.background'?: ColorConfig;
  /** Output view sticky scroll background color. */
  'outputViewStickyScroll.background'?: ColorConfig;
}

export interface StatusBarColors {
  /** Standard Status Bar background color. */
  'statusBar.background'?: ColorConfig;
  /** Status Bar foreground color. */
  'statusBar.foreground'?: ColorConfig;
  /** Status Bar border color separating the Status Bar and editor. */
  'statusBar.border'?: ColorConfig;
  /** Status Bar background color when a program is being debugged. */
  'statusBar.debuggingBackground'?: ColorConfig;
  /** Status Bar foreground color when a program is being debugged. */
  'statusBar.debuggingForeground'?: ColorConfig;
  /** Status Bar border color separating the Status Bar and editor when a program is being debugged. */
  'statusBar.debuggingBorder'?: ColorConfig;
  /** Status Bar foreground color when no folder is opened. */
  'statusBar.noFolderForeground'?: ColorConfig;
  /** Status Bar background color when no folder is opened. */
  'statusBar.noFolderBackground'?: ColorConfig;
  /** Status Bar border color separating the Status Bar and editor when no folder is opened. */
  'statusBar.noFolderBorder'?: ColorConfig;
  /** Status Bar item background color when clicking. */
  'statusBarItem.activeBackground'?: ColorConfig;
  /** Status bar item foreground color when hovering. The status bar is shown in the bottom of the window. */
  'statusBarItem.hoverForeground'?: ColorConfig;
  /** Status Bar item background color when hovering. */
  'statusBarItem.hoverBackground'?: ColorConfig;
  /** Status Bar prominent items foreground color. */
  'statusBarItem.prominentForeground'?: ColorConfig;
  /** Status Bar prominent items background color. */
  'statusBarItem.prominentBackground'?: ColorConfig;
  /** Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window. */
  'statusBarItem.prominentHoverForeground'?: ColorConfig;
  /** Status Bar prominent items background color when hovering. */
  'statusBarItem.prominentHoverBackground'?: ColorConfig;
  /** Background color for the remote indicator on the status bar. */
  'statusBarItem.remoteBackground'?: ColorConfig;
  /** Foreground color for the remote indicator on the status bar. */
  'statusBarItem.remoteForeground'?: ColorConfig;
  /** Background color for the remote indicator on the status bar when hovering. */
  'statusBarItem.remoteHoverBackground'?: ColorConfig;
  /** Foreground color for the remote indicator on the status bar when hovering. */
  'statusBarItem.remoteHoverForeground'?: ColorConfig;
  /** Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions. */
  'statusBarItem.errorBackground'?: ColorConfig;
  /** Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions. */
  'statusBarItem.errorForeground'?: ColorConfig;
  /** Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. */
  'statusBarItem.errorHoverBackground'?: ColorConfig;
  /** Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. */
  'statusBarItem.errorHoverForeground'?: ColorConfig;
  /** Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningBackground'?: ColorConfig;
  /** Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningForeground'?: ColorConfig;
  /** Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningHoverBackground'?: ColorConfig;
  /** Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningHoverForeground'?: ColorConfig;
  /** Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window. */
  'statusBarItem.compactHoverBackground'?: ColorConfig;
  /** Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window. */
  'statusBarItem.focusBorder'?: ColorConfig;
  /** Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window. */
  'statusBar.focusBorder'?: ColorConfig;
  /** Status bar item background color when the workbench is offline. */
  'statusBarItem.offlineBackground'?: ColorConfig;
  /** Status bar item foreground color when the workbench is offline. */
  'statusBarItem.offlineForeground'?: ColorConfig;
  /** Status bar item foreground hover color when the workbench is offline. */
  'statusBarItem.offlineHoverForeground'?: ColorConfig;
  /** Status bar item background hover color when the workbench is offline. */
  'statusBarItem.offlineHoverBackground'?: ColorConfig;
}

export interface TitleBarColors {
  /** Title Bar background when the window is active. */
  'titleBar.activeBackground'?: ColorConfig;
  /** Title Bar foreground when the window is active. */
  'titleBar.activeForeground'?: ColorConfig;
  /** Title Bar background when the window is inactive. */
  'titleBar.inactiveBackground'?: ColorConfig;
  /** Title Bar foreground when the window is inactive. */
  'titleBar.inactiveForeground'?: ColorConfig;
  /** Title bar border color. */
  'titleBar.border'?: ColorConfig;
}

export interface MenuBarColors {
  /** Foreground color of the selected menu item in the menubar. */
  'menubar.selectionForeground'?: ColorConfig;
  /** Background color of the selected menu item in the menubar. */
  'menubar.selectionBackground'?: ColorConfig;
  /** Border color of the selected menu item in the menubar. */
  'menubar.selectionBorder'?: ColorConfig;
  /** Foreground color of menu items. */
  'menu.foreground'?: ColorConfig;
  /** Background color of menu items. */
  'menu.background'?: ColorConfig;
  /** Foreground color of the selected menu item in menus. */
  'menu.selectionForeground'?: ColorConfig;
  /** Background color of the selected menu item in menus. */
  'menu.selectionBackground'?: ColorConfig;
  /** Border color of the selected menu item in menus. */
  'menu.selectionBorder'?: ColorConfig;
  /** Color of a separator menu item in menus. */
  'menu.separatorBackground'?: ColorConfig;
  /** Border color of menus. */
  'menu.border'?: ColorConfig;
}

export interface CommandCenterColors {
  /** Foreground color of the Command Center. */
  'commandCenter.foreground'?: ColorConfig;
  /** Active foreground color of the Command Center. */
  'commandCenter.activeForeground'?: ColorConfig;
  /** Background color of the Command Center. */
  'commandCenter.background'?: ColorConfig;
  /** Active background color of the Command Center. */
  'commandCenter.activeBackground'?: ColorConfig;
  /** Border color of the Command Center. */
  'commandCenter.border'?: ColorConfig;
  /** Foreground color of the Command Center when the window is inactive. */
  'commandCenter.inactiveForeground'?: ColorConfig;
  /** Border color of the Command Center when the window is inactive. */
  'commandCenter.inactiveBorder'?: ColorConfig;
  /** Active border color of the Command Center. */
  'commandCenter.activeBorder'?: ColorConfig;
  /** Command Center background color when a program is being debugged. */
  'commandCenter.debuggingBackground'?: ColorConfig;
}

export interface NotificationColors {
  /** Notification Center border color. */
  'notificationCenter.border'?: ColorConfig;
  /** Notification Center header foreground color. */
  'notificationCenterHeader.foreground'?: ColorConfig;
  /** Notification Center header background color. */
  'notificationCenterHeader.background'?: ColorConfig;
  /** Notification toast border color. */
  'notificationToast.border'?: ColorConfig;
  /** Notification foreground color. */
  'notifications.foreground'?: ColorConfig;
  /** Notification background color. */
  'notifications.background'?: ColorConfig;
  /** Notification border color separating from other notifications in the Notification Center. */
  'notifications.border'?: ColorConfig;
  /** Notification links foreground color. */
  'notificationLink.foreground'?: ColorConfig;
  /** The color used for the notification error icon. */
  'notificationsErrorIcon.foreground'?: ColorConfig;
  /** The color used for the notification warning icon. */
  'notificationsWarningIcon.foreground'?: ColorConfig;
  /** The color used for the notification info icon. */
  'notificationsInfoIcon.foreground'?: ColorConfig;
}

export interface BannerColors {
  /** Banner background color. */
  'banner.background'?: ColorConfig;
  /** Banner foreground color. */
  'banner.foreground'?: ColorConfig;
  /** Color for the icon in front of the banner text. */
  'banner.iconForeground'?: ColorConfig;
}

export interface ExtensionsColors {
  /** Extension view button foreground color (for example Install button). */
  'extensionButton.prominentForeground'?: ColorConfig;
  /** Extension view button background color. */
  'extensionButton.prominentBackground'?: ColorConfig;
  /** Extension view button background hover color. */
  'extensionButton.prominentHoverBackground'?: ColorConfig;
  /** Button background color for extension actions. */
  'extensionButton.background'?: ColorConfig;
  /** Button foreground color for extension actions. */
  'extensionButton.foreground'?: ColorConfig;
  /** Button background hover color for extension actions. */
  'extensionButton.hoverBackground'?: ColorConfig;
  /** Button separator color for extension actions. */
  'extensionButton.separator'?: ColorConfig;
  /** Background color for the remote badge in the extensions view. */
  'extensionBadge.remoteBackground'?: ColorConfig;
  /** Foreground color for the remote badge in the extensions view. */
  'extensionBadge.remoteForeground'?: ColorConfig;
  /** The icon color for extension ratings. */
  'extensionIcon.starForeground'?: ColorConfig;
  /** The icon color for extension verified publisher. */
  'extensionIcon.verifiedForeground'?: ColorConfig;
  /** The icon color for pre-release extension. */
  'extensionIcon.preReleaseForeground'?: ColorConfig;
  /** The icon color for extension sponsor. */
  'extensionIcon.sponsorForeground'?: ColorConfig;
  /** The icon color for private extensions. */
  'extensionIcon.privateForeground'?: ColorConfig;
}

export interface QuickPickerColors {
  /** Quick picker (Quick Open) color for grouping borders. */
  'pickerGroup.border'?: ColorConfig;
  /** Quick picker (Quick Open) color for grouping labels. */
  'pickerGroup.foreground'?: ColorConfig;
  /** Quick input background color. The quick input widget is the container for views like the color theme picker. */
  'quickInput.background'?: ColorConfig;
  /** Quick input foreground color. The quick input widget is the container for views like the color theme picker. */
  'quickInput.foreground'?: ColorConfig;
  /** Quick picker background color for the focused item. */
  'quickInputList.focusBackground'?: ColorConfig;
  /** Quick picker foreground color for the focused item. */
  'quickInputList.focusForeground'?: ColorConfig;
  /** Quick picker icon foreground color for the focused item. */
  'quickInputList.focusIconForeground'?: ColorConfig;
  /** Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette. */
  'quickInputTitle.background'?: ColorConfig;
}

export interface KeybindingLabelColors {
  /** Keybinding label background color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.background'?: ColorConfig;
  /** Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.foreground'?: ColorConfig;
  /** Keybinding label border color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.border'?: ColorConfig;
  /** Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.bottomBorder'?: ColorConfig;
}

export interface KeyboardShortcutTableColors {
  /** Background color for the keyboard shortcuts table header. */
  'keybindingTable.headerBackground'?: ColorConfig;
  /** Background color for the keyboard shortcuts table alternating rows. */
  'keybindingTable.rowsBackground'?: ColorConfig;
}

export interface IntegratedTerminalColors {
  /** The background of the Integrated Terminal's viewport. */
  'terminal.background'?: ColorConfig;
  /** The color of the border that separates split panes within the terminal. This defaults to panel.border. */
  'terminal.border'?: ColorConfig;
  /** The default foreground color of the Integrated Terminal. */
  'terminal.foreground'?: ColorConfig;
  /** 'Black' ANSI color in the terminal. */
  'terminal.ansiBlack'?: ColorConfig;
  /** 'Blue' ANSI color in the terminal. */
  'terminal.ansiBlue'?: ColorConfig;
  /** 'BrightBlack' ANSI color in the terminal. */
  'terminal.ansiBrightBlack'?: ColorConfig;
  /** 'BrightBlue' ANSI color in the terminal. */
  'terminal.ansiBrightBlue'?: ColorConfig;
  /** 'BrightCyan' ANSI color in the terminal. */
  'terminal.ansiBrightCyan'?: ColorConfig;
  /** 'BrightGreen' ANSI color in the terminal. */
  'terminal.ansiBrightGreen'?: ColorConfig;
  /** 'BrightMagenta' ANSI color in the terminal. */
  'terminal.ansiBrightMagenta'?: ColorConfig;
  /** 'BrightRed' ANSI color in the terminal. */
  'terminal.ansiBrightRed'?: ColorConfig;
  /** 'BrightWhite' ANSI color in the terminal. */
  'terminal.ansiBrightWhite'?: ColorConfig;
  /** 'BrightYellow' ANSI color in the terminal. */
  'terminal.ansiBrightYellow'?: ColorConfig;
  /** 'Cyan' ANSI color in the terminal. */
  'terminal.ansiCyan'?: ColorConfig;
  /** 'Green' ANSI color in the terminal. */
  'terminal.ansiGreen'?: ColorConfig;
  /** 'Magenta' ANSI color in the terminal. */
  'terminal.ansiMagenta'?: ColorConfig;
  /** 'Red' ANSI color in the terminal. */
  'terminal.ansiRed'?: ColorConfig;
  /** 'White' ANSI color in the terminal. */
  'terminal.ansiWhite'?: ColorConfig;
  /** 'Yellow' ANSI color in the terminal. */
  'terminal.ansiYellow'?: ColorConfig;
  /** The selection background color of the terminal. */
  'terminal.selectionBackground'?: ColorConfig;
  /** The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied. */
  'terminal.selectionForeground'?: ColorConfig;
  /** The selection background color of the terminal when it does not have focus. */
  'terminal.inactiveSelectionBackground'?: ColorConfig;
  /** Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content. */
  'terminal.findMatchBackground'?: ColorConfig;
  /** Border color of the current search match in the terminal. */
  'terminal.findMatchBorder'?: ColorConfig;
  /** Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content. */
  'terminal.findMatchHighlightBackground'?: ColorConfig;
  /** Border color of the other search matches in the terminal. */
  'terminal.findMatchHighlightBorder'?: ColorConfig;
  /** Color of the highlight when hovering a link in the terminal. */
  'terminal.hoverHighlightBackground'?: ColorConfig;
  /** The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor. */
  'terminalCursor.background'?: ColorConfig;
  /** The foreground color of the terminal cursor. */
  'terminalCursor.foreground'?: ColorConfig;
  /** The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through. */
  'terminal.dropBackground'?: ColorConfig;
  /** Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder. */
  'terminal.tab.activeBorder'?: ColorConfig;
  /** The default terminal command decoration background color. */
  'terminalCommandDecoration.defaultBackground'?: ColorConfig;
  /** The terminal command decoration background color for successful commands. */
  'terminalCommandDecoration.successBackground'?: ColorConfig;
  /** The terminal command decoration background color for error commands. */
  'terminalCommandDecoration.errorBackground'?: ColorConfig;
  /** The overview ruler cursor color. */
  'terminalOverviewRuler.cursorForeground'?: ColorConfig;
  /** Overview ruler marker color for find matches in the terminal. */
  'terminalOverviewRuler.findMatchForeground'?: ColorConfig;
  /** The background color of the sticky scroll overlay in the terminal. */
  'terminalStickyScroll.background'?: ColorConfig;
  /** The border of the sticky scroll overlay in the terminal. */
  'terminalStickyScroll.border'?: ColorConfig;
  /** The background color of the sticky scroll overlay in the terminal when hovered. */
  'terminalStickyScrollHover.background'?: ColorConfig;
  /** Foreground color of the terminal initial hint. */
  'terminal.initialHintForeground'?: ColorConfig;
  /** The overview ruler left-side border color. */
  'terminalOverviewRuler.border'?: ColorConfig;
  /** The foreground color of the terminal command guide that appears to the left of a command and its output on hover. */
  'terminalCommandGuide.foreground'?: ColorConfig;
  /** The foreground color for an alias icon. These icons will appear in the terminal suggest widget */
  'terminalSymbolIcon.aliasForeground'?: ColorConfig;
  /** The foreground color for an flag icon. These icons will appear in the terminal suggest widget */
  'terminalSymbolIcon.flagForeground'?: ColorConfig;
  /** The foreground color for an option icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.optionForeground'?: ColorConfig;
  /** The foreground color for an enum member icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.optionValueForeground'?: ColorConfig;
  /** The foreground color for a method icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.methodForeground'?: ColorConfig;
  /** The foreground color for an argument icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.argumentForeground'?: ColorConfig;
  /** The foreground color for an inline suggestion icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.inlineSuggestionForeground'?: ColorConfig;
  /** The foreground color for a file icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.fileForeground'?: ColorConfig;
  /** The foreground color for a folder icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.folderForeground'?: ColorConfig;
  /** The foreground color for a symbolic link file icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.symbolicLinkFileForeground'?: ColorConfig;
  /** The foreground color for a symbolic link folder icon. These icons will appear in the terminal suggest widget. */
  'terminalSymbolIcon.symbolicLinkFolderForeground'?: ColorConfig;
}

export interface DebugColors {
  /** Debug toolbar background color. */
  'debugToolBar.background'?: ColorConfig;
  /** Debug toolbar border color. */
  'debugToolBar.border'?: ColorConfig;
  /** Background color of the top stack frame highlight in the editor. */
  'editor.stackFrameHighlightBackground'?: ColorConfig;
  /** Background color of the focused stack frame highlight in the editor. */
  'editor.focusedStackFrameHighlightBackground'?: ColorConfig;
  /** Color for the debug inline value text. */
  'editor.inlineValuesForeground'?: ColorConfig;
  /** Color for the debug inline value background. */
  'editor.inlineValuesBackground'?: ColorConfig;
  /** Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception. */
  'debugView.exceptionLabelForeground'?: ColorConfig;
  /** Background color for a label shown in the CALL STACK view when the debugger breaks on an exception. */
  'debugView.exceptionLabelBackground'?: ColorConfig;
  /** Foreground color for a label in the CALL STACK view showing the current session's or thread's state. */
  'debugView.stateLabelForeground'?: ColorConfig;
  /** Background color for a label in the CALL STACK view showing the current session's or thread's state. */
  'debugView.stateLabelBackground'?: ColorConfig;
  /** Color used to highlight value changes in the debug views (such as in the Variables view). */
  'debugView.valueChangedHighlight'?: ColorConfig;
  /** Foreground color for the token names shown in debug views (such as in the Variables or Watch view). */
  'debugTokenExpression.name'?: ColorConfig;
  /** Foreground color for the token values shown in debug views. */
  'debugTokenExpression.value'?: ColorConfig;
  /** Foreground color for strings in debug views. */
  'debugTokenExpression.string'?: ColorConfig;
  /** Foreground color for booleans in debug views. */
  'debugTokenExpression.boolean'?: ColorConfig;
  /** Foreground color for numbers in debug views. */
  'debugTokenExpression.number'?: ColorConfig;
  /** Foreground color for expression errors in debug views. */
  'debugTokenExpression.error'?: ColorConfig;
  /** Foreground color for the token types shown in the debug views (ie. the Variables or Watch view). */
  'debugTokenExpression.type'?: ColorConfig;
}

export interface TestingColors {
  /** Color for 'run' icons in the editor. */
  'testing.runAction'?: ColorConfig;
  /** Color for the 'Errored' icon in the test explorer. */
  'testing.iconErrored'?: ColorConfig;
  /** Color for the 'failed' icon in the test explorer. */
  'testing.iconFailed'?: ColorConfig;
  /** Color for the 'passed' icon in the test explorer. */
  'testing.iconPassed'?: ColorConfig;
  /** Color for the 'Queued' icon in the test explorer. */
  'testing.iconQueued'?: ColorConfig;
  /** Color for the 'Unset' icon in the test explorer. */
  'testing.iconUnset'?: ColorConfig;
  /** Color for the 'Skipped' icon in the test explorer. */
  'testing.iconSkipped'?: ColorConfig;
  /** Retired color for the 'Errored' icon in the test explorer. */
  'testing.iconErrored.retired'?: ColorConfig;
  /** Retired color for the 'failed' icon in the test explorer. */
  'testing.iconFailed.retired'?: ColorConfig;
  /** Retired color for the 'passed' icon in the test explorer. */
  'testing.iconPassed.retired'?: ColorConfig;
  /** Retired color for the 'Queued' icon in the test explorer. */
  'testing.iconQueued.retired'?: ColorConfig;
  /** Retired color for the 'Unset' icon in the test explorer. */
  'testing.iconUnset.retired'?: ColorConfig;
  /** Retired color for the 'Skipped' icon in the test explorer. */
  'testing.iconSkipped.retired'?: ColorConfig;
  /** Color of the peek view borders and arrow. */
  'testing.peekBorder'?: ColorConfig;
  /** Color of the peek view borders and arrow. */
  'testing.peekHeaderBackground'?: ColorConfig;
  /** Text color of test error messages shown inline in the editor. */
  'testing.message.error.decorationForeground'?: ColorConfig;
  /** Margin color beside error messages shown inline in the editor. */
  'testing.message.error.lineBackground'?: ColorConfig;
  /** Text color of test info messages shown inline in the editor. */
  'testing.message.info.decorationForeground'?: ColorConfig;
  /** Margin color beside info messages shown inline in the editor. */
  'testing.message.info.lineBackground'?: ColorConfig;
  /** Color of the peek view borders and arrow when peeking a logged message. */
  'testing.messagePeekBorder'?: ColorConfig;
  /** Color of the peek view borders and arrow when peeking a logged message. */
  'testing.messagePeekHeaderBackground'?: ColorConfig;
  /** Background color of text that was covered. */
  'testing.coveredBackground'?: ColorConfig;
  /** Border color of text that was covered. */
  'testing.coveredBorder'?: ColorConfig;
  /** Gutter color of regions where code was covered. */
  'testing.coveredGutterBackground'?: ColorConfig;
  /** Background of the widget shown for an uncovered branch. */
  'testing.uncoveredBranchBackground'?: ColorConfig;
  /** Background color of text that was not covered. */
  'testing.uncoveredBackground'?: ColorConfig;
  /** Border color of text that was not covered. */
  'testing.uncoveredBorder'?: ColorConfig;
  /** Gutter color of regions where code not covered. */
  'testing.uncoveredGutterBackground'?: ColorConfig;
  /** Background for the badge indicating execution count */
  'testing.coverCountBadgeBackground'?: ColorConfig;
  /** Foreground for the badge indicating execution count */
  'testing.coverCountBadgeForeground'?: ColorConfig;
  /** Background color of test error messages shown inline in the editor. */
  'testing.message.error.badgeBackground'?: ColorConfig;
  /** Border color of test error messages shown inline in the editor. */
  'testing.message.error.badgeBorder'?: ColorConfig;
  /** Text color of test error messages shown inline in the editor. */
  'testing.message.error.badgeForeground'?: ColorConfig;
}

export interface WelcomePageColors {
  /** Background color for the Welcome page. */
  'welcomePage.background'?: ColorConfig;
  /** Foreground color for the Welcome page progress bars. */
  'welcomePage.progress.background'?: ColorConfig;
  /** Background color for the Welcome page progress bars. */
  'welcomePage.progress.foreground'?: ColorConfig;
  /** Background color for the tiles on the Welcome page. */
  'welcomePage.tileBackground'?: ColorConfig;
  /** Hover background color for the tiles on the Welcome page. */
  'welcomePage.tileHoverBackground'?: ColorConfig;
  /** Border color for the tiles on the Welcome page. */
  'welcomePage.tileBorder'?: ColorConfig;
  /** Background color for the embedded editors on the Interactive Playground. */
  'walkThrough.embeddedEditorBackground'?: ColorConfig;
  /** Foreground color of the heading of each walkthrough step. */
  'walkthrough.stepTitle.foreground'?: ColorConfig;
}

export interface GitColors {
  /** Color for added Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.addedResourceForeground'?: ColorConfig;
  /** Color for modified Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.modifiedResourceForeground'?: ColorConfig;
  /** Color for deleted Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.deletedResourceForeground'?: ColorConfig;
  /** Color for renamed or copied Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.renamedResourceForeground'?: ColorConfig;
  /** Color for staged modifications git decorations. Used for file labels and the SCM viewlet. */
  'gitDecoration.stageModifiedResourceForeground'?: ColorConfig;
  /** Color for staged deletions git decorations. Used for file labels and the SCM viewlet. */
  'gitDecoration.stageDeletedResourceForeground'?: ColorConfig;
  /** Color for untracked Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.untrackedResourceForeground'?: ColorConfig;
  /** Color for ignored Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.ignoredResourceForeground'?: ColorConfig;
  /** Color for conflicting Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.conflictingResourceForeground'?: ColorConfig;
  /** Color for submodule resources. */
  'gitDecoration.submoduleResourceForeground'?: ColorConfig;
  /** Color for the blame editor decoration. */
  'git.blame.editorDecorationForeground'?: ColorConfig;
}

export interface SourceCodeGraphColors {
  /** History item hover label foreground color. */
  'scmGraph.historyItemHoverLabelForeground'?: ColorConfig;
  /** Source control graph foreground color (1). */
  'scmGraph.foreground1'?: ColorConfig;
  /** Source control graph foreground color (2). */
  'scmGraph.foreground2'?: ColorConfig;
  /** Source control graph foreground color (3). */
  'scmGraph.foreground3'?: ColorConfig;
  /** Source control graph foreground color (4). */
  'scmGraph.foreground4'?: ColorConfig;
  /** Source control graph foreground color (5). */
  'scmGraph.foreground5'?: ColorConfig;
  /** History item hover additions foreground color. */
  'scmGraph.historyItemHoverAdditionsForeground'?: ColorConfig;
  /** History item hover deletions foreground color. */
  'scmGraph.historyItemHoverDeletionsForeground'?: ColorConfig;
  /** History item reference color. */
  'scmGraph.historyItemRefColor'?: ColorConfig;
  /** History item remote reference color. */
  'scmGraph.historyItemRemoteRefColor'?: ColorConfig;
  /** History item base reference color. */
  'scmGraph.historyItemBaseRefColor'?: ColorConfig;
  /** History item hover default label foreground color. */
  'scmGraph.historyItemHoverDefaultLabelForeground'?: ColorConfig;
  /** History item hover default label background color. */
  'scmGraph.historyItemHoverDefaultLabelBackground'?: ColorConfig;
}

export interface SettingsEditorColors {
  /** The foreground color for a section header or active title. */
  'settings.headerForeground'?: ColorConfig;
  /** The line that indicates a modified setting. */
  'settings.modifiedItemIndicator'?: ColorConfig;
  /** Dropdown background. */
  'settings.dropdownBackground'?: ColorConfig;
  /** Dropdown foreground. */
  'settings.dropdownForeground'?: ColorConfig;
  /** Dropdown border. */
  'settings.dropdownBorder'?: ColorConfig;
  /** Dropdown list border. */
  'settings.dropdownListBorder'?: ColorConfig;
  /** Checkbox background. */
  'settings.checkboxBackground'?: ColorConfig;
  /** Checkbox foreground. */
  'settings.checkboxForeground'?: ColorConfig;
  /** Checkbox border. */
  'settings.checkboxBorder'?: ColorConfig;
  /** The background color of a settings row when hovered. */
  'settings.rowHoverBackground'?: ColorConfig;
  /** Text input box background. */
  'settings.textInputBackground'?: ColorConfig;
  /** Text input box foreground. */
  'settings.textInputForeground'?: ColorConfig;
  /** Text input box border. */
  'settings.textInputBorder'?: ColorConfig;
  /** Number input box background. */
  'settings.numberInputBackground'?: ColorConfig;
  /** Number input box foreground. */
  'settings.numberInputForeground'?: ColorConfig;
  /** Number input box border. */
  'settings.numberInputBorder'?: ColorConfig;
  /** Background color of a focused setting row. */
  'settings.focusedRowBackground'?: ColorConfig;
  /** The color of the row's top and bottom border when the row is focused. */
  'settings.focusedRowBorder'?: ColorConfig;
  /** The color of the header container border. */
  'settings.headerBorder'?: ColorConfig;
  /** The color of the Settings editor split-view sash border. */
  'settings.sashBorder'?: ColorConfig;
  /** The foreground color for a section header or hovered title. */
  'settings.settingsHeaderHoverForeground'?: ColorConfig;
}

export interface BreadcrumbsColors {
  /** Color of breadcrumb items. */
  'breadcrumb.foreground'?: ColorConfig;
  /** Background color of breadcrumb items. */
  'breadcrumb.background'?: ColorConfig;
  /** Color of focused breadcrumb items. */
  'breadcrumb.focusForeground'?: ColorConfig;
  /** Color of selected breadcrumb items. */
  'breadcrumb.activeSelectionForeground'?: ColorConfig;
  /** Background color of breadcrumb item picker. */
  'breadcrumbPicker.background'?: ColorConfig;
}

export interface SnippetsColors {
  /** Highlight background color of a snippet tabstop. */
  'editor.snippetTabstopHighlightBackground'?: ColorConfig;
  /** Highlight border color of a snippet tabstop. */
  'editor.snippetTabstopHighlightBorder'?: ColorConfig;
  /** Highlight background color of the final tabstop of a snippet. */
  'editor.snippetFinalTabstopHighlightBackground'?: ColorConfig;
  /** Highlight border color of the final tabstop of a snippet. */
  'editor.snippetFinalTabstopHighlightBorder'?: ColorConfig;
}

export interface SymbolIconsColors {
  /** The foreground color for array symbols. */
  'symbolIcon.arrayForeground'?: ColorConfig;
  /** The foreground color for boolean symbols. */
  'symbolIcon.booleanForeground'?: ColorConfig;
  /** The foreground color for class symbols. */
  'symbolIcon.classForeground'?: ColorConfig;
  /** The foreground color for color symbols. */
  'symbolIcon.colorForeground'?: ColorConfig;
  /** The foreground color for constant symbols. */
  'symbolIcon.constantForeground'?: ColorConfig;
  /** The foreground color for constructor symbols. */
  'symbolIcon.constructorForeground'?: ColorConfig;
  /** The foreground color for enumerator symbols. */
  'symbolIcon.enumeratorForeground'?: ColorConfig;
  /** The foreground color for enumerator member symbols. */
  'symbolIcon.enumeratorMemberForeground'?: ColorConfig;
  /** The foreground color for event symbols. */
  'symbolIcon.eventForeground'?: ColorConfig;
  /** The foreground color for field symbols. */
  'symbolIcon.fieldForeground'?: ColorConfig;
  /** The foreground color for file symbols. */
  'symbolIcon.fileForeground'?: ColorConfig;
  /** The foreground color for folder symbols. */
  'symbolIcon.folderForeground'?: ColorConfig;
  /** The foreground color for function symbols. */
  'symbolIcon.functionForeground'?: ColorConfig;
  /** The foreground color for interface symbols. */
  'symbolIcon.interfaceForeground'?: ColorConfig;
  /** The foreground color for key symbols. */
  'symbolIcon.keyForeground'?: ColorConfig;
  /** The foreground color for keyword symbols. */
  'symbolIcon.keywordForeground'?: ColorConfig;
  /** The foreground color for method symbols. */
  'symbolIcon.methodForeground'?: ColorConfig;
  /** The foreground color for module symbols. */
  'symbolIcon.moduleForeground'?: ColorConfig;
  /** The foreground color for namespace symbols. */
  'symbolIcon.namespaceForeground'?: ColorConfig;
  /** The foreground color for null symbols. */
  'symbolIcon.nullForeground'?: ColorConfig;
  /** The foreground color for number symbols. */
  'symbolIcon.numberForeground'?: ColorConfig;
  /** The foreground color for object symbols. */
  'symbolIcon.objectForeground'?: ColorConfig;
  /** The foreground color for operator symbols. */
  'symbolIcon.operatorForeground'?: ColorConfig;
  /** The foreground color for package symbols. */
  'symbolIcon.packageForeground'?: ColorConfig;
  /** The foreground color for property symbols. */
  'symbolIcon.propertyForeground'?: ColorConfig;
  /** The foreground color for reference symbols. */
  'symbolIcon.referenceForeground'?: ColorConfig;
  /** The foreground color for snippet symbols. */
  'symbolIcon.snippetForeground'?: ColorConfig;
  /** The foreground color for string symbols. */
  'symbolIcon.stringForeground'?: ColorConfig;
  /** The foreground color for struct symbols. */
  'symbolIcon.structForeground'?: ColorConfig;
  /** The foreground color for text symbols. */
  'symbolIcon.textForeground'?: ColorConfig;
  /** The foreground color for type parameter symbols. */
  'symbolIcon.typeParameterForeground'?: ColorConfig;
  /** The foreground color for unit symbols. */
  'symbolIcon.unitForeground'?: ColorConfig;
  /** The foreground color for variable symbols. */
  'symbolIcon.variableForeground'?: ColorConfig;
}

export interface DebugIconsColors {
  /** Icon color for breakpoints. */
  'debugIcon.breakpointForeground'?: ColorConfig;
  /** Icon color for disabled breakpoints. */
  'debugIcon.breakpointDisabledForeground'?: ColorConfig;
  /** Icon color for unverified breakpoints. */
  'debugIcon.breakpointUnverifiedForeground'?: ColorConfig;
  /** Icon color for the current breakpoint stack frame. */
  'debugIcon.breakpointCurrentStackframeForeground'?: ColorConfig;
  /** Icon color for all breakpoint stack frames. */
  'debugIcon.breakpointStackframeForeground'?: ColorConfig;
  /** Debug toolbar icon for start debugging. */
  'debugIcon.startForeground'?: ColorConfig;
  /** Debug toolbar icon for pause. */
  'debugIcon.pauseForeground'?: ColorConfig;
  /** Debug toolbar icon for stop. */
  'debugIcon.stopForeground'?: ColorConfig;
  /** Debug toolbar icon for disconnect. */
  'debugIcon.disconnectForeground'?: ColorConfig;
  /** Debug toolbar icon for restart. */
  'debugIcon.restartForeground'?: ColorConfig;
  /** Debug toolbar icon for step over. */
  'debugIcon.stepOverForeground'?: ColorConfig;
  /** Debug toolbar icon for step into. */
  'debugIcon.stepIntoForeground'?: ColorConfig;
  /** Debug toolbar icon for step over. */
  'debugIcon.stepOutForeground'?: ColorConfig;
  /** Debug toolbar icon for continue. */
  'debugIcon.continueForeground'?: ColorConfig;
  /** Debug toolbar icon for step back. */
  'debugIcon.stepBackForeground'?: ColorConfig;
  /** Foreground color for info messages in debug REPL console. */
  'debugConsole.infoForeground'?: ColorConfig;
  /** Foreground color for warning messages in debug REPL console. */
  'debugConsole.warningForeground'?: ColorConfig;
  /** Foreground color for error messages in debug REPL console. */
  'debugConsole.errorForeground'?: ColorConfig;
  /** Foreground color for source filenames in debug REPL console. */
  'debugConsole.sourceForeground'?: ColorConfig;
  /** Foreground color for debug console input marker icon. */
  'debugConsoleInputIcon.foreground'?: ColorConfig;
}

export interface NotebookColors {
  /** Notebook background color. */
  'notebook.editorBackground'?: ColorConfig;
  /** The border color for notebook cells. */
  'notebook.cellBorderColor'?: ColorConfig;
  /** The background color of a cell when the cell is hovered. */
  'notebook.cellHoverBackground'?: ColorConfig;
  /** The color of the notebook cell insertion indicator. */
  'notebook.cellInsertionIndicator'?: ColorConfig;
  /** The background color of notebook cell status bar items. */
  'notebook.cellStatusBarItemHoverBackground'?: ColorConfig;
  /** The color of the separator in the cell bottom toolbar */
  'notebook.cellToolbarSeparator'?: ColorConfig;
  /** The color of the notebook cell editor background */
  'notebook.cellEditorBackground'?: ColorConfig;
  /** The background color of a cell when the cell is focused. */
  'notebook.focusedCellBackground'?: ColorConfig;
  /** The color of the cell's focus indicator borders when the cell is focused. */
  'notebook.focusedCellBorder'?: ColorConfig;
  /** The color of the notebook cell editor border. */
  'notebook.focusedEditorBorder'?: ColorConfig;
  /** The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor. */
  'notebook.inactiveFocusedCellBorder'?: ColorConfig;
  /** The color of the cell's borders when multiple cells are selected. */
  'notebook.inactiveSelectedCellBorder'?: ColorConfig;
  /** The Color of the notebook output container background. */
  'notebook.outputContainerBackgroundColor'?: ColorConfig;
  /** The border color of the notebook output container. */
  'notebook.outputContainerBorderColor'?: ColorConfig;
  /** The background color of a cell when the cell is selected. */
  'notebook.selectedCellBackground'?: ColorConfig;
  /** The color of the cell's top and bottom border when the cell is selected but not focused. */
  'notebook.selectedCellBorder'?: ColorConfig;
  /** Background color of highlighted cell */
  'notebook.symbolHighlightBackground'?: ColorConfig;
  /** Notebook scrollbar slider background color when clicked on. */
  'notebookScrollbarSlider.activeBackground'?: ColorConfig;
  /** Notebook scrollbar slider background color. */
  'notebookScrollbarSlider.background'?: ColorConfig;
  /** Notebook scrollbar slider background color when hovering. */
  'notebookScrollbarSlider.hoverBackground'?: ColorConfig;
  /** The error icon color of notebook cells in the cell status bar. */
  'notebookStatusErrorIcon.foreground'?: ColorConfig;
  /** The running icon color of notebook cells in the cell status bar. */
  'notebookStatusRunningIcon.foreground'?: ColorConfig;
  /** The success icon color of notebook cells in the cell status bar. */
  'notebookStatusSuccessIcon.foreground'?: ColorConfig;
  /** The color of the running cell decoration in the notebook editor overview ruler. */
  'notebookEditorOverviewRuler.runningCellForeground'?: ColorConfig;
}

export interface ChartColors {
  /** Contrast color for text in charts. */
  'charts.foreground'?: ColorConfig;
  /** Color for lines in charts. */
  'charts.lines'?: ColorConfig;
  /** Color for red elements in charts. */
  'charts.red'?: ColorConfig;
  /** Color for blue elements in charts. */
  'charts.blue'?: ColorConfig;
  /** Color for yellow elements in charts. */
  'charts.yellow'?: ColorConfig;
  /** Color for orange elements in charts. */
  'charts.orange'?: ColorConfig;
  /** Color for green elements in charts. */
  'charts.green'?: ColorConfig;
  /** Color for purple elements in charts. */
  'charts.purple'?: ColorConfig;
  /** Line color for the chart. */
  'chart.line'?: ColorConfig;
  /** Axis color for the chart. */
  'chart.axis'?: ColorConfig;
  /** Guide line for the chart. */
  'chart.guide'?: ColorConfig;
}

export interface PortsColors {
  /** The color of the icon for a port that has an associated running process. */
  'ports.iconRunningProcessForeground'?: ColorConfig;
}

export interface CommentsViewColors {
  /** Icon color for resolved comments. */
  'commentsView.resolvedIcon'?: ColorConfig;
  /** Icon color for unresolved comments. */
  'commentsView.unresolvedIcon'?: ColorConfig;
}

export interface ActionBarColor {
  /** Background color for toggled action items in action bar. */
  'actionBar.toggledBackground'?: ColorConfig;
}

export interface SimpleFindWidgetColors {
  /** Border color of the sash border. */
  'simpleFindWidget.sashBorder'?: ColorConfig;
}

export interface GaugeColors {
  /** Gauge background color. */
  'gauge.background'?: ColorConfig;
  /** Gauge foreground color. */
  'gauge.foreground'?: ColorConfig;
  /** Gauge border color. */
  'gauge.border'?: ColorConfig;
  /** Gauge warning background color. */
  'gauge.warningBackground'?: ColorConfig;
  /** Gauge warning foreground color. */
  'gauge.warningForeground'?: ColorConfig;
  /** Gauge error background color. */
  'gauge.errorBackground'?: ColorConfig;
  /** Gauge error foreground color. */
  'gauge.errorForeground'?: ColorConfig;
}

/**
 * Colors in the workbench
 * doc: {@link https://code.visualstudio.com/api/references/theme-color}
 * src: {@link https://github.com/microsoft/vscode/commits/main/src/vs/platform/theme/common/colorRegistry.ts}
 */
export interface VSCodeTokens
  extends ContrastColors,
    BaseColors,
    WindowBorder,
    TextColors,
    ActionColors,
    ButtonControl,
    DropdownControl,
    InputControl,
    ScrollbarControl,
    Badge,
    ProgressBar,
    ListsAndTrees,
    ActivityBar,
    Profile,
    SideBar,
    Minimap,
    EditorGroupsAndTabs,
    EditorColors,
    DiffEditorColor,
    ChatColors,
    InlineChatColors,
    PanelChatColor,
    EditorWidgetColor,
    PeekViewColors,
    MergeConflictsColors,
    PanelColors,
    StatusBarColors,
    TitleBarColors,
    MenuBarColors,
    CommandCenterColors,
    NotificationColors,
    BannerColors,
    ExtensionsColors,
    QuickPickerColors,
    KeybindingLabelColors,
    KeyboardShortcutTableColors,
    IntegratedTerminalColors,
    DebugColors,
    TestingColors,
    WelcomePageColors,
    GitColors,
    SourceCodeGraphColors,
    SettingsEditorColors,
    BreadcrumbsColors,
    SnippetsColors,
    SymbolIconsColors,
    DebugIconsColors,
    NotebookColors,
    ChartColors,
    PortsColors,
    CommentsViewColors,
    ActionBarColor,
    SimpleFindWidgetColors,
    GaugeColors {}
