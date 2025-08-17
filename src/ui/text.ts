import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const text = (colors: UIColors): VSCodeTokens => ({
  'foreground': colors.foreground.default,

  'textBlockQuote.background': colors.background.focus,
  'textBlockQuote.border': colors.tertiary.foreground,

  'textCodeBlock.background': colors.background.focus,

  'textLink.foreground': colors.link.default,
  'textLink.activeForeground': colors.link.hover,

  'textPreformat.foreground': colors.primary.foreground,
  'textPreformat.background': colors.background.focus,
  'textSeparator.foreground': colors.foreground.default,
});
