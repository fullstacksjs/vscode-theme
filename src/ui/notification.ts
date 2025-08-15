import type { UIColor } from './UIColor.ts';

import { UIColors } from '../colors.ts';

export const notification: UIColor = {
  'notificationCenter.border': UIColors.Transparent,
  'notificationCenterHeader.foreground': UIColors.Foreground,
  'notificationCenterHeader.background': UIColors.BackgroundElevated,
  'notificationToast.border': UIColors.Unknown,
  'notifications.foreground': UIColors.Foreground,
  'notifications.background': UIColors.BackgroundElevated,
  'notifications.border': UIColors.Border,
  'notificationLink.foreground': UIColors.Unknown,
  'notificationsErrorIcon.foreground': UIColors.Danger,
  'notificationsWarningIcon.foreground': UIColors.Warning,
  'notificationsInfoIcon.foreground': UIColors.Info,
};
