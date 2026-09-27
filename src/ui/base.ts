import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const base = (colors: UIColors): VSCodeTokens => ({
  'contrastActiveBorder': colors.primary.foreground,
  'contrastBorder': colors.border.default,
  'focusBorder': colors.foreground.muted,
  'disabledForeground': colors.foreground.muted,
  'widget.border': colors.transparent,
  'widget.shadow': colors.transparent,
  'selection.background': colors.selection.focus,
  'descriptionForeground': colors.foreground.support,
  'errorForeground': colors.danger.foreground,
  'icon.foreground': colors.foreground.default,
  'sash.hoverBorder': colors.border.default,
  'window.activeBorder': colors.border.default,
  'window.inactiveBorder': colors.border.muted,

  'toolbar.hoverBackground': colors.background.hover,
  'toolbar.hoverOutline': colors.transparent,
  'toolbar.activeBackground': colors.background.focus,

  'surface.background': colors.background.elevated,
  'surface.foreground': colors.foreground.default,
  'surface.border': colors.border.default,
  'modernSash.gripForeground': colors.foreground.muted,
  'modernUI.shellBackground': colors.background.default,
  'modernUI.inactiveShellBackground': colors.background.elevated,
});
