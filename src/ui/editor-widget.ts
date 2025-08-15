import type { UIColor } from './UIColor.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const editorWidget: UIColor = {
  'editorWidget.foreground': UIColors.Foreground,
  'editorWidget.background': UIColors.BackgroundElevated,
  'editorWidget.border': UIColors.BackgroundHover,
  'editorWidget.resizeBorder': UIColors.BackgroundHover,

  'editorSuggestWidget.background': UIColors.BackgroundElevated,
  'editorSuggestWidget.border': UIColors.Border,
  'editorSuggestWidget.foreground': false,
  'editorSuggestWidget.focusHighlightForeground': false,
  'editorSuggestWidget.highlightForeground': false,
  'editorSuggestWidget.selectedBackground': false,
  'editorSuggestWidget.selectedForeground': false,
  'editorSuggestWidget.selectedIconForeground': false,
  'editorSuggestWidgetStatus.foreground': Foregrounds.Muted,

  'editorHoverWidget.foreground': false,
  'editorHoverWidget.background': UIColors.BackgroundElevated,
  'editorHoverWidget.border': UIColors.Border,
  'editorHoverWidget.highlightForeground': false,
  'editorHoverWidget.statusBarBackground': UIColors.Transparent,

  'editorGhostText.border': UIColors.Transparent,
  'editorGhostText.background': UIColors.Transparent,
  'editorGhostText.foreground': false,
  'editorStickyScroll.background': false,
  'editorStickyScroll.border': false,
  'editorStickyScroll.shadow': UIColors.Transparent,
  'editorStickyScrollGutter.background': UIColors.BackgroundElevated,
  'editorStickyScrollHover.background': UIColors.BackgroundFocus,
  'debugExceptionWidget.background': UIColors.Unknown,
  'debugExceptionWidget.border': UIColors.Unknown,

  'editorMarkerNavigation.background': UIColors.BackgroundElevated,
  'editorMarkerNavigationError.background': UIColors.Danger,
  'editorMarkerNavigationWarning.background': UIColors.Warning,
  'editorMarkerNavigationInfo.background': UIColors.Info,
  'editorMarkerNavigationError.headerBackground': UIColors.BackgroundDanger,
  'editorMarkerNavigationWarning.headerBackground': UIColors.BackgroundWarning,
  'editorMarkerNavigationInfo.headerBackground': UIColors.BackgroundInfo,
};
