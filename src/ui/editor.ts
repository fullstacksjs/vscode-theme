import type { UIColor } from '../types.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const editor: UIColor = {
  'foreground': Foregrounds.Neutral,
  'focusBorder': UIColors.Transparent,

  'button.background': UIColors.Primary,
  'button.foreground': Foregrounds.OnPrimary,
  'button.hoverBackground': UIColors.PrimaryHover,

  'button.secondaryForeground': UIColors.SecondaryForeground,
  'button.secondaryBackground': UIColors.Secondary,
  'button.secondaryHoverBackground': UIColors.SecondaryHover,
};
