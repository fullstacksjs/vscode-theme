import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const key = (colors: UIColors): VSCodeTokens => ({
  'keybindingLabel.background': colors.background.focus,
  'keybindingLabel.foreground': colors.foreground.support,
  'keybindingLabel.border': colors.background.hover,
  'keybindingLabel.bottomBorder': colors.background.hover,
  'keybindingTable.headerBackground': colors.background.focus,
  'keybindingTable.rowsBackground': colors.background.focus,
});
