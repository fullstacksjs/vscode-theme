import type { UIColor } from './UIColor.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const text: UIColor = {
  'foreground': Foregrounds.Neutral,

  'textBlockQuote.background': UIColors.BackgroundFocus,
  'textBlockQuote.border': Foregrounds.Magenta,

  'textCodeBlock.background': UIColors.BackgroundFocus,

  'textLink.foreground': UIColors.Link,
  'textLink.activeForeground': UIColors.LinkHover,

  'textPreformat.foreground': UIColors.Primary,
  'textPreformat.background': UIColors.BackgroundFocus,
  'textSeparator.foreground': Foregrounds.Neutral,
};
