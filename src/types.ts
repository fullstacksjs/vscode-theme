export interface TokenColorSetting {
  fontStyle?:
    | ''
    | 'bold'
    | 'bold strikethrough'
    | 'bold underline'
    | 'bold underline strikethrough'
    | 'italic'
    | 'italic bold'
    | 'italic bold strikethrough'
    | 'italic bold underline'
    | 'italic bold underline strikethrough'
    | 'italic strikethrough'
    | 'italic underline'
    | 'italic underline strikethrough'
    | 'strikethrough'
    | 'underline'
    | 'underline strikethrough';
  foreground?: string;
}

export interface TokenColor {
  /** Description of the rule. */
  name?: string;
  /** Scope selector against which this rule matches. */
  scope: string | string[];
  /** Colors and styles for the token. */
  settings: TokenColorSetting;
}

export interface ContrastColors {
  /** An extra border around active elements to separate them from others for greater contrast. */
  contrastActiveBorder?: string;
  /** An extra border around elements to separate them from others for greater contrast. */
  contrastBorder?: string;
}

export interface BaseColors {
  /** Overall border color for focused elements. This color is only used if not overridden by a component. */
  'focusBorder'?: string;
  /** Overall foreground color. This color is only used if not overridden by a component. */
  'foreground'?: string;
  /** Overall foreground for disabled elements. This color is only used if not overridden by a component. */
  'disabledForeground'?: string;
  /** Shadow color of widgets such as Find/Replace inside the editor. */
  'widget.shadow'?: string;
  /** Border color of widgets such as find/replace inside the editor. */
  'widget.border'?: string;
  /** Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal). */
  'selection.background'?: string;
  /** Foreground color for description text providing additional information, for example for a label. */
  'descriptionForeground'?: string;
  /** Overall foreground color for error messages (this color is only used if not overridden by a component). */
  'errorForeground'?: string;
  /** The default color for icons in the workbench. */
  'icon.foreground'?: string;
  /** The hover border color for draggable sashes. */
  'sash.hoverBorder'?: string;
}

export interface WindowBorder {
  /** Border color for the active (focused) window. */
  'window.activeBorder'?: string;
  /** Border color for the inactive (unfocused) windows. */
  'window.inactiveBorder'?: string;
}

export interface TextColors {
  /** Background color for block quotes in text. */
  'textBlockQuote.background'?: string;
  /** Border color for block quotes in text. */
  'textBlockQuote.border'?: string;
  /** Background color for code blocks in text. */
  'textCodeBlock.background'?: string;
  /** Foreground color for links in text when clicked on and on mouse hover. */
  'textLink.activeForeground'?: string;
  /** Foreground color for links in text. */
  'textLink.foreground'?: string;
  /** Foreground color for preformatted text segments. */
  'textPreformat.foreground'?: string;
  /** Background color for preformatted text segments. */
  'textPreformat.background'?: string;
  /** Color for text separators. */
  'textSeparator.foreground'?: string;
}

export interface ActionColors {
  /** Toolbar background when hovering over actions using the mouse */
  'toolbar.hoverBackground'?: string;
  /** Toolbar outline when hovering over actions using the mouse */
  'toolbar.hoverOutline'?: string;
  /** Toolbar background when holding the mouse over actions */
  'toolbar.activeBackground'?: string;
  /** Action List background color. */
  'editorActionList.background'?: string;
  /** Action List foreground color. */
  'editorActionList.foreground'?: string;
  /** Action List foreground color for the focused item. */
  'editorActionList.focusForeground'?: string;
  /** Action List background color for the focused item. */
  'editorActionList.focusBackground'?: string;
}

export interface ButtonControl {
  /** Button background color. */
  'button.background'?: string;
  /** Button foreground color. */
  'button.foreground'?: string;
  /** Button border color. */
  'button.border'?: string;
  /** Button background color when hovering. */
  'button.hoverBackground'?: string;
  /** Secondary button foreground color. */
  'button.secondaryForeground'?: string;
  /** Secondary button background color. */
  'button.secondaryBackground'?: string;
  /** Secondary button background color when hovering. */
  'button.secondaryHoverBackground'?: string;
  /** Background color of checkbox widget. */
  'checkbox.background'?: string;
  /** Background color of checkbox widget when the element it's in is selected. */
  'checkbox.selectBackground'?: string;
  /** Foreground color of checkbox widget. */
  'checkbox.foreground'?: string;
  /** Border color of checkbox widget. */
  'checkbox.border'?: string;
  /** Border color of checkbox widget when the element it's in is selected. */
  'checkbox.selectBorder'?: string;
  /** Foreground color of active radio option. */
  'radio.activeForeground'?: string;
  /** Background color of active radio option. */
  'radio.activeBackground'?: string;
  /** Border color of the active radio option. */
  'radio.activeBorder'?: string;
  /** Foreground color of inactive radio option. */
  'radio.inactiveForeground'?: string;
  /** Background color of inactive radio option. */
  'radio.inactiveBackground'?: string;
  /** Border color of the inactive radio option. */
  'radio.inactiveBorder'?: string;
  /** Background color of inactive active radio option when hovering. */
  'radio.inactiveHoverBackground'?: string;
}

export interface DropdownControl {
  /** Dropdown background. */
  'dropdown.background'?: string;
  /** Dropdown list background. */
  'dropdown.listBackground'?: string;
  /** Dropdown border. */
  'dropdown.border'?: string;
  /** Dropdown foreground. */
  'dropdown.foreground'?: string;
}

export interface InputControl {
  /** Input box background. */
  'input.background'?: string;
  /** Input box border. */
  'input.border'?: string;
  /** Input box foreground. */
  'input.foreground'?: string;
  /** Input box foreground color for placeholder text. */
  'input.placeholderForeground'?: string;
  /** Background color of activated options in input fields. */
  'inputOption.activeBackground'?: string;
  /** Border color of activated options in input fields. */
  'inputOption.activeBorder'?: string;
  /** Foreground color of activated options in input fields. */
  'inputOption.activeForeground'?: string;
  /** Background color of activated options in input fields. */
  'inputOption.hoverBackground'?: string;
  /** Input validation background color for error severity. */
  'inputValidation.errorBackground'?: string;
  /** Input validation foreground color for error severity. */
  'inputValidation.errorForeground'?: string;
  /** Input validation border color for error severity. */
  'inputValidation.errorBorder'?: string;
  /** Input validation background color for information severity. */
  'inputValidation.infoBackground'?: string;
  /** Input validation foreground color for information severity. */
  'inputValidation.infoForeground'?: string;
  /** Input validation border color for information severity. */
  'inputValidation.infoBorder'?: string;
  /** Input validation background color for information warning. */
  'inputValidation.warningBackground'?: string;
  /** Input validation foreground color for warning severity. */
  'inputValidation.warningForeground'?: string;
  /** Input validation border color for warning severity. */
  'inputValidation.warningBorder'?: string;
}

export interface ScrollbarControl {
  /** Scrollbar slider shadow to indicate that the view is scrolled. */
  'scrollbar.shadow'?: string;
  /** Scrollbar slider background color when clicked on. */
  'scrollbarSlider.activeBackground'?: string;
  /** Scrollbar slider background color. */
  'scrollbarSlider.background'?: string;
  /** Scrollbar slider background color when hovering. */
  'scrollbarSlider.hoverBackground'?: string;
}

export interface Badge {
  /** Badge foreground color. */
  'badge.foreground'?: string;
  /** Badge background color. */
  'badge.background'?: string;
}

export interface ProgressBar {
  /** Background color of the progress bar shown for long running operations. */
  'progressBar.background'?: string;
}

export interface ListsAndTrees {
  /** List/Tree background color for the selected item when the list/tree is active. */
  'list.activeSelectionBackground'?: string;
  /** List/Tree foreground color for the selected item when the list/tree is active. */
  'list.activeSelectionForeground'?: string;
  /** List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not. */
  'list.activeSelectionIconForeground'?: string;
  /** List/Tree drag and drop background when moving items around using the mouse. */
  'list.dropBackground'?: string;
  /** List/Tree background color for the focused item when the list/tree is active. */
  'list.focusBackground'?: string;
  /** List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not. */
  'list.focusForeground'?: string;
  /** List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree. */
  'list.focusHighlightForeground'?: string;
  /** List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not. */
  'list.focusOutline'?: string;
  /** List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not. */
  'list.focusAndSelectionOutline'?: string;
  /** List/Tree foreground color of the match highlights when searching inside the list/tree. */
  'list.highlightForeground'?: string;
  /** List/Tree background when hovering over items using the mouse. */
  'list.hoverBackground'?: string;
  /** List/Tree foreground when hovering over items using the mouse. */
  'list.hoverForeground'?: string;
  /** List/Tree background color for the selected item when the list/tree is inactive. */
  'list.inactiveSelectionBackground'?: string;
  /** List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not. */
  'list.inactiveSelectionForeground'?: string;
  /** List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not. */
  'list.inactiveSelectionIconForeground'?: string;
  /** List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists. */
  'list.inactiveFocusBackground'?: string;
  /** List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not. */
  'list.inactiveFocusOutline'?: string;
  /** List/Tree foreground color for invalid items, for example an unresolved root in explorer. */
  'list.invalidItemForeground'?: string;
  /** Foreground color of list items containing errors. */
  'list.errorForeground'?: string;
  /** Foreground color of list items containing warnings. */
  'list.warningForeground'?: string;
  /** List/Tree Filter background color of typed text when searching inside the list/tree. */
  'listFilterWidget.background'?: string;
  /** List/Tree Filter Widget's outline color of typed text when searching inside the list/tree. */
  'listFilterWidget.outline'?: string;
  /** List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree. */
  'listFilterWidget.noMatchesOutline'?: string;
  /** Shadow color of the type filter widget in lists and tree. */
  'listFilterWidget.shadow'?: string;
  /** Background color of the filtered matches in lists and trees. */
  'list.filterMatchBackground'?: string;
  /** Border color of the filtered matches in lists and trees. */
  'list.filterMatchBorder'?: string;
  /** List/Tree foreground color for items that are deemphasized. */
  'list.deemphasizedForeground'?: string;
  /** List/Tree drag and drop border color when moving items between items when using the mouse. */
  'list.dropBetweenBackground'?: string;
  /** Tree Widget's stroke color for indent guides. */
  'tree.indentGuidesStroke'?: string;
  /** Tree stroke color for the indentation guides that are not active. */
  'tree.inactiveIndentGuidesStroke'?: string;
  /** Tree stroke color for the indentation guides. */
  'tree.tableColumnsBorder'?: string;
  /** Background color for odd table rows. */
  'tree.tableOddRowsBackground'?: string;
}

