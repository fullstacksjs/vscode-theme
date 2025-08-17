import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const extensions = (colors: UIColors): VSCodeTokens => ({
  'extensionButton.prominentForeground': false,
  'extensionButton.prominentBackground': false,
  'extensionButton.prominentHoverBackground': false,
  'extensionButton.background': false,
  'extensionButton.foreground': false,
  'extensionButton.hoverBackground': false,
  'extensionButton.separator': colors.border.default,
  'extensionBadge.remoteBackground': false,
  'extensionBadge.remoteForeground': false,
  'extensionIcon.starForeground': false,
  'extensionIcon.verifiedForeground': colors.success.foreground,
  'extensionIcon.preReleaseForeground': colors.tertiary.foreground,
  'extensionIcon.sponsorForeground': colors.unknown,
  'extensionIcon.privateForeground': colors.unknown,
});
