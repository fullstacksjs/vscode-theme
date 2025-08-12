import type { UIColor } from '../types.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const activityBar: UIColor = {
  'activityBar.background': UIColors.Background, // Activity Bar background color.
  'activityBar.dropBorder': UIColors.Primary, // Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
  'activityBar.foreground': Foregrounds.Neutral, // Activity Bar foreground color (for example used for the icons).
  'activityBar.inactiveForeground': Foregrounds.Muted, // Activity Bar item foreground color when it is inactive.
  'activityBar.border': UIColors.Border, // Activity Bar border color with the Side Bar.
  'activityBar.activeBorder': UIColors.Primary, // Activity Bar active indicator border color.
  'activityBar.activeBackground': UIColors.Transparent, // Activity Bar optional background color for the active element.
  'activityBar.activeFocusBorder': UIColors.Primary, // Activity bar focus border color for the active item.

  'activityBarTop.foreground': Foregrounds.Neutral, // Active foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
  'activityBarTop.activeBorder': UIColors.Primary, // Focus border color for the active item in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
  'activityBarTop.inactiveForeground': Foregrounds.Muted, // Inactive foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
  'activityBarTop.dropBorder': UIColors.Primary, // Drag and drop feedback color for the items in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
  'activityBarTop.background': UIColors.Background, // Background color of the activity bar when set to top / bottom.
  'activityBarTop.activeBackground': UIColors.Transparent, // Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar.

  'activityWarningBadge.foreground': UIColors.Warning, // Foreground color of the warning activity badge
  'activityWarningBadge.background': UIColors.Background, // Background color of the warning activity badge

  'activityErrorBadge.foreground': UIColors.Danger, // Foreground color of the error activity badge
  'activityErrorBadge.background': UIColors.Background, // Background color of the error activity badge
};
