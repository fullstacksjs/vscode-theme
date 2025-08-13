import { Foregrounds, UIColors } from '../colors.ts';

export const editorWidget = {
  'editorWidget.foreground': UIColors.Foreground, // Foreground color of editor widgets, such as find/replace.
  'editorWidget.background': UIColors.BackgroundElevated, // Background color of editor widgets, such as Find/Replace.
  'editorWidget.border': UIColors.BackgroundHover, // Border color of the editor widget unless the widget does not contain a border or defines its own border color.
  'editorWidget.resizeBorder': UIColors.BackgroundHover, // Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.

  'editorSuggestWidget.background': UIColors.BackgroundElevated, // Background color of the suggestion widget.
  'editorSuggestWidget.border': UIColors.Border, // Border color of the suggestion widget.
  // 'editorSuggestWidget.foreground': '', // Foreground color of the suggestion widget.
  // 'editorSuggestWidget.focusHighlightForeground': '', // Color of the match highlights in the suggest widget when an item is focused.
  // 'editorSuggestWidget.highlightForeground': '', // Color of the match highlights in the suggestion widget.
  // 'editorSuggestWidget.selectedBackground': '', // Background color of the selected entry in the suggestion widget.
  // 'editorSuggestWidget.selectedForeground': '', // Foreground color of the selected entry in the suggest widget.
  // 'editorSuggestWidget.selectedIconForeground': '', // Icon foreground color of the selected entry in the suggest widget.
  'editorSuggestWidgetStatus.foreground': Foregrounds.Muted, // Foreground color of the suggest widget status.

  // 'editorHoverWidget.foreground': '', // Foreground color of the editor hover.
  'editorHoverWidget.background': UIColors.BackgroundElevated, // Background color of the editor hover.
  'editorHoverWidget.border': UIColors.Border, // Border color of the editor hover.
  // 'editorHoverWidget.highlightForeground': '', // Foreground color of the active item in the parameter hint.
  'editorHoverWidget.statusBarBackground': UIColors.Transparent, // Background color of the editor hover status bar.

  'editorGhostText.border': UIColors.Transparent, // Border color of the ghost text shown by inline completion providers and the suggest preview.
  'editorGhostText.background': UIColors.Transparent, // Background color of the ghost text in the editor.
  // 'editorGhostText.foreground': '', // Foreground color of the ghost text shown by inline completion providers and the suggest preview.
  // 'editorStickyScroll.background': '', // Editor sticky scroll background color.
  // 'editorStickyScroll.border': '', // Border color of sticky scroll in the editor.
  'editorStickyScroll.shadow': UIColors.Transparent, // Shadow color of sticky scroll in the editor.
  'editorStickyScrollGutter.background': UIColors.BackgroundElevated, // Background color of the gutter part of sticky scroll in the editor.
  'editorStickyScrollHover.background': UIColors.BackgroundFocus, // Editor sticky scroll on hover background color.
  // 'debugExceptionWidget.background': UIColors.Danger, // TODO: Exception widget background color.
  // 'debugExceptionWidget.border': UIColors.Danger, // TODO: Exception widget border color.

  'editorMarkerNavigation.background': UIColors.BackgroundElevated, // Editor marker navigation widget background.
  'editorMarkerNavigationError.background': UIColors.Danger, // Editor marker navigation widget error color.
  'editorMarkerNavigationWarning.background': UIColors.Warning, // Editor marker navigation widget warning color.
  'editorMarkerNavigationInfo.background': UIColors.Info, // Editor marker navigation widget info color.
  'editorMarkerNavigationError.headerBackground': UIColors.BackgroundDanger, // Editor marker navigation widget error heading background.
  'editorMarkerNavigationWarning.headerBackground': UIColors.BackgroundWarning, // Editor marker navigation widget warning heading background.
  'editorMarkerNavigationInfo.headerBackground': UIColors.BackgroundInfo, // Editor marker navigation widget info heading background.
};
