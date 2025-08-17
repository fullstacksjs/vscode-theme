import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const activityBar = (colors: UIColors): VSCodeTokens => ({
  'activityBar.background': colors.background.default,
  'activityBar.dropBorder': colors.primary.foreground,

  'activityBar.foreground': colors.foreground.default,
  'activityBar.inactiveForeground': colors.foreground.muted,
  'activityBar.border': colors.border.default,
  'activityBar.activeBorder': colors.primary.foreground,
  'activityBar.activeBackground': colors.transparent,
  'activityBar.activeFocusBorder': colors.primary.foreground,

  'activityBarTop.foreground': colors.foreground.default,
  'activityBarTop.activeBorder': colors.primary.foreground,
  'activityBarTop.inactiveForeground': colors.foreground.muted,
  'activityBarTop.dropBorder': colors.primary.foreground,
  'activityBarTop.background': colors.background.default,
  'activityBarTop.activeBackground': colors.transparent,

  'activityWarningBadge.foreground': colors.warning.foreground,
  'activityWarningBadge.background': colors.background.default,

  'activityErrorBadge.foreground': colors.danger.foreground,
  'activityErrorBadge.background': colors.background.default,
});
