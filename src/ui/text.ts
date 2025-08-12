import type { UIColor } from '../types.ts';

import { Foregrounds, UIColors } from '../colors.ts';

export const text: UIColor = {
  'foreground': Foregrounds.Neutral,

  'textBlockQuote.background': UIColors.FocusBackground,
  'textBlockQuote.border': Foregrounds.Magenta, // Border color for block quotes in text.

  'textCodeBlock.background': UIColors.FocusBackground, // Background color for code blocks in text.

  'textLink.foreground': UIColors.Link, // Foreground color for links in text.
  'textLink.activeForeground': UIColors.LinkHover, // Foreground color for links in text when clicked on and on mouse hover.

  'textPreformat.foreground': UIColors.Primary, // Foreground color for preformatted text segments.
  'textPreformat.background': UIColors.FocusBackground, // Background color for preformatted text segments.
  'textSeparator.foreground': Foregrounds.Neutral, // Color for text separators
};
