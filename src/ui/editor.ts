import type { UIColor } from '../types.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const editor: UIColor = {
  'editor.foreground': Foregrounds.Neutral,

  'window.activeBorder': UIColors.Border,
  'window.inactiveBorder': UIColors.Border,

  'activityBar.background': UIColors.Background,
  'sideBar.background': UIColors.Background,
  'titleBar.activeBackground': UIColors.Background,
  'titleBar.inactiveBackground': UIColors.Background,
  'editor.background': UIColors.Background,
  'editorGutter.background': UIColors.Background,
  'breadcrumb.background': UIColors.Background,
  'editorGroupHeader.tabsBackground': UIColors.Background,
  'panel.background': UIColors.Background,
  'minimap.background': UIColors.Background,
  'tab.inactiveBackground': UIColors.Background,
  'editorSuggestWidget.background': UIColors.Background,
  'editorGroup.emptyBackground': UIColors.Background,
  'editorCursor.background': UIColors.Background,

  'selection.background': UIColors.Primary,

  'editorInlayHint.background': UIColors.Transparent,
  'editorInlayHint.foreground': Foregrounds.Muted,

  'scrollbar.shadow': UIColors.Shadow,
  'scrollbarSlider.activeBackground': UIColors.BackgroundFocus,
  'scrollbarSlider.background': UIColors.BackgroundFocus,
  'scrollbarSlider.hoverBackground': UIColors.BackgroundHover,

  'badge.background': UIColors.Secondary,
  'badge.foreground': Foregrounds.OnSecondary,
};