export interface ActivityBar {
  /** Activity Bar background color. */
  'activityBar.background'?: string;
  /** Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar. */
  'activityBar.dropBorder'?: string;
  /** Activity Bar foreground color (for example used for the icons). */
  'activityBar.foreground'?: string;
  /** Activity Bar item foreground color when it is inactive. */
  'activityBar.inactiveForeground'?: string;
  /** Activity Bar border color with the Side Bar. */
  'activityBar.border'?: string;
  /** Activity notification badge background color. */
  'activityBarBadge.background'?: string;
  /** Activity notification badge foreground color. */
  'activityBarBadge.foreground'?: string;
  /** Activity Bar active indicator border color. */
  'activityBar.activeBorder'?: string;
  /** Activity Bar optional background color for the active element. */
  'activityBar.activeBackground'?: string;
  /** Activity bar focus border color for the active item. */
  'activityBar.activeFocusBorder'?: string;
  /** Active foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.foreground'?: string;
  /** Focus border color for the active item in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.activeBorder'?: string;
  /** Inactive foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.inactiveForeground'?: string;
  /** Drag and drop feedback color for the items in the Activity bar when it is on top. The activity allows to switch between views of the side bar. */
  'activityBarTop.dropBorder'?: string;
  /** Background color of the activity bar when set to top / bottom. */
  'activityBarTop.background'?: string;
  /** Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar. */
  'activityBarTop.activeBackground'?: string;
  /** Foreground color of the warning activity badge */
  'activityWarningBadge.foreground'?: string;
  /** Background color of the warning activity badge */
  'activityWarningBadge.background'?: string;
  /** Foreground color of the error activity badge */
  'activityErrorBadge.foreground'?: string;
  /** Background color of the error activity badge */
  'activityErrorBadge.background'?: string;
}

export interface Profile {
  /** Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar. */
  'profileBadge.background'?: string;
  /** Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar. */
  'profileBadge.foreground'?: string;
  /** The color of the Profiles editor split-view sash border. */
  'profiles.sashBorder'?: string;
}

export interface SideBar {
  /** Side Bar background color. */
  'sideBar.background'?: string;
  /** Side Bar foreground color. The Side Bar is the container for views like Explorer and Search. */
  'sideBar.foreground'?: string;
  /** Side Bar border color on the side separating the editor. */
  'sideBar.border'?: string;
  /** Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. */
  'sideBar.dropBackground'?: string;
  /** Side Bar title foreground color. */
  'sideBarTitle.foreground'?: string;
  /** Side Bar section header background color. */
  'sideBarSectionHeader.background'?: string;
  /** Side Bar section header foreground color. */
  'sideBarSectionHeader.foreground'?: string;
  /** Side bar section header border color. */
  'sideBarSectionHeader.border'?: string;
  /** Border color between the activity bar at the top/bottom and the views. */
  'sideBarActivityBarTop.border'?: string;
  /** Side bar title background color. The side bar is the container for views like explorer and search. */
  'sideBarTitle.background'?: string;
  /** Side bar title border color on the bottom, separating the title from the views. The side bar is the container for views like explorer and search. */
  'sideBarTitle.border'?: string;
  /** Background color of sticky scroll in the side bar. */
  'sideBarStickyScroll.background'?: string;
  /** Border color of sticky scroll in the side bar. */
  'sideBarStickyScroll.border'?: string;
  /** Shadow color of sticky scroll in the side bar. */
  'sideBarStickyScroll.shadow'?: string;
}

export interface Minimap {
  /** Highlight color for matches from search within files. */
  'minimap.findMatchHighlight'?: string;
  /** Highlight color for the editor selection. */
  'minimap.selectionHighlight'?: string;
  /** Highlight color for errors within the editor. */
  'minimap.errorHighlight'?: string;
  /** Highlight color for warnings within the editor. */
  'minimap.warningHighlight'?: string;
  /** Minimap background color. */
  'minimap.background'?: string;
  /** Minimap marker color for repeating editor selections. */
  'minimap.selectionOccurrenceHighlight'?: string;
  /** Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity. */
  'minimap.foregroundOpacity'?: string;
  /** Minimap marker color for infos. */
  'minimap.infoHighlight'?: string;
  /** Color of pending edit regions in the minimap. */
  'minimap.chatEditHighlight'?: string;
  /** Minimap slider background color. */
  'minimapSlider.background'?: string;
  /** Minimap slider background color when hovering. */
  'minimapSlider.hoverBackground'?: string;
  /** Minimap slider background color when clicked on. */
  'minimapSlider.activeBackground'?: string;
  /** Minimap gutter color for added content. */
  'minimapGutter.addedBackground'?: string;
  /** Minimap gutter color for modified content. */
  'minimapGutter.modifiedBackground'?: string;
  /** Minimap gutter color for deleted content. */
  'minimapGutter.deletedBackground'?: string;
  /** Minimap marker color for inline chat inserted content. */
  'editorMinimap.inlineChatInserted'?: string;
}

export interface EditorGroupsAndTabs {
  /** Color to separate multiple editor groups from each other. */
  'editorGroup.border'?: string;
  /** Background color when dragging editors around. */
  'editorGroup.dropBackground'?: string;
  /** Background color of the editor group title header when using single Tab (set `"workbench.editor.showTabs": "single"`). */
  'editorGroupHeader.noTabsBackground'?: string;
  /** Background color of the Tabs container. */
  'editorGroupHeader.tabsBackground'?: string;
  /** Border color below the editor tabs control when tabs are enabled. */
  'editorGroupHeader.tabsBorder'?: string;
  /** Border color between editor group header and editor (below breadcrumbs if enabled). */
  'editorGroupHeader.border'?: string;
  /** Background color of an empty editor group. */
  'editorGroup.emptyBackground'?: string;
  /** Border color of an empty editor group that is focused. */
  'editorGroup.focusedEmptyBorder'?: string;
  /** Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor. */
  'editorGroup.dropIntoPromptForeground'?: string;
  /** Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor. */
  'editorGroup.dropIntoPromptBackground'?: string;
  /** Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor. */
  'editorGroup.dropIntoPromptBorder'?: string;
  /** Active Tab background color in an active group. */
  'tab.activeBackground'?: string;
  /** Active Tab background color in an inactive editor group. */
  'tab.unfocusedActiveBackground'?: string;
  /** Active Tab foreground color in an active group. */
  'tab.activeForeground'?: string;
  /** Border to separate Tabs from each other. */
  'tab.border'?: string;
  /** Bottom border for the active tab. */
  'tab.activeBorder'?: string;
  /** Border to the top of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.selectedBorderTop'?: string;
  /** Background of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.selectedBackground'?: string;
  /** Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.dragAndDropBorder'?: string;
  /** Foreground of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups. */
  'tab.selectedForeground'?: string;
  /** Bottom border for the active tab in an inactive editor group. */
  'tab.unfocusedActiveBorder'?: string;
  /** Top border for the active tab. */
  'tab.activeBorderTop'?: string;
  /** Top border for the active tab in an inactive editor group. */
  'tab.unfocusedActiveBorderTop'?: string;
  /** Border on the right of the last pinned editor to separate from unpinned editors. */
  'tab.lastPinnedBorder'?: string;
  /** Inactive Tab background color. */
  'tab.inactiveBackground'?: string;
  /** Inactive Tab background color in an unfocused group */
  'tab.unfocusedInactiveBackground'?: string;
  /** Inactive Tab foreground color in an active group. */
  'tab.inactiveForeground'?: string;
  /** Active tab foreground color in an inactive editor group. */
  'tab.unfocusedActiveForeground'?: string;
  /** Inactive tab foreground color in an inactive editor group. */
  'tab.unfocusedInactiveForeground'?: string;
  /** Tab background color when hovering */
  'tab.hoverBackground'?: string;
  /** Tab background color in an unfocused group when hovering */
  'tab.unfocusedHoverBackground'?: string;
  /** Tab foreground color when hovering */
  'tab.hoverForeground'?: string;
  /** Tab foreground color in an unfocused group when hovering */
  'tab.unfocusedHoverForeground'?: string;
  /** Border to highlight tabs when hovering */
  'tab.hoverBorder'?: string;
  /** Border to highlight tabs in an unfocused group when hovering */
  'tab.unfocusedHoverBorder'?: string;
  /** Border on the top of modified (dirty) active tabs in an active group. */
  'tab.activeModifiedBorder'?: string;
  /** Border on the top of modified (dirty) inactive tabs in an active group. */
  'tab.inactiveModifiedBorder'?: string;
  /** Border on the top of modified (dirty) active tabs in an unfocused group. */
  'tab.unfocusedActiveModifiedBorder'?: string;
  /** Border on the top of modified (dirty) inactive tabs in an unfocused group. */
  'tab.unfocusedInactiveModifiedBorder'?: string;
  /** Background color of the editor pane visible on the left and right side of the centered editor layout. */
  'editorPane.background'?: string;
  /** Color to separate two editors from each other when shown side by side in an editor group from top to bottom. */
  'sideBySideEditor.horizontalBorder'?: string;
  /** Color to separate two editors from each other when shown side by side in an editor group from left to right. */
  'sideBySideEditor.verticalBorder'?: string;
}

