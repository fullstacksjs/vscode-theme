import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const misc = (colors: UIColors): VSCodeTokens => ({
  'simpleFindWidget.sashBorder': colors.unknown,
  'actionBar.toggledBackground': colors.unknown,
  'ports.iconRunningProcessForeground': colors.unknown,
});
