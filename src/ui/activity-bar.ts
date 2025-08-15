import type { UIColor } from './UIColor.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const activityBar: UIColor = {
  'activityBar.background': UIColors.Background,
  'activityBar.dropBorder': UIColors.Primary,
  'activityBar.foreground': Foregrounds.Neutral,
  'activityBar.inactiveForeground': Foregrounds.Muted,
  'activityBar.border': UIColors.Border,
  'activityBar.activeBorder': UIColors.Primary,
  'activityBar.activeBackground': UIColors.Transparent,
  'activityBar.activeFocusBorder': UIColors.Primary,

  'activityBarTop.foreground': Foregrounds.Neutral,
  'activityBarTop.activeBorder': UIColors.Primary,
  'activityBarTop.inactiveForeground': Foregrounds.Muted,
  'activityBarTop.dropBorder': UIColors.Primary,
  'activityBarTop.background': UIColors.Background,
  'activityBarTop.activeBackground': UIColors.Transparent,

  'activityWarningBadge.foreground': UIColors.Warning,
  'activityWarningBadge.background': UIColors.Background,

  'activityErrorBadge.foreground': UIColors.Danger,
  'activityErrorBadge.background': UIColors.Background,
};