export interface EditorColors {
  /** Editor background color. */
  'editor.background'?: string;
  /** Editor default foreground color. */
  'editor.foreground'?: string;
  /** Color of editor line numbers. */
  'editorLineNumber.foreground'?: string;
  /** Color of the active editor line number. */
  'editorLineNumber.activeForeground'?: string;
  /** Color of the final editor line when editor.renderFinalNewline is set to dimmed. */
  'editorLineNumber.dimmedForeground'?: string;
  /** The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor. */
  'editorCursor.background'?: string;
  /** Color of the editor cursor. */
  'editorCursor.foreground'?: string;
  /** Color of the primary editor cursor when multiple cursors are present. */
  'editorMultiCursor.primary.foreground'?: string;
  /** The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor. */
  'editorMultiCursor.primary.background'?: string;
  /** Color of secondary editor cursors when multiple cursors are present. */
  'editorMultiCursor.secondary.foreground'?: string;
  /** The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor. */
  'editorMultiCursor.secondary.background'?: string;
  /** Foreground color of the placeholder text in the editor. */
  'editor.placeholder.foreground'?: string;
  /** The border color for an IME composition. */
  'editor.compositionBorder'?: string;
  /** Color of the editor selection. */
  'editor.selectionBackground'?: string;
  /** Color of the selected text for high contrast. */
  'editor.selectionForeground'?: string;
  /** Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations. */
  'editor.inactiveSelectionBackground'?: string;
  /** Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations. */
  'editor.selectionHighlightBackground'?: string;
  /** Border color for regions with the same content as the selection. */
  'editor.selectionHighlightBorder'?: string;
  /** Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations. */
  'editor.wordHighlightBackground'?: string;
  /** Border color of a symbol during read-access, for example when reading a variable. */
  'editor.wordHighlightBorder'?: string;
  /** Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations. */
  'editor.wordHighlightStrongBackground'?: string;
  /** Border color of a symbol during write-access, for example when writing to a variable. */
  'editor.wordHighlightStrongBorder'?: string;
  /** Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations. */
  'editor.wordHighlightTextBackground'?: string;
  /** Border color of a textual occurrence for a symbol. */
  'editor.wordHighlightTextBorder'?: string;
  /** Color of the current search match. */
  'editor.findMatchBackground'?: string;
  /** Text color of the current search match. */
  'editor.findMatchForeground'?: string;
  /** Foreground color of the other search matches. */
  'editor.findMatchHighlightForeground'?: string;
  /** Color of the other search matches. The color must not be opaque so as not to hide underlying decorations. */
  'editor.findMatchHighlightBackground'?: string;
  /** Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations. */
  'editor.findRangeHighlightBackground'?: string;
  /** Border color of the current search match. */
  'editor.findMatchBorder'?: string;
  /** Border color of the other search matches. */
  'editor.findMatchHighlightBorder'?: string;
  /** Border color the range limiting the search (Enable 'Find in Selection' in the find widget). */
  'editor.findRangeHighlightBorder'?: string;
  /** Color of the text in the search viewlet's completion message. For example, this color is used in the text that says "{x} results in {y} files". */
  'search.resultsInfoForeground'?: string;
  /** Color of the editor's results. */
  'searchEditor.findMatchBackground'?: string;
  /** Border color of the editor's results. */
  'searchEditor.findMatchBorder'?: string;
  /** Search editor text input box border. */
  'searchEditor.textInputBorder'?: string;
  /** Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations. */
  'editor.hoverHighlightBackground'?: string;
  /** Background color for the highlight of line at the cursor position. */
  'editor.lineHighlightBackground'?: string;
  /** Background color for the border around the line at the cursor position. */
  'editor.lineHighlightBorder'?: string;
  /** Foreground color for the labels in the editor watermark. */
  'editorWatermark.foreground'?: string;
  /** Border color used to highlight unicode characters. */
  'editorUnicodeHighlight.border'?: string;
  /** Background color used to highlight unicode characters. */
  'editorUnicodeHighlight.background'?: string;
  /** Color of active links. */
  'editorLink.activeForeground'?: string;
  /** Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations. */
  'editor.rangeHighlightBackground'?: string;
  /** Background color of the border around highlighted ranges. */
  'editor.rangeHighlightBorder'?: string;
  /** Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations. */
  'editor.symbolHighlightBackground'?: string;
  /** Background color of the border around highlighted symbols. */
  'editor.symbolHighlightBorder'?: string;
  /** Color of whitespace characters in the editor. */
  'editorWhitespace.foreground'?: string;
  /** Color of the editor indentation guides. */
  'editorIndentGuide.background1'?: string;
  /** Color of the editor indentation guides (2). */
  'editorIndentGuide.background2'?: string;
  /** Color of the editor indentation guides (3). */
  'editorIndentGuide.background3'?: string;
  /** Color of the editor indentation guides (4). */
  'editorIndentGuide.background4'?: string;
  /** Color of the editor indentation guides (5). */
  'editorIndentGuide.background5'?: string;
  /** Color of the editor indentation guides (6). */
  'editorIndentGuide.background6'?: string;
  /** Color of the active editor indentation guides (1). */
  'editorIndentGuide.activeBackground1'?: string;
  /** Color of the active editor indentation guides (2). */
  'editorIndentGuide.activeBackground2'?: string;
  /** Color of the active editor indentation guides (3). */
  'editorIndentGuide.activeBackground3'?: string;
  /** Color of the active editor indentation guides (4). */
  'editorIndentGuide.activeBackground4'?: string;
  /** Color of the active editor indentation guides (5). */
  'editorIndentGuide.activeBackground5'?: string;
  /** Color of the active editor indentation guides (6). */
  'editorIndentGuide.activeBackground6'?: string;
  /** Background color of inline hints. */
  'editorInlayHint.background'?: string;
  /** Foreground color of inline hints. */
  'editorInlayHint.foreground'?: string;
  /** Foreground color of inline hints for types */
  'editorInlayHint.typeForeground'?: string;
  /** Background color of inline hints for types */
  'editorInlayHint.typeBackground'?: string;
  /** Foreground color of inline hints for parameters */
  'editorInlayHint.parameterForeground'?: string;
  /** Background color of inline hints for parameters */
  'editorInlayHint.parameterBackground'?: string;
  /** Color of the editor rulers. */
  'editorRuler.foreground'?: string;
  /** Background color when the editor is in linked editing mode. */
  'editor.linkedEditingBackground'?: string;
  /** Foreground color of an editor CodeLens. */
  'editorCodeLens.foreground'?: string;
  /** The color used for the lightbulb actions icon. */
  'editorLightBulb.foreground'?: string;
  /** The color used for the lightbulb auto fix actions icon. */
  'editorLightBulbAutoFix.foreground'?: string;
  /** The color used for the lightbulb AI icon. */
  'editorLightBulbAi.foreground'?: string;
  /** Background color behind matching brackets. */
  'editorBracketMatch.background'?: string;
  /** Color for matching brackets boxes. */
  'editorBracketMatch.border'?: string;
  /** Foreground color of brackets (1). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground1'?: string;
  /** Foreground color of brackets (2). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground2'?: string;
  /** Foreground color of brackets (3). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground3'?: string;
  /** Foreground color of brackets (4). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground4'?: string;
  /** Foreground color of brackets (5). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground5'?: string;
  /** Foreground color of brackets (6). Requires enabling bracket pair colorization. */
  'editorBracketHighlight.foreground6'?: string;
  /** Foreground color of unexpected brackets. */
  'editorBracketHighlight.unexpectedBracket.foreground'?: string;
  /** Background color of active bracket pair guides (1). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground1'?: string;
  /** Background color of active bracket pair guides (2). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground2'?: string;
  /** Background color of active bracket pair guides (3). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground3'?: string;
  /** Background color of active bracket pair guides (4). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground4'?: string;
  /** Background color of active bracket pair guides (5). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground5'?: string;
  /** Background color of active bracket pair guides (6). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.activeBackground6'?: string;
  /** Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background1'?: string;
  /** Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background2'?: string;
  /** Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background3'?: string;
  /** Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background4'?: string;
  /** Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background5'?: string;
  /** Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides. */
  'editorBracketPairGuide.background6'?: string;
  /** Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations. */
  'editor.foldBackground'?: string;
  /** Color of the collapsed text after the first line of a folded range. */
  'editor.foldPlaceholderForeground'?: string;
  /** Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor. */
  'editorOverviewRuler.background'?: string;
  /** Color of the overview ruler border. */
  'editorOverviewRuler.border'?: string;
  /** Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.findMatchForeground'?: string;
  /** Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.rangeHighlightForeground'?: string;
  /** Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.selectionHighlightForeground'?: string;
  /** Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.wordHighlightForeground'?: string;
  /** Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.wordHighlightStrongForeground'?: string;
  /** Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations. */
  'editorOverviewRuler.wordHighlightTextForeground'?: string;
  /** Overview ruler marker color for modified content. */
  'editorOverviewRuler.modifiedForeground'?: string;
  /** Overview ruler marker color for added content. */
  'editorOverviewRuler.addedForeground'?: string;
  /** Overview ruler marker color for deleted content. */
  'editorOverviewRuler.deletedForeground'?: string;
  /** Overview ruler marker color for errors. */
  'editorOverviewRuler.errorForeground'?: string;
  /** Overview ruler marker color for warnings. */
  'editorOverviewRuler.warningForeground'?: string;
  /** Overview ruler marker color for infos. */
  'editorOverviewRuler.infoForeground'?: string;
  /** Overview ruler marker color for matching brackets. */
  'editorOverviewRuler.bracketMatchForeground'?: string;
  /** Overview ruler marker color for inline chat inserted content. */
  'editorOverviewRuler.inlineChatInserted'?: string;
  /** Overview ruler marker color for inline chat removed content. */
  'editorOverviewRuler.inlineChatRemoved'?: string;
  /** Foreground color of error squiggles in the editor. */
  'editorError.foreground'?: string;
  /** Border color of error boxes in the editor. */
  'editorError.border'?: string;
  /** Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations. */
  'editorError.background'?: string;
  /** Foreground color of warning squiggles in the editor. */
  'editorWarning.foreground'?: string;
  /** Border color of warning boxes in the editor. */
  'editorWarning.border'?: string;
  /** Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations. */
  'editorWarning.background'?: string;
  /** Foreground color of info squiggles in the editor. */
  'editorInfo.foreground'?: string;
  /** Border color of info boxes in the editor. */
  'editorInfo.border'?: string;
  /** Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations. */
  'editorInfo.background'?: string;
  /** Foreground color of hints in the editor. */
  'editorHint.foreground'?: string;
  /** Border color of hint boxes in the editor. */
  'editorHint.border'?: string;
  /** The color used for the problems error icon. */
  'problemsErrorIcon.foreground'?: string;
  /** The color used for the problems warning icon. */
  'problemsWarningIcon.foreground'?: string;
  /** The color used for the problems info icon. */
  'problemsInfoIcon.foreground'?: string;
  /** Border color of unnecessary (unused) source code in the editor. */
  'editorUnnecessaryCode.border'?: string;
  /** Opacity of unnecessary (unused) source code in the editor. For example, "#000000c0" will render the code with 75% opacity. For high contrast themes, use the "editorUnnecessaryCode.border" theme color to underline unnecessary code instead of fading it out. */
  'editorUnnecessaryCode.opacity'?: string;
  /** Background color of the editor gutter. The gutter contains the glyph margins and the line numbers. */
  'editorGutter.background'?: string;
  /** Editor gutter background color for lines that are modified. */
  'editorGutter.modifiedBackground'?: string;
  /** Editor gutter secondary background color for lines that are modified. */
  'editorGutter.modifiedSecondaryBackground'?: string;
  /** Editor gutter secondary background color for lines that are added. */
  'editorGutter.addedSecondaryBackground'?: string;
  /** Editor gutter secondary background color for lines that are deleted. */
  'editorGutter.deletedSecondaryBackground'?: string;
  /** Editor gutter background color for lines that are added. */
  'editorGutter.addedBackground'?: string;
  /** Editor gutter background color for lines that are deleted. */
  'editorGutter.deletedBackground'?: string;
  /** Editor gutter decoration color for commenting ranges. */
  'editorGutter.commentRangeForeground'?: string;
  /** Editor gutter decoration color for commenting glyphs. */
  'editorGutter.commentGlyphForeground'?: string;
  /** Editor gutter decoration color for commenting glyphs for unresolved comment threads. */
  'editorGutter.commentUnresolvedGlyphForeground'?: string;
  /** Color of the folding control in the editor gutter. */
  'editorGutter.foldingControlForeground'?: string;
  /** Editor gutter decoration color for gutter item glyphs. */
  'editorGutter.itemGlyphForeground'?: string;
  /** Editor gutter decoration color for gutter item background. This color should be opaque. */
  'editorGutter.itemBackground'?: string;
  /** Color of borders and arrow for resolved comments. */
  'editorCommentsWidget.resolvedBorder'?: string;
  /** Color of borders and arrow for unresolved comments. */
  'editorCommentsWidget.unresolvedBorder'?: string;
  /** Color of background for comment ranges. */
  'editorCommentsWidget.rangeBackground'?: string;
  /** Color of background for currently selected or hovered comment range. */
  'editorCommentsWidget.rangeActiveBackground'?: string;
  /** Background color for comment reply input box. */
  'editorCommentsWidget.replyInputBackground'?: string;
  /** Border color for the primary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.primaryBorder'?: string;
  /** Foreground color for the primary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.primaryForeground'?: string;
  /** Background color for the primary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.primaryBackground'?: string;
  /** Border color for the secondary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.secondaryBorder'?: string;
  /** Foreground color for the secondary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.secondaryForeground'?: string;
  /** Background color for the secondary inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.secondaryBackground'?: string;
  /** Border color for the successful inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.successfulBorder'?: string;
  /** Foreground color for the successful inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.successfulForeground'?: string;
  /** Background color for the successful inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.successfulBackground'?: string;
  /** Background color for the inline edit gutter indicator. */
  'inlineEdit.gutterIndicator.background'?: string;
  /** Foreground color for the inline edit indicator. */
  'inlineEdit.indicator.foreground'?: string;
  /** Background color for the inline edit indicator. */
  'inlineEdit.indicator.background'?: string;
  /** Border color for the inline edit indicator. */
  'inlineEdit.indicator.border'?: string;
  /** Background color for the original text in inline edits. */
  'inlineEdit.originalBackground'?: string;
  /** Background color for the modified text in inline edits. */
  'inlineEdit.modifiedBackground'?: string;
  /** Background color for the changed lines in the original text of inline edits. */
  'inlineEdit.originalChangedLineBackground'?: string;
  /** Overlay color for the changed text in the original text of inline edits. */
  'inlineEdit.originalChangedTextBackground'?: string;
  /** Background color for the changed lines in the modified text of inline edits. */
  'inlineEdit.modifiedChangedLineBackground'?: string;
  /** Overlay color for the changed text in the modified text of inline edits. */
  'inlineEdit.modifiedChangedTextBackground'?: string;
  /** Border color for the original text in inline edits. */
  'inlineEdit.originalBorder'?: string;
  /** Border color for the modified text in inline edits. */
  'inlineEdit.modifiedBorder'?: string;

