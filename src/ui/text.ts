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
  'textPreformat.border': colors.border.default,
  'textSeparator.foreground': colors.foreground.default,

  'markdownAlert.note.foreground': colors.info.foreground,
  'markdownAlert.tip.foreground': colors.success.foreground,
  'markdownAlert.important.foreground': colors.tertiary.foreground,
  'markdownAlert.warning.foreground': colors.warning.foreground,
  'markdownAlert.caution.foreground': colors.danger.foreground,
});
