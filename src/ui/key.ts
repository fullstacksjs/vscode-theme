import type { UIColor } from '../types.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const key: UIColor = {
  'keybindingLabel.background': UIColors.BackgroundFocus, // Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.
  'keybindingLabel.foreground': Foregrounds.Support, // Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.
  'keybindingLabel.border': UIColors.BackgroundHover, // Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.
  'keybindingLabel.bottomBorder': UIColors.BackgroundHover, // Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.
};