  /** Modified border color for the inline edits widget when tab will accept it. */
  'inlineEdit.tabWillAcceptModifiedBorder'?: string;
  /** Original border color for the inline edits widget over the original text when tab will accept it. */
  'inlineEdit.tabWillAcceptOriginalBorder'?: string;
  /** Border color for the inline edits widget over the original text when tab will accept it. */
  'inlineEdit.tabWillAcceptBorder'?: string;
  /** Background color for the inline edit word replacement view. */
  'inlineEdit.wordReplacementView.background'?: string;
}

export interface DiffEditorColor {
  /** Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.insertedTextBackground'?: string;
  /** Outline color for the text that got inserted. */
  'diffEditor.insertedTextBorder'?: string;
  /** Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.removedTextBackground'?: string;
  /** Outline color for text that got removed. */
  'diffEditor.removedTextBorder'?: string;
  /** Border color between the two text editors. */
  'diffEditor.border'?: string;
  /** Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views. */
  'diffEditor.diagonalFill'?: string;
  /** Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.insertedLineBackground'?: string;
  /** Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations. */
  'diffEditor.removedLineBackground'?: string;
  /** Background color for the margin where lines got inserted. */
  'diffEditorGutter.insertedLineBackground'?: string;
  /** Background color for the margin where lines got removed. */
  'diffEditorGutter.removedLineBackground'?: string;
  /** Diff overview ruler foreground for inserted content. */
  'diffEditorOverview.insertedForeground'?: string;
  /** Diff overview ruler foreground for removed content. */
  'diffEditorOverview.removedForeground'?: string;
  /** The color of unchanged blocks in diff editor. */
  'diffEditor.unchangedRegionBackground'?: string;
  /** The foreground color of unchanged blocks in the diff editor. */
  'diffEditor.unchangedRegionForeground'?: string;
  /** The color of the shadow around unchanged region widgets. */
  'diffEditor.unchangedRegionShadow'?: string;
  /** The background color of unchanged code in the diff editor. */
  'diffEditor.unchangedCodeBackground'?: string;
  /** The border color for text that got moved in the diff editor. */
  'diffEditor.move.border'?: string;
  /** The active border color for text that got moved in the diff editor. */
  'diffEditor.moveActive.border'?: string;
  /** The background color of the diff editor's header. */
  'multiDiffEditor.headerBackground'?: string;
  /** The background color of the multi file diff editor. */
  'multiDiffEditor.background'?: string;
  /** The border color of the multi file diff editor. */
  'multiDiffEditor.border'?: string;
}

export interface ChatColors {
  /** The border color of a chat request. */
  'chat.requestBorder'?: string;
  /** The background color of a chat slash command. */
  'chat.slashCommandBackground'?: string;
  /** The foreground color of a chat slash command. */
  'chat.slashCommandForeground'?: string;
  /** The background color of a chat avatar. */
  'chat.avatarBackground'?: string;
  /** The foreground color of a chat avatar. */
  'chat.avatarForeground'?: string;
  /** The foreground color of a chat edited file in the edited file list. */
  'chat.editedFileForeground'?: string;
}

export interface InlineChatColors {
  /** Background color of the interactive editor widget. */
  'inlineChat.background'?: string;
  /** Foreground color of the interactive editor widget. */
  'inlineChat.foreground'?: string;
  /** Border color of the interactive editor widget. */
  'inlineChat.border'?: string;
  /** Shadow color of the interactive editor widget. */
  'inlineChat.shadow'?: string;
  /** Border color of the interactive editor input. */
  'inlineChatInput.border'?: string;
  /** Border color of the interactive editor input when focused. */
  'inlineChatInput.focusBorder'?: string;
  /** Foreground color of the interactive editor input placeholder. */
  'inlineChatInput.placeholderForeground'?: string;
  /** Background color of the interactive editor input. */
  'inlineChatInput.background'?: string;
  /** Background color of inserted text in the interactive editor input. */
  'inlineChatDiff.inserted'?: string;
  /** Background color of removed text in the interactive editor input. */
  'inlineChatrDiff.removed'?: string;
}

export interface PanelChatColor {
  /** The border color for the current interactive code cell when the editor has focus. */
  'interactive.activeCodeBorder'?: string;
  /** The border color for the current interactive code cell when the editor does not have focus. */
  'interactive.inactiveCodeBorder'?: string;
}

export interface EditorWidgetColor {
  /** Foreground color of editor widgets, such as find/replace. */
  'editorWidget.foreground'?: string;
  /** Background color of editor widgets, such as Find/Replace. */
  'editorWidget.background'?: string;
  /** Border color of the editor widget unless the widget does not contain a border or defines its own border color. */
  'editorWidget.border'?: string;
  /** Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget. */
  'editorWidget.resizeBorder'?: string;
  /** Background color of the suggestion widget. */
  'editorSuggestWidget.background'?: string;
  /** Border color of the suggestion widget. */
  'editorSuggestWidget.border'?: string;
  /** Foreground color of the suggestion widget. */
  'editorSuggestWidget.foreground'?: string;
  /** Color of the match highlights in the suggest widget when an item is focused. */
  'editorSuggestWidget.focusHighlightForeground'?: string;
  /** Color of the match highlights in the suggestion widget. */
  'editorSuggestWidget.highlightForeground'?: string;
  /** Background color of the selected entry in the suggestion widget. */
  'editorSuggestWidget.selectedBackground'?: string;
  /** Foreground color of the selected entry in the suggest widget. */
  'editorSuggestWidget.selectedForeground'?: string;
  /** Icon foreground color of the selected entry in the suggest widget. */
  'editorSuggestWidget.selectedIconForeground'?: string;
  /** Foreground color of the suggest widget status. */
  'editorSuggestWidgetStatus.foreground'?: string;
  /** Foreground color of the editor hover. */
  'editorHoverWidget.foreground'?: string;
  /** Background color of the editor hover. */
  'editorHoverWidget.background'?: string;
  /** Border color of the editor hover. */
  'editorHoverWidget.border'?: string;
  /** Foreground color of the active item in the parameter hint. */
  'editorHoverWidget.highlightForeground'?: string;
  /** Background color of the editor hover status bar. */
  'editorHoverWidget.statusBarBackground'?: string;
  /** Border color of the ghost text shown by inline completion providers and the suggest preview. */
  'editorGhostText.border'?: string;
  /** Background color of the ghost text in the editor. */
  'editorGhostText.background'?: string;
  /** Foreground color of the ghost text shown by inline completion providers and the suggest preview. */
  'editorGhostText.foreground'?: string;
  /** Editor sticky scroll background color. */
  'editorStickyScroll.background'?: string;
  /** Border color of sticky scroll in the editor. */
  'editorStickyScroll.border'?: string;
  /** Shadow color of sticky scroll in the editor. */
  'editorStickyScroll.shadow'?: string;
  /** Editor sticky scroll on hover background color. */
  'editorStickyScrollHover.background'?: string;
  /** Exception widget background color. */
  'debugExceptionWidget.background'?: string;
  /** Exception widget border color. */
  'debugExceptionWidget.border'?: string;
  /** Editor marker navigation widget background. */
  'editorMarkerNavigation.background'?: string;
  /** Editor marker navigation widget error color. */
  'editorMarkerNavigationError.background'?: string;
  /** Editor marker navigation widget warning color. */
  'editorMarkerNavigationWarning.background'?: string;
  /** Editor marker navigation widget info color. */
  'editorMarkerNavigationInfo.background'?: string;
  /** Editor marker navigation widget error heading background. */
  'editorMarkerNavigationError.headerBackground'?: string;
  /** Editor marker navigation widget warning heading background. */
  'editorMarkerNavigationWarning.headerBackground'?: string;
  /** Editor marker navigation widget info heading background. */
  'editorMarkerNavigationInfo.headerBackground'?: string;
}

