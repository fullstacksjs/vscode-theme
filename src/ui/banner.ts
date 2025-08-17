import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const banner = (colors: UIColors): VSCodeTokens => ({
  'banner.background': colors.warning.background,
  'banner.foreground': colors.warning.onForeground,
  'banner.iconForeground': colors.warning.onForeground,
});
