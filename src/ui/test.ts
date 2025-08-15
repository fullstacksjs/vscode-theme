import type { UIColor } from '../types.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const test: UIColor = {
  'testing.runAction': UIColors.Success, // Color for 'run' icons in the editor.
  'testing.iconErrored': UIColors.Danger, // Color for the 'Errored' icon in the test explorer.
  'testing.iconFailed': UIColors.Danger, // Color for the 'failed' icon in the test explorer.
  'testing.iconPassed': UIColors.Success, // Color for the 'passed' icon in the test explorer.
  'testing.iconQueued': Foregrounds.Support, // Color for the 'Queued' icon in the test explorer.
  'testing.iconUnset': Foregrounds.Muted, // Color for the 'Unset' icon in the test explorer.
  'testing.iconSkipped': Foregrounds.Muted, // Color for the 'Skipped' icon in the test explorer.
  'testing.iconErrored.retired': UIColors.Danger, // Retired color for the 'Errored' icon in the test explorer.
  'testing.iconFailed.retired': UIColors.Danger, // Retired color for the 'failed' icon in the test explorer.
  'testing.iconPassed.retired': UIColors.Success, // Retired color for the 'passed' icon in the test explorer.
  'testing.iconQueued.retired': Foregrounds.Support, // Retired color for the 'Queued' icon in the test explorer.
  'testing.iconUnset.retired': Foregrounds.Muted, // Retired color for the 'Unset' icon in the test explorer.
  'testing.iconSkipped.retired': Foregrounds.Muted, // Retired color for the 'Skipped' icon in the test explorer.
  // 'testing.peekBorder': '', // Color of the peek view borders and arrow.
  // 'testing.peekHeaderBackground': '', // Color of the peek view borders and arrow.
  // 'testing.message.error.lineBackground': '', // Margin color beside error messages shown inline in the editor.
  // 'testing.message.info.decorationForeground': '', // Text color of test info messages shown inline in the editor.
  // 'testing.message.info.lineBackground': '', // Margin color beside info messages shown inline in the editor.
  // 'testing.messagePeekBorder': '', // Color of the peek view borders and arrow when peeking a logged message.
  // 'testing.messagePeekHeaderBackground': '', // Color of the peek view borders and arrow when peeking a logged message.

  'testing.coveredBackground': UIColors.BackgroundSuccess, // Background color of text that was covered.
  'testing.coveredBorder': UIColors.Transparent, // Border color of text that was covered.
  'testing.coveredGutterBackground': UIColors.BackgroundSuccess, // Gutter color of regions where code was covered.
  'testing.uncoveredBranchBackground': UIColors.BackgroundWarning, // Background of the widget shown for an uncovered branch.
  'testing.uncoveredBackground': UIColors.BackgroundDanger, // Background color of text that was not covered.
  'testing.uncoveredBorder': UIColors.Transparent, // Border color of text that was not covered.
  'testing.uncoveredGutterBackground': UIColors.BackgroundDanger, // Gutter color of regions where code not covered.
  'testing.coverCountBadgeBackground': UIColors.Success, // Background for the badge indicating execution count
  'testing.coverCountBadgeForeground': Foregrounds.OnSuccess, // Foreground for the badge indicating execution count
  'testing.message.error.badgeBackground': UIColors.Danger, // Background color of test error messages shown inline in the editor.
  'testing.message.error.badgeBorder': UIColors.Transparent, // Border color of test error messages shown inline in the editor.
  'testing.message.error.badgeForeground': Foregrounds.OnDanger, // Text color of test error messages shown inline in the editor.
};