export interface PeekViewColors {
  /** Color of the peek view borders and arrow. */
  'peekView.border'?: string;
  /** Background color of the peek view editor. */
  'peekViewEditor.background'?: string;
  /** Background color of the gutter in the peek view editor. */
  'peekViewEditorGutter.background'?: string;
  /** Match highlight color in the peek view editor. */
  'peekViewEditor.matchHighlightBackground'?: string;
  /** Match highlight border color in the peek view editor. peekViewEditorStickyScroll.background: Background color of sticky scroll in the peek view editor. */
  'peekViewEditor.matchHighlightBorder'?: string;
  /** Background color of the peek view result list. */
  'peekViewResult.background'?: string;
  /** Foreground color for file nodes in the peek view result list. */
  'peekViewResult.fileForeground'?: string;
  /** Foreground color for line nodes in the peek view result list. */
  'peekViewResult.lineForeground'?: string;
  /** Match highlight color in the peek view result list. */
  'peekViewResult.matchHighlightBackground'?: string;
  /** Background color of the selected entry in the peek view result list. */
  'peekViewResult.selectionBackground'?: string;
  /** Foreground color of the selected entry in the peek view result list. */
  'peekViewResult.selectionForeground'?: string;
  /** Background color of the peek view title area. */
  'peekViewTitle.background'?: string;
  /** Color of the peek view title info. */
  'peekViewTitleDescription.foreground'?: string;
  /** Color of the peek view title. */
  'peekViewTitleLabel.foreground'?: string;
  /** Background color of sticky scroll in the peek view editor. */
  'peekViewEditorStickyScroll.background'?: string;
}

export interface MergeConflictsColors {
  /** Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.currentHeaderBackground'?: string;
  /** Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.currentContentBackground'?: string;
  /** Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.incomingHeaderBackground'?: string;
  /** Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.incomingContentBackground'?: string;
  /** Border color on headers and the splitter in inline merge conflicts. */
  'merge.border'?: string;
  /** Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.commonContentBackground'?: string;
  /** Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations. */
  'merge.commonHeaderBackground'?: string;
  /** Current overview ruler foreground for inline merge conflicts. */
  'editorOverviewRuler.currentContentForeground'?: string;
  /** Incoming overview ruler foreground for inline merge conflicts. */
  'editorOverviewRuler.incomingContentForeground'?: string;
  /** Common ancestor overview ruler foreground for inline merge conflicts. */
  'editorOverviewRuler.commonContentForeground'?: string;
  /** Editor overview ruler decoration color for resolved comments. This color should be opaque. */
  'editorOverviewRuler.commentForeground'?: string;
  /** Editor overview ruler decoration color for unresolved comments. This color should be opaque. */
  'editorOverviewRuler.commentUnresolvedForeground'?: string;
  /** The background color for changes. */
  'mergeEditor.change.background'?: string;
  /** The background color for word changes. */
  'mergeEditor.change.word.background'?: string;
  /** The border color of unhandled unfocused conflicts. */
  'mergeEditor.conflict.unhandledUnfocused.border'?: string;
  /** The border color of unhandled focused conflicts. */
  'mergeEditor.conflict.unhandledFocused.border'?: string;
  /** The border color of handled unfocused conflicts. */
  'mergeEditor.conflict.handledUnfocused.border'?: string;
  /** The border color of handled focused conflicts. */
  'mergeEditor.conflict.handledFocused.border'?: string;
  /** The foreground color for changes in input 1. */
  'mergeEditor.conflict.handled.minimapOverViewRuler'?: string;
  /** The foreground color for changes in input 1. */
  'mergeEditor.conflict.unhandled.minimapOverViewRuler'?: string;
  /** The background of the "Conflicting Lines" text. */
  'mergeEditor.conflictingLines.background'?: string;
  /** The background color for changes in base. */
  'mergeEditor.changeBase.background'?: string;
  /** The background color for word changes in base. */
  'mergeEditor.changeBase.word.background'?: string;
  /** The background color of decorations in input 1. */
  'mergeEditor.conflict.input1.background'?: string;
  /** The background color of decorations in input 2. */
  'mergeEditor.conflict.input2.background'?: string;
}

export interface PanelColors {
  /** Panel background color. */
  'panel.background'?: string;
  /** Panel border color to separate the panel from the editor. */
  'panel.border'?: string;
  /** Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panel.dropBorder'?: string;
  /** Border color for the active panel title. */
  'panelTitle.activeBorder'?: string;
  /** Title color for the active panel. */
  'panelTitle.activeForeground'?: string;
  /** Title color for the inactive panel. */
  'panelTitle.inactiveForeground'?: string;
  /** Panel title border color on the bottom, separating the title from the views. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelTitle.border'?: string;
  /** Panel title badge background color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelTitleBadge.background'?: string;
  /** Panel title badge foreground color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelTitleBadge.foreground'?: string;
  /** Input box border for inputs in the panel. */
  'panelInput.border'?: string;
  /** Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSection.border'?: string;
  /** Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSection.dropBackground'?: string;
  /** Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSectionHeader.background'?: string;
  /** Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSectionHeader.foreground'?: string;
  /** Background color of sticky scroll in the panel. */
  'panelStickyScroll.background'?: string;
  /** Border color of sticky scroll in the panel. */
  'panelStickyScroll.border'?: string;
  /** Shadow color of sticky scroll in the panel. */
  'panelStickyScroll.shadow'?: string;
  /** Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. */
  'panelSectionHeader.border'?: string;
  /** Output view background color. */
  'outputView.background'?: string;
  /** Output view sticky scroll background color. */
  'outputViewStickyScroll.background'?: string;
}

export interface StatusBarColors {
  /** Standard Status Bar background color. */
  'statusBar.background'?: string;
  /** Status Bar foreground color. */
  'statusBar.foreground'?: string;
  /** Status Bar border color separating the Status Bar and editor. */
  'statusBar.border'?: string;
  /** Status Bar background color when a program is being debugged. */
  'statusBar.debuggingBackground'?: string;
  /** Status Bar foreground color when a program is being debugged. */
  'statusBar.debuggingForeground'?: string;
  /** Status Bar border color separating the Status Bar and editor when a program is being debugged. */
  'statusBar.debuggingBorder'?: string;
  /** Status Bar foreground color when no folder is opened. */
  'statusBar.noFolderForeground'?: string;
  /** Status Bar background color when no folder is opened. */
  'statusBar.noFolderBackground'?: string;
  /** Status Bar border color separating the Status Bar and editor when no folder is opened. */
  'statusBar.noFolderBorder'?: string;
  /** Status Bar item background color when clicking. */
  'statusBarItem.activeBackground'?: string;
  /** Status bar item foreground color when hovering. The status bar is shown in the bottom of the window. */
  'statusBarItem.hoverForeground'?: string;
  /** Status Bar item background color when hovering. */
  'statusBarItem.hoverBackground'?: string;
  /** Status Bar prominent items foreground color. */
  'statusBarItem.prominentForeground'?: string;
  /** Status Bar prominent items background color. */
  'statusBarItem.prominentBackground'?: string;
  /** Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window. */
  'statusBarItem.prominentHoverForeground'?: string;
  /** Status Bar prominent items background color when hovering. */
  'statusBarItem.prominentHoverBackground'?: string;
  /** Background color for the remote indicator on the status bar. */
  'statusBarItem.remoteBackground'?: string;
  /** Foreground color for the remote indicator on the status bar. */
  'statusBarItem.remoteForeground'?: string;
  /** Background color for the remote indicator on the status bar when hovering. */
  'statusBarItem.remoteHoverBackground'?: string;
  /** Foreground color for the remote indicator on the status bar when hovering. */
  'statusBarItem.remoteHoverForeground'?: string;
  /** Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions. */
  'statusBarItem.errorBackground'?: string;
  /** Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions. */
  'statusBarItem.errorForeground'?: string;
  /** Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. */
  'statusBarItem.errorHoverBackground'?: string;
  /** Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. */
  'statusBarItem.errorHoverForeground'?: string;
  /** Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningBackground'?: string;
  /** Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningForeground'?: string;
  /** Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningHoverBackground'?: string;
  /** Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window. */
  'statusBarItem.warningHoverForeground'?: string;
  /** Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window. */
  'statusBarItem.compactHoverBackground'?: string;
  /** Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window. */
  'statusBarItem.focusBorder'?: string;
  /** Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window. */
  'statusBar.focusBorder'?: string;
  /** Status bar item background color when the workbench is offline. */
  'statusBarItem.offlineBackground'?: string;
  /** Status bar item foreground color when the workbench is offline. */
  'statusBarItem.offlineForeground'?: string;
  /** Status bar item foreground hover color when the workbench is offline. */
  'statusBarItem.offlineHoverForeground'?: string;
  /** Status bar item background hover color when the workbench is offline. */
  'statusBarItem.offlineHoverBackground'?: string;
}

export interface TitleBarColors {
  /** Title Bar background when the window is active. */
  'titleBar.activeBackground'?: string;
  /** Title Bar foreground when the window is active. */
  'titleBar.activeForeground'?: string;
  /** Title Bar background when the window is inactive. */
  'titleBar.inactiveBackground'?: string;
  /** Title Bar foreground when the window is inactive. */
  'titleBar.inactiveForeground'?: string;
  /** Title bar border color. */
  'titleBar.border'?: string;
}

export interface MenuBarColors {
  /** Foreground color of the selected menu item in the menubar. */
  'menubar.selectionForeground'?: string;
  /** Background color of the selected menu item in the menubar. */
  'menubar.selectionBackground'?: string;
  /** Border color of the selected menu item in the menubar. */
  'menubar.selectionBorder'?: string;
  /** Foreground color of menu items. */
  'menu.foreground'?: string;
  /** Background color of menu items. */
  'menu.background'?: string;
  /** Foreground color of the selected menu item in menus. */
  'menu.selectionForeground'?: string;
  /** Background color of the selected menu item in menus. */
  'menu.selectionBackground'?: string;
  /** Border color of the selected menu item in menus. */
  'menu.selectionBorder'?: string;
  /** Color of a separator menu item in menus. */
  'menu.separatorBackground'?: string;
  /** Border color of menus. */
  'menu.border'?: string;
}

export interface CommandCenterColors {
  /** Foreground color of the Command Center. */
  'commandCenter.foreground'?: string;
  /** Active foreground color of the Command Center. */
  'commandCenter.activeForeground'?: string;
  /** Background color of the Command Center. */
  'commandCenter.background'?: string;
  /** Active background color of the Command Center. */
  'commandCenter.activeBackground'?: string;
  /** Border color of the Command Center. */
  'commandCenter.border'?: string;
  /** Foreground color of the Command Center when the window is inactive. */
  'commandCenter.inactiveForeground'?: string;
  /** Border color of the Command Center when the window is inactive. */
  'commandCenter.inactiveBorder'?: string;
  /** Active border color of the Command Center. */
  'commandCenter.activeBorder'?: string;
  /** Command Center background color when a program is being debugged. */
  'commandCenter.debuggingBackground'?: string;
}

