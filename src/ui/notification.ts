import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const notification = (colors: UIColors): VSCodeTokens => ({
  'notificationCenter.border': colors.transparent,
  'notificationCenterHeader.foreground': colors.foreground.default,
  'notificationCenterHeader.background': colors.background.elevated,
  'notificationToast.border': colors.unknown,
  'notifications.foreground': colors.foreground.default,
  'notifications.background': colors.background.elevated,
  'notifications.border': colors.border.default,
  'notificationLink.foreground': colors.unknown,
  'notificationsErrorIcon.foreground': colors.danger.foreground,
  'notificationsWarningIcon.foreground': colors.warning.foreground,
  'notificationsInfoIcon.foreground': colors.info.foreground,
});
