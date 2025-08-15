import type { UIColor } from './UIColor.ts';

import { UIColors } from '../colors.ts';

export const extensions: UIColor = {
  'extensionButton.prominentForeground': false,
  'extensionButton.prominentBackground': false,
  'extensionButton.prominentHoverBackground': false,
  'extensionButton.background': false,
  'extensionButton.foreground': false,
  'extensionButton.hoverBackground': false,
  'extensionButton.separator': UIColors.Border,
  'extensionBadge.remoteBackground': false,
  'extensionBadge.remoteForeground': false,
  'extensionIcon.starForeground': false,
  'extensionIcon.verifiedForeground': UIColors.Success,
  'extensionIcon.preReleaseForeground': UIColors.Tertiary,
  'extensionIcon.sponsorForeground': UIColors.Unknown,
  'extensionIcon.privateForeground': UIColors.Unknown,
};