export interface NotificationColors {
  /** Notification Center border color. */
  'notificationCenter.border'?: string;
  /** Notification Center header foreground color. */
  'notificationCenterHeader.foreground'?: string;
  /** Notification Center header background color. */
  'notificationCenterHeader.background'?: string;
  /** Notification toast border color. */
  'notificationToast.border'?: string;
  /** Notification foreground color. */
  'notifications.foreground'?: string;
  /** Notification background color. */
  'notifications.background'?: string;
  /** Notification border color separating from other notifications in the Notification Center. */
  'notifications.border'?: string;
  /** Notification links foreground color. */
  'notificationLink.foreground'?: string;
  /** The color used for the notification error icon. */
  'notificationsErrorIcon.foreground'?: string;
  /** The color used for the notification warning icon. */
  'notificationsWarningIcon.foreground'?: string;
  /** The color used for the notification info icon. */
  'notificationsInfoIcon.foreground'?: string;
}

export interface BannerColors {
  /** Banner background color. */
  'banner.background'?: string;
  /** Banner foreground color. */
  'banner.foreground'?: string;
  /** Color for the icon in front of the banner text. */
  'banner.iconForeground'?: string;
}

export interface ExtensionsColors {
  /** Extension view button foreground color (for example Install button). */
  'extensionButton.prominentForeground'?: string;
  /** Extension view button background color. */
  'extensionButton.prominentBackground'?: string;
  /** Extension view button background hover color. */
  'extensionButton.prominentHoverBackground'?: string;
  /** Button background color for extension actions. */
  'extensionButton.background'?: string;
  /** Button foreground color for extension actions. */
  'extensionButton.foreground'?: string;
  /** Button background hover color for extension actions. */
  'extensionButton.hoverBackground'?: string;
  /** Button separator color for extension actions. */
  'extensionButton.separator'?: string;
  /** Background color for the remote badge in the extensions view. */
  'extensionBadge.remoteBackground'?: string;
  /** Foreground color for the remote badge in the extensions view. */
  'extensionBadge.remoteForeground'?: string;
  /** The icon color for extension ratings. */
  'extensionIcon.starForeground'?: string;
  /** The icon color for extension verified publisher. */
  'extensionIcon.verifiedForeground'?: string;
  /** The icon color for pre-release extension. */
  'extensionIcon.preReleaseForeground'?: string;
  /** The icon color for extension sponsor. */
  'extensionIcon.sponsorForeground'?: string;
  /** The icon color for private extensions. */
  'extensionIcon.privateForeground'?: string;
}

export interface QuickPickerColors {
  /** Quick picker (Quick Open) color for grouping borders. */
  'pickerGroup.border'?: string;
  /** Quick picker (Quick Open) color for grouping labels. */
  'pickerGroup.foreground'?: string;
  /** Quick input background color. The quick input widget is the container for views like the color theme picker. */
  'quickInput.background'?: string;
  /** Quick input foreground color. The quick input widget is the container for views like the color theme picker. */
  'quickInput.foreground'?: string;
  /** Quick picker background color for the focused item. */
  'quickInputList.focusBackground'?: string;
  /** Quick picker foreground color for the focused item. */
  'quickInputList.focusForeground'?: string;
  /** Quick picker icon foreground color for the focused item. */
  'quickInputList.focusIconForeground'?: string;
  /** Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette. */
  'quickInputTitle.background'?: string;
}

export interface KeybindingLabelColors {
  /** Keybinding label background color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.background'?: string;
  /** Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.foreground'?: string;
  /** Keybinding label border color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.border'?: string;
  /** Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut. */
  'keybindingLabel.bottomBorder'?: string;
}

export interface KeyboardShortcutTableColors {
  /** Background color for the keyboard shortcuts table header. */
  'keybindingTable.headerBackground'?: string;
  /** Background color for the keyboard shortcuts table alternating rows. */
  'keybindingTable.rowsBackground'?: string;
}

export interface IntegratedTerminalColors {
  /** The background of the Integrated Terminal's viewport. */
  'terminal.background'?: string;
  /** The color of the border that separates split panes within the terminal. This defaults to panel.border. */
  'terminal.border'?: string;
  /** The default foreground color of the Integrated Terminal. */
  'terminal.foreground'?: string;
  /** 'Black' ANSI color in the terminal. */
  'terminal.ansiBlack'?: string;
  /** 'Blue' ANSI color in the terminal. */
  'terminal.ansiBlue'?: string;
  /** 'BrightBlack' ANSI color in the terminal. */
  'terminal.ansiBrightBlack'?: string;
  /** 'BrightBlue' ANSI color in the terminal. */
  'terminal.ansiBrightBlue'?: string;
  /** 'BrightCyan' ANSI color in the terminal. */
  'terminal.ansiBrightCyan'?: string;
  /** 'BrightGreen' ANSI color in the terminal. */
  'terminal.ansiBrightGreen'?: string;
  /** 'BrightMagenta' ANSI color in the terminal. */
  'terminal.ansiBrightMagenta'?: string;
  /** 'BrightRed' ANSI color in the terminal. */
  'terminal.ansiBrightRed'?: string;
  /** 'BrightWhite' ANSI color in the terminal. */
  'terminal.ansiBrightWhite'?: string;
  /** 'BrightYellow' ANSI color in the terminal. */
  'terminal.ansiBrightYellow'?: string;
  /** 'Cyan' ANSI color in the terminal. */
  'terminal.ansiCyan'?: string;
  /** 'Green' ANSI color in the terminal. */
  'terminal.ansiGreen'?: string;
  /** 'Magenta' ANSI color in the terminal. */
  'terminal.ansiMagenta'?: string;
  /** 'Red' ANSI color in the terminal. */
  'terminal.ansiRed'?: string;
  /** 'White' ANSI color in the terminal. */
  'terminal.ansiWhite'?: string;
  /** 'Yellow' ANSI color in the terminal. */
  'terminal.ansiYellow'?: string;
  /** The selection background color of the terminal. */
  'terminal.selectionBackground'?: string;
  /** The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied. */
  'terminal.selectionForeground'?: string;
  /** The selection background color of the terminal when it does not have focus. */
  'terminal.inactiveSelectionBackground'?: string;
  /** Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content. */
  'terminal.findMatchBackground'?: string;
  /** Border color of the current search match in the terminal. */
  'terminal.findMatchBorder'?: string;
  /** Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content. */
  'terminal.findMatchHighlightBackground'?: string;
  /** Border color of the other search matches in the terminal. */
  'terminal.findMatchHighlightBorder'?: string;
  /** Color of the highlight when hovering a link in the terminal. */
  'terminal.hoverHighlightBackground'?: string;
  /** The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor. */
  'terminalCursor.background'?: string;
  /** The foreground color of the terminal cursor. */
  'terminalCursor.foreground'?: string;
  /** The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through. */
  'terminal.dropBackground'?: string;
  /** Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder. */
  'terminal.tab.activeBorder'?: string;
  /** The default terminal command decoration background color. */
  'terminalCommandDecoration.defaultBackground'?: string;
  /** The terminal command decoration background color for successful commands. */
  'terminalCommandDecoration.successBackground'?: string;
  /** The terminal command decoration background color for error commands. */
  'terminalCommandDecoration.errorBackground'?: string;
  /** The overview ruler cursor color. */
  'terminalOverviewRuler.cursorForeground'?: string;
  /** Overview ruler marker color for find matches in the terminal. */
  'terminalOverviewRuler.findMatchForeground'?: string;
  /** The background color of the sticky scroll overlay in the terminal. */
  'terminalStickyScroll.background'?: string;
  /** The border of the sticky scroll overlay in the terminal. */
  'terminalStickyScroll.border'?: string;
  /** The background color of the sticky scroll overlay in the terminal when hovered. */
  'terminalStickyScrollHover.background'?: string;
  /** Foreground color of the terminal initial hint. */
  'terminal.initialHintForeground'?: string;
  /** The overview ruler left-side border color. */
  'terminalOverviewRuler.border'?: string;
  /** The foreground color of the terminal command guide that appears to the left of a command and its output on hover. */
  'terminalCommandGuide.foreground'?: string;
  /** The foreground color for an alias icon. These icons will appear in the terminal suggest widget */
  'terminalSymbolIcon.aliasForeground'?: string;
  /** The foreground color for an flag icon. These icons will appear in the terminal suggest widget */
  'terminalSymbolIcon.flagForeground'?: string;
}

export interface DebugColors {
  /** Debug toolbar background color. */
  'debugToolBar.background'?: string;
  /** Debug toolbar border color. */
  'debugToolBar.border'?: string;
  /** Background color of the top stack frame highlight in the editor. */
  'editor.stackFrameHighlightBackground'?: string;
  /** Background color of the focused stack frame highlight in the editor. */
  'editor.focusedStackFrameHighlightBackground'?: string;
  /** Color for the debug inline value text. */
  'editor.inlineValuesForeground'?: string;
  /** Color for the debug inline value background. */
  'editor.inlineValuesBackground'?: string;
  /** Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception. */
  'debugView.exceptionLabelForeground'?: string;
  /** Background color for a label shown in the CALL STACK view when the debugger breaks on an exception. */
  'debugView.exceptionLabelBackground'?: string;
  /** Foreground color for a label in the CALL STACK view showing the current session's or thread's state. */
  'debugView.stateLabelForeground'?: string;
  /** Background color for a label in the CALL STACK view showing the current session's or thread's state. */
  'debugView.stateLabelBackground'?: string;
  /** Color used to highlight value changes in the debug views (such as in the Variables view). */
  'debugView.valueChangedHighlight'?: string;
  /** Foreground color for the token names shown in debug views (such as in the Variables or Watch view). */
  'debugTokenExpression.name'?: string;
  /** Foreground color for the token values shown in debug views. */
  'debugTokenExpression.value'?: string;
  /** Foreground color for strings in debug views. */
  'debugTokenExpression.string'?: string;
  /** Foreground color for booleans in debug views. */
  'debugTokenExpression.boolean'?: string;
  /** Foreground color for numbers in debug views. */
  'debugTokenExpression.number'?: string;
  /** Foreground color for expression errors in debug views. */
  'debugTokenExpression.error'?: string;
  /** Foreground color for the token types shown in the debug views (ie. the Variables or Watch view). */
  'debugTokenExpression.type'?: string;
}

