import type { UIColor } from './UIColor.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const key: UIColor = {
  'keybindingLabel.background': UIColors.BackgroundFocus,
  'keybindingLabel.foreground': Foregrounds.Support,
  'keybindingLabel.border': UIColors.BackgroundHover,
  'keybindingLabel.bottomBorder': UIColors.BackgroundHover,
  'keybindingTable.headerBackground': UIColors.BackgroundFocus,
  'keybindingTable.rowsBackground': UIColors.BackgroundFocus,
};
