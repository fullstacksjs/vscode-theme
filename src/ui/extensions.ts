import type { UIColor } from '../types.ts';

import { UIColors } from '../colors.ts';

export const extensions: UIColor = {
  // 'extensionButton.prominentForeground': '', // Extension view button foreground color (for example Install button).
  // 'extensionButton.prominentBackground': '', // Extension view button background color.
  // 'extensionButton.prominentHoverBackground': '', // Extension view button background hover color.
  // 'extensionButton.background': '', // Button background color for extension actions.
  // 'extensionButton.foreground': '', // Button foreground color for extension actions.
  // 'extensionButton.hoverBackground': '', // Button background hover color for extension actions.
  'extensionButton.separator': UIColors.Border, // Button separator color for extension actions.
  // 'extensionBadge.remoteBackground': '', // Background color for the remote badge in the extensions view.
  // 'extensionBadge.remoteForeground': '', // Foreground color for the remote badge in the extensions view.
  // 'extensionIcon.starForeground': '', // The icon color for extension ratings.
  'extensionIcon.verifiedForeground': UIColors.Success, // The icon color for extension verified publisher.
  'extensionIcon.preReleaseForeground': UIColors.Tertiary, // The icon color for pre-release extension.
  // 'extensionIcon.sponsorForeground': UIColors.Warning, // TODO: The icon color for extension sponsor.
  // 'extensionIcon.privateForeground': '', // TODO: The icon color for private extensions.
};
