import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const base = (colors: UIColors): VSCodeTokens => ({
  'focusBorder': colors.foreground.muted,
  'disabledForeground': colors.foreground.muted,
  'widget.border': colors.transparent,
  'descriptionForeground': colors.foreground.support,
  'errorForeground': colors.danger.foreground,
  'icon.foreground': colors.foreground.default,
  'sash.hoverBorder': colors.border.default,
});