export interface TestingColors {
  /** Color for 'run' icons in the editor. */
  'testing.runAction'?: string;
  /** Color for the 'Errored' icon in the test explorer. */
  'testing.iconErrored'?: string;
  /** Color for the 'failed' icon in the test explorer. */
  'testing.iconFailed'?: string;
  /** Color for the 'passed' icon in the test explorer. */
  'testing.iconPassed'?: string;
  /** Color for the 'Queued' icon in the test explorer. */
  'testing.iconQueued'?: string;
  /** Color for the 'Unset' icon in the test explorer. */
  'testing.iconUnset'?: string;
  /** Color for the 'Skipped' icon in the test explorer. */
  'testing.iconSkipped'?: string;
  /** Retired color for the 'Errored' icon in the test explorer. */
  'testing.iconErrored.retired'?: string;
  /** Retired color for the 'failed' icon in the test explorer. */
  'testing.iconFailed.retired'?: string;
  /** Retired color for the 'passed' icon in the test explorer. */
  'testing.iconPassed.retired'?: string;
  /** Retired color for the 'Queued' icon in the test explorer. */
  'testing.iconQueued.retired'?: string;
  /** Retired color for the 'Unset' icon in the test explorer. */
  'testing.iconUnset.retired'?: string;
  /** Retired color for the 'Skipped' icon in the test explorer. */
  'testing.iconSkipped.retired'?: string;
  /** Color of the peek view borders and arrow. */
  'testing.peekBorder'?: string;
  /** Color of the peek view borders and arrow. */
  'testing.peekHeaderBackground'?: string;
  /** Text color of test error messages shown inline in the editor. */
  'testing.message.error.decorationForeground'?: string;
  /** Margin color beside error messages shown inline in the editor. */
  'testing.message.error.lineBackground'?: string;
  /** Text color of test info messages shown inline in the editor. */
  'testing.message.info.decorationForeground'?: string;
  /** Margin color beside info messages shown inline in the editor. */
  'testing.message.info.lineBackground'?: string;
  /** Color of the peek view borders and arrow when peeking a logged message. */
  'testing.messagePeekBorder'?: string;
  /** Color of the peek view borders and arrow when peeking a logged message. */
  'testing.messagePeekHeaderBackground'?: string;
  /** Background color of text that was covered. */
  'testing.coveredBackground'?: string;
  /** Border color of text that was covered. */
  'testing.coveredBorder'?: string;
  /** Gutter color of regions where code was covered. */
  'testing.coveredGutterBackground'?: string;
  /** Background of the widget shown for an uncovered branch. */
  'testing.uncoveredBranchBackground'?: string;
  /** Background color of text that was not covered. */
  'testing.uncoveredBackground'?: string;
  /** Border color of text that was not covered. */
  'testing.uncoveredBorder'?: string;
  /** Gutter color of regions where code not covered. */
  'testing.uncoveredGutterBackground'?: string;
  /** Background for the badge indicating execution count */
  'testing.coverCountBadgeBackground'?: string;
  /** Foreground for the badge indicating execution count */
  'testing.coverCountBadgeForeground'?: string;
  /** Background color of test error messages shown inline in the editor. */
  'testing.message.error.badgeBackground'?: string;
  /** Border color of test error messages shown inline in the editor. */
  'testing.message.error.badgeBorder'?: string;
  /** Text color of test error messages shown inline in the editor. */
  'testing.message.error.badgeForeground'?: string;
}

export interface WelcomePageColors {
  /** Background color for the Welcome page. */
  'welcomePage.background'?: string;
  /** Foreground color for the Welcome page progress bars. */
  'welcomePage.progress.background'?: string;
  /** Background color for the Welcome page progress bars. */
  'welcomePage.progress.foreground'?: string;
  /** Background color for the tiles on the Welcome page. */
  'welcomePage.tileBackground'?: string;
  /** Hover background color for the tiles on the Welcome page. */
  'welcomePage.tileHoverBackground'?: string;
  /** Border color for the tiles on the Welcome page. */
  'welcomePage.tileBorder'?: string;
  /** Background color for the embedded editors on the Interactive Playground. */
  'walkThrough.embeddedEditorBackground'?: string;
  /** Foreground color of the heading of each walkthrough step. */
  'walkthrough.stepTitle.foreground'?: string;
}

export interface GitColors {
  /** Color for added Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.addedResourceForeground'?: string;
  /** Color for modified Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.modifiedResourceForeground'?: string;
  /** Color for deleted Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.deletedResourceForeground'?: string;
  /** Color for renamed or copied Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.renamedResourceForeground'?: string;
  /** Color for staged modifications git decorations. Used for file labels and the SCM viewlet. */
  'gitDecoration.stageModifiedResourceForeground'?: string;
  /** Color for staged deletions git decorations. Used for file labels and the SCM viewlet. */
  'gitDecoration.stageDeletedResourceForeground'?: string;
  /** Color for untracked Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.untrackedResourceForeground'?: string;
  /** Color for ignored Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.ignoredResourceForeground'?: string;
  /** Color for conflicting Git resources. Used for file labels and the SCM viewlet. */
  'gitDecoration.conflictingResourceForeground'?: string;
  /** Color for submodule resources. */
  'gitDecoration.submoduleResourceForeground'?: string;
  /** Color for the blame editor decoration. */
  'git.blame.editorDecorationForeground'?: string;
}

export interface SourceCodeGraphColors {
  /** History item hover label foreground color. */
  'scmGraph.historyItemHoverLabelForeground'?: string;
  /** Source control graph foreground color (1). */
  'scmGraph.foreground1'?: string;
  /** Source control graph foreground color (2). */
  'scmGraph.foreground2'?: string;
  /** Source control graph foreground color (3). */
  'scmGraph.foreground3'?: string;
  /** Source control graph foreground color (4). */
  'scmGraph.foreground4'?: string;
  /** Source control graph foreground color (5). */
  'scmGraph.foreground5'?: string;
  /** History item hover additions foreground color. */
  'scmGraph.historyItemHoverAdditionsForeground'?: string;
  /** History item hover deletions foreground color. */
  'scmGraph.historyItemHoverDeletionsForeground'?: string;
  /** History item reference color. */
  'scmGraph.historyItemRefColor'?: string;
  /** History item remote reference color. */
  'scmGraph.historyItemRemoteRefColor'?: string;
  /** History item base reference color. */
  'scmGraph.historyItemBaseRefColor'?: string;
  /** History item hover default label foreground color. */
  'scmGraph.historyItemHoverDefaultLabelForeground'?: string;
  /** History item hover default label background color. */
  'scmGraph.historyItemHoverDefaultLabelBackground'?: string;
}

export interface SettingsEditorColors {
  /** The foreground color for a section header or active title. */
  'settings.headerForeground'?: string;
  /** The line that indicates a modified setting. */
  'settings.modifiedItemIndicator'?: string;
  /** Dropdown background. */
  'settings.dropdownBackground'?: string;
  /** Dropdown foreground. */
  'settings.dropdownForeground'?: string;
  /** Dropdown border. */
  'settings.dropdownBorder'?: string;
  /** Dropdown list border. */
  'settings.dropdownListBorder'?: string;
  /** Checkbox background. */
  'settings.checkboxBackground'?: string;
  /** Checkbox foreground. */
  'settings.checkboxForeground'?: string;
  /** Checkbox border. */
  'settings.checkboxBorder'?: string;
  /** The background color of a settings row when hovered. */
  'settings.rowHoverBackground'?: string;
  /** Text input box background. */
  'settings.textInputBackground'?: string;
  /** Text input box foreground. */
  'settings.textInputForeground'?: string;
  /** Text input box border. */
  'settings.textInputBorder'?: string;
  /** Number input box background. */
  'settings.numberInputBackground'?: string;
  /** Number input box foreground. */
  'settings.numberInputForeground'?: string;
  /** Number input box border. */
  'settings.numberInputBorder'?: string;
  /** Background color of a focused setting row. */
  'settings.focusedRowBackground'?: string;
  /** The color of the row's top and bottom border when the row is focused. */
  'settings.focusedRowBorder'?: string;
  /** The color of the header container border. */
  'settings.headerBorder'?: string;
  /** The color of the Settings editor split-view sash border. */
  'settings.sashBorder'?: string;
  /** The foreground color for a section header or hovered title. */
  'settings.settingsHeaderHoverForeground'?: string;
}

export interface BreadcrumbsColors {
  /** Color of breadcrumb items. */
  'breadcrumb.foreground'?: string;
  /** Background color of breadcrumb items. */
  'breadcrumb.background'?: string;
  /** Color of focused breadcrumb items. */
  'breadcrumb.focusForeground'?: string;
  /** Color of selected breadcrumb items. */
  'breadcrumb.activeSelectionForeground'?: string;
  /** Background color of breadcrumb item picker. */
  'breadcrumbPicker.background'?: string;
}

export interface SnippetsColors {
  /** Highlight background color of a snippet tabstop. */
  'editor.snippetTabstopHighlightBackground'?: string;
  /** Highlight border color of a snippet tabstop. */
  'editor.snippetTabstopHighlightBorder'?: string;
  /** Highlight background color of the final tabstop of a snippet. */
  'editor.snippetFinalTabstopHighlightBackground'?: string;
  /** Highlight border color of the final tabstop of a snippet. */
  'editor.snippetFinalTabstopHighlightBorder'?: string;
}

export interface SymbolIconsColors {
  /** The foreground color for array symbols. */
  'symbolIcon.arrayForeground'?: string;
  /** The foreground color for boolean symbols. */
  'symbolIcon.booleanForeground'?: string;
  /** The foreground color for class symbols. */
  'symbolIcon.classForeground'?: string;
  /** The foreground color for color symbols. */
  'symbolIcon.colorForeground'?: string;
  /** The foreground color for constant symbols. */
  'symbolIcon.constantForeground'?: string;
  /** The foreground color for constructor symbols. */
  'symbolIcon.constructorForeground'?: string;
  /** The foreground color for enumerator symbols. */
  'symbolIcon.enumeratorForeground'?: string;
  /** The foreground color for enumerator member symbols. */
  'symbolIcon.enumeratorMemberForeground'?: string;
  /** The foreground color for event symbols. */
  'symbolIcon.eventForeground'?: string;
  /** The foreground color for field symbols. */
  'symbolIcon.fieldForeground'?: string;
  /** The foreground color for file symbols. */
  'symbolIcon.fileForeground'?: string;
  /** The foreground color for folder symbols. */
  'symbolIcon.folderForeground'?: string;
  /** The foreground color for function symbols. */
  'symbolIcon.functionForeground'?: string;
  /** The foreground color for interface symbols. */
  'symbolIcon.interfaceForeground'?: string;
  /** The foreground color for key symbols. */
  'symbolIcon.keyForeground'?: string;
  /** The foreground color for keyword symbols. */
  'symbolIcon.keywordForeground'?: string;
  /** The foreground color for method symbols. */
  'symbolIcon.methodForeground'?: string;
  /** The foreground color for module symbols. */
  'symbolIcon.moduleForeground'?: string;
  /** The foreground color for namespace symbols. */
  'symbolIcon.namespaceForeground'?: string;
  /** The foreground color for null symbols. */
  'symbolIcon.nullForeground'?: string;
  /** The foreground color for number symbols. */
  'symbolIcon.numberForeground'?: string;
  /** The foreground color for object symbols. */
  'symbolIcon.objectForeground'?: string;
  /** The foreground color for operator symbols. */
  'symbolIcon.operatorForeground'?: string;
  /** The foreground color for package symbols. */
  'symbolIcon.packageForeground'?: string;
  /** The foreground color for property symbols. */
  'symbolIcon.propertyForeground'?: string;
  /** The foreground color for reference symbols. */
  'symbolIcon.referenceForeground'?: string;
  /** The foreground color for snippet symbols. */
  'symbolIcon.snippetForeground'?: string;
  /** The foreground color for string symbols. */
  'symbolIcon.stringForeground'?: string;
  /** The foreground color for struct symbols. */
  'symbolIcon.structForeground'?: string;
  /** The foreground color for text symbols. */
  'symbolIcon.textForeground'?: string;
  /** The foreground color for type parameter symbols. */
  'symbolIcon.typeParameterForeground'?: string;
  /** The foreground color for unit symbols. */
  'symbolIcon.unitForeground'?: string;
  /** The foreground color for variable symbols. */
  'symbolIcon.variableForeground'?: string;
}

