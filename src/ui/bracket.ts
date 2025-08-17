import type { UIColors } from '../colors.ts';
import type { VSCodeTokens } from './VSCodeToken.ts';

export const bracket = (colors: UIColors): VSCodeTokens => ({
  'editorBracketHighlight.foreground1': colors.rainbow.white,
  'editorBracketHighlight.foreground2': colors.rainbow.yellow,
  'editorBracketHighlight.foreground3': colors.rainbow.cyan,
  'editorBracketHighlight.foreground4': colors.rainbow.red,
});
