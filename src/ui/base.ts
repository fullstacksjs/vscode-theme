import type { UIColor } from './UIColor.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const base: UIColor = {
  'focusBorder': Foregrounds.Muted,
  'disabledForeground': Foregrounds.Muted,
  'widget.border': UIColors.Transparent,
  'descriptionForeground': Foregrounds.Support,
  'errorForeground': Foregrounds.Red,
  'icon.foreground': Foregrounds.Neutral,
  'sash.hoverBorder': UIColors.Border,
};