export interface DebugIconsColors {
  /** Icon color for breakpoints. */
  'debugIcon.breakpointForeground'?: string;
  /** Icon color for disabled breakpoints. */
  'debugIcon.breakpointDisabledForeground'?: string;
  /** Icon color for unverified breakpoints. */
  'debugIcon.breakpointUnverifiedForeground'?: string;
  /** Icon color for the current breakpoint stack frame. */
  'debugIcon.breakpointCurrentStackframeForeground'?: string;
  /** Icon color for all breakpoint stack frames. */
  'debugIcon.breakpointStackframeForeground'?: string;
  /** Debug toolbar icon for start debugging. */
  'debugIcon.startForeground'?: string;
  /** Debug toolbar icon for pause. */
  'debugIcon.pauseForeground'?: string;
  /** Debug toolbar icon for stop. */
  'debugIcon.stopForeground'?: string;
  /** Debug toolbar icon for disconnect. */
  'debugIcon.disconnectForeground'?: string;
  /** Debug toolbar icon for restart. */
  'debugIcon.restartForeground'?: string;
  /** Debug toolbar icon for step over. */
  'debugIcon.stepOverForeground'?: string;
  /** Debug toolbar icon for step into. */
  'debugIcon.stepIntoForeground'?: string;
  /** Debug toolbar icon for step over. */
  'debugIcon.stepOutForeground'?: string;
  /** Debug toolbar icon for continue. */
  'debugIcon.continueForeground'?: string;
  /** Debug toolbar icon for step back. */
  'debugIcon.stepBackForeground'?: string;
  /** Foreground color for info messages in debug REPL console. */
  'debugConsole.infoForeground'?: string;
  /** Foreground color for warning messages in debug REPL console. */
  'debugConsole.warningForeground'?: string;
  /** Foreground color for error messages in debug REPL console. */
  'debugConsole.errorForeground'?: string;
  /** Foreground color for source filenames in debug REPL console. */
  'debugConsole.sourceForeground'?: string;
  /** Foreground color for debug console input marker icon. */
  'debugConsoleInputIcon.foreground'?: string;
}

export interface NotebookColors {
  /** Notebook background color. */
  'notebook.editorBackground'?: string;
  /** The border color for notebook cells. */
  'notebook.cellBorderColor'?: string;
  /** The background color of a cell when the cell is hovered. */
  'notebook.cellHoverBackground'?: string;
  /** The color of the notebook cell insertion indicator. */
  'notebook.cellInsertionIndicator'?: string;
  /** The background color of notebook cell status bar items. */
  'notebook.cellStatusBarItemHoverBackground'?: string;
  /** The color of the separator in the cell bottom toolbar */
  'notebook.cellToolbarSeparator'?: string;
  /** The color of the notebook cell editor background */
  'notebook.cellEditorBackground'?: string;
  /** The background color of a cell when the cell is focused. */
  'notebook.focusedCellBackground'?: string;
  /** The color of the cell's focus indicator borders when the cell is focused. */
  'notebook.focusedCellBorder'?: string;
  /** The color of the notebook cell editor border. */
  'notebook.focusedEditorBorder'?: string;
  /** The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor. */
  'notebook.inactiveFocusedCellBorder'?: string;
  /** The color of the cell's borders when multiple cells are selected. */
  'notebook.inactiveSelectedCellBorder'?: string;
  /** The Color of the notebook output container background. */
  'notebook.outputContainerBackgroundColor'?: string;
  /** The border color of the notebook output container. */
  'notebook.outputContainerBorderColor'?: string;
  /** The background color of a cell when the cell is selected. */
  'notebook.selectedCellBackground'?: string;
  /** The color of the cell's top and bottom border when the cell is selected but not focused. */
  'notebook.selectedCellBorder'?: string;
  /** Background color of highlighted cell */
  'notebook.symbolHighlightBackground'?: string;
  /** Notebook scrollbar slider background color when clicked on. */
  'notebookScrollbarSlider.activeBackground'?: string;
  /** Notebook scrollbar slider background color. */
  'notebookScrollbarSlider.background'?: string;
  /** Notebook scrollbar slider background color when hovering. */
  'notebookScrollbarSlider.hoverBackground'?: string;
  /** The error icon color of notebook cells in the cell status bar. */
  'notebookStatusErrorIcon.foreground'?: string;
  /** The running icon color of notebook cells in the cell status bar. */
  'notebookStatusRunningIcon.foreground'?: string;
  /** The success icon color of notebook cells in the cell status bar. */
  'notebookStatusSuccessIcon.foreground'?: string;
  /** The color of the running cell decoration in the notebook editor overview ruler. */
  'notebookEditorOverviewRuler.runningCellForeground'?: string;
}

export interface ChartColors {
  /** Contrast color for text in charts. */
  'charts.foreground'?: string;
  /** Color for lines in charts. */
  'charts.lines'?: string;
  /** Color for red elements in charts. */
  'charts.red'?: string;
  /** Color for blue elements in charts. */
  'charts.blue'?: string;
  /** Color for yellow elements in charts. */
  'charts.yellow'?: string;
  /** Color for orange elements in charts. */
  'charts.orange'?: string;
  /** Color for green elements in charts. */
  'charts.green'?: string;
  /** Color for purple elements in charts. */
  'charts.purple'?: string;
  /** Line color for the chart. */
  'chart.line'?: string;
  /** Axis color for the chart. */
  'chart.axis'?: string;
  /** Guide line for the chart. */
  'chart.guide'?: string;
}

export interface PortsColors {
  /** The color of the icon for a port that has an associated running process. */
  'ports.iconRunningProcessForeground'?: string;
}

export interface CommentsViewColors {
  /** Icon color for resolved comments. */
  'commentsView.resolvedIcon'?: string;
  /** Icon color for unresolved comments. */
  'commentsView.unresolvedIcon'?: string;
}

export interface ActionBarColor {
  /** Background color for toggled action items in action bar. */
  'actionBar.toggledBackground'?: string;
}

export interface SimpleFindWidgetColors {
  /** Border color of the sash border. */
  'simpleFindWidget.sashBorder'?: string;
}

export interface GaugeColors {
  /** Gauge background color. */
  'gauge.background'?: string;
  /** Gauge foreground color. */
  'gauge.foreground'?: string;
  /** Gauge border color. */
  'gauge.border'?: string;
  /** Gauge warning background color. */
  'gauge.warningBackground'?: string;
  /** Gauge warning foreground color. */
  'gauge.warningForeground'?: string;
  /** Gauge error background color. */
  'gauge.errorBackground'?: string;
  /** Gauge error foreground color. */
  'gauge.errorForeground'?: string;
}

/**
 * Colors in the workbench
 * doc: {@link https://code.visualstudio.com/api/references/theme-color}
 * src: {@link https://github.com/microsoft/vscode/commits/main/src/vs/platform/theme/common/colorRegistry.ts}
 */
export interface UIColor
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

export type SemanticTokenColors = Record<string, string | TokenColorSetting>;

export const Type = {
  /** For identifiers that declare or reference a namespace, module, or package. */
  namespace: 'namespace',
  /** For identifiers that declare or reference a class type. */
  class: 'class',
  /** For identifiers that declare or reference an enumeration type. */
  enum: 'enum',
  /** For identifiers that declare or reference an interface type. */
  interface: 'interface',
  /** For identifiers that declare or reference a struct type. */
  struct: 'struct',
  /** For identifiers that declare or reference a type parameter. */
  typeParameter: 'typeParameter',
  /** For identifiers that declare or reference a type that is not covered above. */
  type: 'type',
  /** For identifiers that declare or reference a function or method parameters. */
  parameter: 'parameter',
  /** For identifiers that declare or reference a local or global variable. */
  variable: 'variable',
  /** For identifiers that declare or reference a member property, member field, or member variable. */
  property: 'property',
  /** For identifiers that declare or reference an enumeration property, constant, or member. */
  enumMember: 'enumMember',
  /** For identifiers that declare or reference decorators and annotations. */
  decorator: 'decorator',
  /** For identifiers that declare an event property. */
  event: 'event',
  /** For identifiers that declare a function. */
  function: 'function',
  /** For identifiers that declare a member function or method. */
  method: 'method',
  /** For identifiers that declare a macro. */
  macro: 'macro',
  /** For identifiers that declare a label. */
  label: 'label',
  /** For tokens that represent a comment. */
  comment: 'comment',
  /** For tokens that represent a string literal. */
  string: 'string',
  /** For tokens that represent a language keyword. */
  keyword: 'keyword',
  /** For tokens that represent a number literal. */
  number: 'number',
  /** For tokens that represent a regular expression literal. */
  regexp: 'regexp',
  /** For tokens that represent an operator. */
  operator: 'operator',
} as const;

export const Mod = {
  /** For declarations of symbols. */
  declaration: 'declaration',
  /** For definitions of symbols, for example, in header files. */
  definition: 'definition',
  /** For readonly variables and member fields (constants). */
  readonly: 'readonly',
  /** For class members (static members). */
  static: 'static',
  /** For symbols that should no longer be used. */
  deprecated: 'deprecated',
  /** For types and member functions that are abstract. */
  abstract: 'abstract',
  /** For functions that are marked async. */
  async: 'async',
  /** For variable references where the variable is assigned to. */
  modification: 'modification',
  /** For occurrences of symbols in documentation. */
  documentation: 'documentation',
  /** For symbols that are part of the standard library. */
  defaultLibrary: 'defaultLibrary',
} as const;

export interface VsCodeTheme {
  $schema?: string;
  name: string;
  include?: string;
  /** Colors in the workbench */
  colors?: UIColor;
  /** Colors for syntax highlighting */
  tokenColors?: TokenColor[];
  /** Whether semantic highlighting should be enabled for this theme. */
  semanticHighlighting?: boolean;
  /**
   * Colors for semantic tokens
   *
   * doc: {@link https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#predefined-textmate-scope-mappings}
   *
   * ref: {@link https://github.com/microsoft/vscode/blob/main/src/vs/platform/theme/common/tokenClassificationRegistry.ts#L506-L559}
   */
  semanticTokenColors?: SemanticTokenColors;
}
