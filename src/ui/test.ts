import type { UIColor } from './UIColor.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const test: UIColor = {
  'testing.runAction': UIColors.Success,
  'testing.iconErrored': UIColors.Danger,
  'testing.iconFailed': UIColors.Danger,
  'testing.iconPassed': UIColors.Success,
  'testing.iconQueued': Foregrounds.Support,
  'testing.iconUnset': Foregrounds.Muted,
  'testing.iconSkipped': Foregrounds.Muted,
  'testing.iconErrored.retired': UIColors.Danger,
  'testing.iconFailed.retired': UIColors.Danger,
  'testing.iconPassed.retired': UIColors.Success,
  'testing.iconQueued.retired': Foregrounds.Support,
  'testing.iconUnset.retired': Foregrounds.Muted,
  'testing.iconSkipped.retired': Foregrounds.Muted,
  'testing.peekBorder': false,
  'testing.peekHeaderBackground': false,
  'testing.message.error.lineBackground': false,
  'testing.message.info.decorationForeground': false,
  'testing.message.info.lineBackground': false,
  'testing.messagePeekBorder': false,
  'testing.messagePeekHeaderBackground': false,

  'testing.coveredBackground': UIColors.BackgroundSuccess,
  'testing.coveredBorder': UIColors.Transparent,
  'testing.coveredGutterBackground': UIColors.BackgroundSuccess,
  'testing.uncoveredBranchBackground': UIColors.BackgroundWarning,
  'testing.uncoveredBackground': UIColors.BackgroundDanger,
  'testing.uncoveredBorder': UIColors.Transparent,
  'testing.uncoveredGutterBackground': UIColors.BackgroundDanger,
  'testing.coverCountBadgeBackground': UIColors.Success,
  'testing.coverCountBadgeForeground': Foregrounds.OnSuccess,
  'testing.message.error.badgeBackground': UIColors.Danger,
  'testing.message.error.badgeBorder': UIColors.Transparent,
  'testing.message.error.badgeForeground': Foregrounds.OnDanger,
};
