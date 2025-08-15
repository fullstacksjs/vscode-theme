import type { UIColor } from '../types.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const banner: UIColor = {
  'banner.background': UIColors.Warning, // Banner background color.
  'banner.foreground': Foregrounds.OnWarning, // Banner foreground color.
  'banner.iconForeground': Foregrounds.OnWarning, // Color for the icon in front of the banner text.
};
