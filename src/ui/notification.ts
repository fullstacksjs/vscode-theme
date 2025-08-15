import type { UIColor } from '../types.ts';

import { UIColors } from '../colors.ts';

export const notification: UIColor = {
  'notificationCenter.border': UIColors.Transparent, // Notification Center border color.
  'notificationCenterHeader.foreground': UIColors.Foreground, // Notification Center header foreground color.
  'notificationCenterHeader.background': UIColors.BackgroundElevated, // Notification Center header background color.
  // 'notificationToast.border': UIColors.Transparent, // TODO: Notification toast border color.
  'notifications.foreground': UIColors.Foreground, // Notification foreground color.
  'notifications.background': UIColors.BackgroundElevated, // Notification background color.
  'notifications.border': UIColors.Border, // Notification border color separating from other notifications in the Notification Center.
  // 'notificationLink.foreground': '', // TODO: Notification links foreground color.
  'notificationsErrorIcon.foreground': UIColors.Danger, // The color used for the notification error icon.
  'notificationsWarningIcon.foreground': UIColors.Warning, // The color used for the notification warning icon.
  'notificationsInfoIcon.foreground': UIColors.Info, // The color used for the notification info icon.
};
