import type { SemanticTokenColors } from './types.ts';

import { Foregrounds } from './colors.ts';

/**
 * doc: {@link https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#predefined-textmate-scope-mappings}
 */
export const semanticTokenColors: SemanticTokenColors = {
  type: {
    foreground: Foregrounds.Blue,
  },
  typeParameter: {
    foreground: Foregrounds.Blue,
  },
  namespace: {
    foreground: Foregrounds.Blue,
  },
  enum: {
    foreground: Foregrounds.Blue,
  },
};
