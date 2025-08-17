import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const editorWidget = (colors: UIColors): VSCodeTokens => ({
  'editorWidget.foreground': colors.foreground.default,
  'editorWidget.background': colors.background.elevated,
  'editorWidget.border': colors.background.hover,
  'editorWidget.resizeBorder': colors.background.hover,

  'editorSuggestWidget.background': colors.background.elevated,
  'editorSuggestWidget.border': colors.border.default,
  'editorSuggestWidget.foreground': false,
  'editorSuggestWidget.focusHighlightForeground': false,
  'editorSuggestWidget.highlightForeground': false,
  'editorSuggestWidget.selectedBackground': false,
  'editorSuggestWidget.selectedForeground': false,
  'editorSuggestWidget.selectedIconForeground': false,
  'editorSuggestWidgetStatus.foreground': colors.foreground.muted,

  'editorHoverWidget.foreground': false,
  'editorHoverWidget.background': colors.background.elevated,
  'editorHoverWidget.border': colors.border.default,
  'editorHoverWidget.highlightForeground': false,
  'editorHoverWidget.statusBarBackground': colors.transparent,

  'editorGhostText.border': colors.transparent,
  'editorGhostText.background': colors.transparent,
  'editorGhostText.foreground': false,
  'editorStickyScroll.background': false,
  'editorStickyScroll.border': false,
  'editorStickyScroll.shadow': colors.transparent,
  'editorStickyScrollGutter.background': colors.background.elevated,
  'editorStickyScrollHover.background': colors.background.focus,
  'debugExceptionWidget.background': colors.unknown,
  'debugExceptionWidget.border': colors.unknown,

  'editorMarkerNavigation.background': colors.background.elevated,
  'editorMarkerNavigationError.background': colors.danger.foreground,
  'editorMarkerNavigationWarning.background': colors.warning.foreground,
  'editorMarkerNavigationInfo.background': colors.info.foreground,
  'editorMarkerNavigationError.headerBackground': colors.danger.background,
  'editorMarkerNavigationWarning.headerBackground': colors.warning.background,
  'editorMarkerNavigationInfo.headerBackground': colors.info.background,
});
