import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const titleBar = (colors: UIColors): VSCodeTokens => ({
  'titleBar.activeBackground': colors.background.default,
  'titleBar.activeForeground': colors.foreground.support,
  'titleBar.inactiveBackground': colors.background.default,
  'titleBar.inactiveForeground': colors.foreground.muted,
  'titleBar.border': colors.border.default,
});
