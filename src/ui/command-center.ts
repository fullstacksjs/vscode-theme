import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const commandCenter = (colors: UIColors): VSCodeTokens => ({
  'commandCenter.activeForeground': colors.foreground.default,
  'commandCenter.background': colors.background.focus,
  'commandCenter.activeBackground': colors.background.hover,
  'commandCenter.border': colors.transparent,
  'commandCenter.inactiveForeground': false,
  'commandCenter.inactiveBorder': colors.transparent,
  'commandCenter.activeBorder': colors.transparent,
  'commandCenter.debuggingBackground': colors.unknown,
});
